export const MAX_DEX_NUMBER = 1025;

export const TYPE_COLORS = {
  normal: '#b8b68e',
  fire: '#ff744d',
  water: '#50b8ff',
  electric: '#f6d94d',
  grass: '#78d47d',
  ice: '#90e4ec',
  fighting: '#e46a63',
  poison: '#c17bd5',
  ground: '#daa763',
  flying: '#a9b6ef',
  psychic: '#f680b4',
  bug: '#b7cd58',
  rock: '#c6a66a',
  ghost: '#8e80bf',
  dragon: '#8d79ec',
  dark: '#8f7668',
  steel: '#aabac3',
  fairy: '#ee9bc5',
};

export const TYPE_ICONS = {
  normal: '●', fire: '♨', water: '≈', electric: 'ϟ', grass: '⌘', ice: '✧',
  fighting: '✹', poison: '☣', ground: '◆', flying: '⌁', psychic: '◉', bug: '⌬',
  rock: '⬟', ghost: '☾', dragon: '✺', dark: '◐', steel: '⬡', fairy: '✦',
};

export const STAT_LABELS = {
  hp: 'HP', attack: 'ATK', defense: 'DEF', 'special-attack': 'SP. ATK',
  'special-defense': 'SP. DEF', speed: 'SPD',
};

const cache = new Map();
const inFlight = new Map();

/** Fetch + normalize a single Pokémon from PokéAPI into card-ready shape. */
export async function fetchPokemon(nameOrId) {
  const key = String(nameOrId).trim().toLowerCase();

  if (cache.has(key)) return cache.get(key);
  if (inFlight.has(key)) return inFlight.get(key);

  const request = Promise.all([
    fetch(`https://pokeapi.co/api/v2/pokemon/${encodeURIComponent(key)}`),
    fetch(`https://pokeapi.co/api/v2/pokemon-species/${encodeURIComponent(key)}`),
  ])
    .then(async ([pokemonResponse, speciesResponse]) => {
      if (!pokemonResponse.ok || !speciesResponse.ok) {
        if (pokemonResponse.status === 404 || speciesResponse.status === 404) {
          throw new Error('We could not find that Pokémon in the Pokédex.');
        }
        throw new Error('The Pokédex signal is a little fuzzy. Please try again.');
      }

      const [pokemon, species] = await Promise.all([
        pokemonResponse.json(),
        speciesResponse.json(),
      ]);

      const englishEntry = species.flavor_text_entries.find(
        (entry) => entry.language.name === 'en',
      );
      const hpStat = pokemon.stats.find((stat) => stat.stat.name === 'hp');
      const primaryType = pokemon.types[0]?.type.name ?? 'normal';

      const cardPokemon = {
        id: pokemon.id,
        name: pokemon.name,
        types: pokemon.types.map((item) => item.type.name),
        primaryType,
        tint: TYPE_COLORS[primaryType] ?? TYPE_COLORS.normal,
        stats: pokemon.stats.map((stat) => ({
          name: stat.stat.name,
          value: stat.base_stat,
        })),
        displayHp: Math.max(30, Math.round((hpStat?.base_stat ?? 45) * 2.25)),
        height: pokemon.height / 10,
        weight: pokemon.weight / 10,
        artwork:
          pokemon.sprites.other?.['official-artwork']?.front_default ??
          pokemon.sprites.front_default,
        flavor:
          englishEntry?.flavor_text.replace(/[\f\n]+/g, ' ').replace(/\s+/g, ' ').trim() ??
          'This Pokémon has not recorded a field note yet.',
        isRare: species.is_legendary || species.is_mythical,
        rarity: species.is_mythical
          ? 'Mythical'
          : species.is_legendary
            ? 'Legendary'
            : 'Discovery',
      };

      cache.set(cardPokemon.name, cardPokemon);
      cache.set(String(cardPokemon.id), cardPokemon);
      return cardPokemon;
    })
    .finally(() => {
      inFlight.delete(key);
    });

  inFlight.set(key, request);
  return request;
}

export function randomDexId(exclude) {
  let id = Math.floor(Math.random() * MAX_DEX_NUMBER) + 1;
  if (id === exclude) id = (id % MAX_DEX_NUMBER) + 1;
  return id;
}
