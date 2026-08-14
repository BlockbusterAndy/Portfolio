import { useRef } from 'react';
import PropTypes from 'prop-types';
import { STAT_LABELS, TYPE_COLORS, TYPE_ICONS } from '../../lib/pokemon';
import './HoloCard.css';

const formatDex = (id) => `No. ${String(id).padStart(4, '0')}`;
/** Visual cap — almost every base stat lands under this, so bars stay readable. */
const STAT_CEILING = 180;

function HoloCard({ pokemon }) {
  const cardRef = useRef(null);
  const visibleStats = ['attack', 'defense', 'speed']
    .map((name) => pokemon.stats.find((stat) => stat.name === name))
    .filter(Boolean);

  const setPointerPosition = (event) => {
    const card = cardRef.current;
    if (!card) return;
    const bounds = card.getBoundingClientRect();
    const x = Math.min(100, Math.max(0, ((event.clientX - bounds.left) / bounds.width) * 100));
    const y = Math.min(100, Math.max(0, ((event.clientY - bounds.top) / bounds.height) * 100));
    const rotateY = ((x - 50) / 50) * 10;
    const rotateX = ((50 - y) / 50) * 10;

    card.style.setProperty('--pointer-x', `${x}%`);
    card.style.setProperty('--pointer-y', `${y}%`);
    card.style.setProperty('--rotate-x', `${rotateX}deg`);
    card.style.setProperty('--rotate-y', `${rotateY}deg`);
    card.style.setProperty('--sheen-x', `${100 - x}%`);
    card.style.setProperty('--hue', `${(x - 50) * 2.6}deg`);
    card.dataset.active = 'true';
  };

  const resetPointer = () => {
    const card = cardRef.current;
    if (!card) return;
    card.style.setProperty('--pointer-x', '50%');
    card.style.setProperty('--pointer-y', '50%');
    card.style.setProperty('--rotate-x', '0deg');
    card.style.setProperty('--rotate-y', '0deg');
    card.style.setProperty('--sheen-x', '50%');
    card.style.setProperty('--hue', '0deg');
    delete card.dataset.active;
  };

  return (
    <article
      ref={cardRef}
      className={`holo-card ${pokemon.isRare ? 'holo-card--rare' : 'holo-card--standard'}`}
      style={{ '--type-color': pokemon.tint }}
      onPointerMove={setPointerPosition}
      onPointerEnter={setPointerPosition}
      onPointerLeave={resetPointer}
      onPointerCancel={resetPointer}
      aria-label={`${pokemon.name} holographic Pokémon card`}
    >
      <div className="card-edge" aria-hidden="true" />

      <div className="card-body">
        {/* Foil + light layers. Isolated group so blend modes can never
            reach the UI, which sits in .card-content above the scrims. */}
        <div className="foil-stack" aria-hidden="true">
          <div className="card-grain" />
          <div className="card-tint" />
          <div className="foil-pattern" />
          <div className="foil-grating" />
          <div className="foil-sheen" />
          <div className="foil-glare" />
          <div className="foil-sparkles" />
          <div className="card-scanlines" />
        </div>

        {/* Legibility scrims: above the foil, below the UI. */}
        <div className="card-scrim card-scrim--top" aria-hidden="true" />
        <div className="card-scrim card-scrim--bottom" aria-hidden="true" />

        <div className="card-content">
        <header className="card-topline">
          <div className="card-id">
            <p className="card-subtitle">Field Record<i /> {formatDex(pokemon.id)}</p>
            <h3>{pokemon.name}</h3>
          </div>
          <div className="hp">
            <span>HP</span>
            <b>{pokemon.displayHp}</b>
          </div>
        </header>

        <div className="type-row">
          {pokemon.types.map((type) => (
            <span key={type} className="type-pill" style={{ '--badge-color': TYPE_COLORS[type] }}>
              <b>{TYPE_ICONS[type]}</b>{type}
            </span>
          ))}
          {pokemon.isRare && <span className="type-pill rarity-pill">✦ {pokemon.rarity}</span>}
        </div>

        <div className="art-stage">
          <div className="art-halo" aria-hidden="true" />
          <div className="art-rings" aria-hidden="true" />
          <div className="art-floor" aria-hidden="true" />
          {pokemon.artwork ? (
            <img src={pokemon.artwork} alt={`${pokemon.name} official artwork`} loading="lazy" />
          ) : (
            <div className="no-art">ARTWORK<br />UNAVAILABLE</div>
          )}
        </div>

        <div className="stat-bars">
          {visibleStats.map((stat) => (
            <div className="stat-bar" key={stat.name}>
              <span className="stat-bar__label">{STAT_LABELS[stat.name]}</span>
              <span className="stat-bar__track">
                <span
                  className="stat-bar__fill"
                  style={{ width: `${Math.min(100, (stat.value / STAT_CEILING) * 100)}%` }}
                />
              </span>
              <span className="stat-bar__value">{stat.value}</span>
            </div>
          ))}
        </div>

        <div className="flavor-box">
          <p>{pokemon.flavor}</p>
        </div>

        <footer className="card-footer">
          <div className="measurements">
            <span><b>HT</b>{pokemon.height} m</span>
            <span><b>WT</b>{pokemon.weight} kg</span>
          </div>
          <span className="card-footer__mark">◈ POKéAPI</span>
        </footer>
        </div>
      </div>
    </article>
  );
}

HoloCard.propTypes = {
  pokemon: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    types: PropTypes.arrayOf(PropTypes.string).isRequired,
    tint: PropTypes.string.isRequired,
    stats: PropTypes.arrayOf(
      PropTypes.shape({ name: PropTypes.string, value: PropTypes.number }),
    ).isRequired,
    displayHp: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    weight: PropTypes.number.isRequired,
    artwork: PropTypes.string,
    flavor: PropTypes.string,
    isRare: PropTypes.bool,
    rarity: PropTypes.string,
  }).isRequired,
};

export default HoloCard;
