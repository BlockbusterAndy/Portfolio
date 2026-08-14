import { useCallback, useEffect, useRef, useState } from "react";
import { Shuffle } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import HoloCard from "./HoloCard";
import { fetchPokemon, randomDexId } from "../../lib/pokemon";

/** First card on load is always Gengar; the button draws at random from there. */
const DEFAULT_POKEMON = "gengar";

/**
 * Pokémon holo card (PokéAPI) with a button to draw a random one.
 */
const PokemonHoloSlot = () => {
  const [pokemon, setPokemon] = useState(null);
  const [status, setStatus] = useState("loading");
  const [error, setError] = useState("");
  const requestRef = useRef(0);

  const load = useCallback(async (nameOrId) => {
    const requestId = ++requestRef.current;
    setStatus("loading");
    setError("");

    try {
      const next = await fetchPokemon(nameOrId);
      if (requestId !== requestRef.current) return;
      setPokemon(next);
      setStatus("ready");
    } catch (fetchError) {
      if (requestId !== requestRef.current) return;
      setError(fetchError.message);
      setStatus("error");
    }
  }, []);

  const draw = useCallback(
    () => load(randomDexId(pokemon?.id)),
    [load, pokemon?.id],
  );

  // First paint: always Gengar.
  useEffect(() => {
    load(DEFAULT_POKEMON);
  }, [load]);

  return (
    <div className="holo-slot">
      {status === "ready" && pokemon ? (
        <AnimatePresence mode="wait">
          <motion.div
            key={pokemon.id}
            initial={{ opacity: 0, y: 14, rotate: -1.5 }}
            animate={{ opacity: 1, y: 0, rotate: 0 }}
            exit={{ opacity: 0, y: -14 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="flex w-full justify-center"
          >
            <HoloCard pokemon={pokemon} />
          </motion.div>
        </AnimatePresence>
      ) : status === "error" ? (
        <div className="holo-skeleton">
          <span>Pokédex link lost</span>
          <button type="button" onClick={() => load(pokemon ? randomDexId(pokemon.id) : DEFAULT_POKEMON)}>
            Retry
          </button>
          <span className="sr-only">{error}</span>
        </div>
      ) : (
        <div className="holo-skeleton">
          <div className="holo-skeleton__ring" />
          <span>Establishing PokéAPI link</span>
        </div>
      )}

      <button
        type="button"
        onClick={draw}
        disabled={status === "loading"}
        className="flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-medium text-white backdrop-blur-sm transition-all duration-300 hover:border-white/30 hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-50"
      >
        <Shuffle size={16} className={status === "loading" ? "animate-spin" : ""} />
        {status === "loading" ? "Drawing…" : "Draw another Pokémon"}
      </button>
    </div>
  );
};

export default PokemonHoloSlot;
