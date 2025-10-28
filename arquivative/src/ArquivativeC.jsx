import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, MapPin, X, Filter } from "lucide-react";

const PROJECTS = [
  {
    id: "01",
    title: "Civic Canopy Pavilion",
    cover:
      "https://images.unsplash.com/photo-1529429612776-0a0f1a9b1b52?q=80&w=1600&auto=format&fit=crop",
    location: "Guadalajara, MX",
    year: "2025",
    tags: ["public", "pavilion", "timber"],
    blurb:
      "A lightweight timber canopy that shades public programs while harvesting rainwater.",
  },
  {
    id: "02",
    title: "Riverfront Cultural Hub",
    cover:
      "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?q=80&w=1600&auto=format&fit=crop",
    location: "Monterrey, MX",
    year: "2024",
    tags: ["museum", "mixed-use", "landscape"],
    blurb:
      "An elevated promenade stitching galleries, studios, and a flood-resilient park.",
  },
];

export default function ArquivativeC() {
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState(null);

  const filtered = useMemo(() => {
    return PROJECTS.filter((p) =>
      p.title.toLowerCase().includes(query.toLowerCase())
    );
  }, [query]);

  return (
    <div className="min-h-screen bg-white text-neutral-900">
      {/* Header */}
      <header className="p-6 flex justify-between items-center border-b border-neutral-200 sticky top-0 bg-white/80 backdrop-blur">
        <h1 className="font-bold text-xl tracking-tight">ArquivativeC</h1>
        <input
          type="text"
          placeholder="Buscar proyecto..."
          className="border rounded-xl px-3 py-1 text-sm"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </header>

      {/* Hero */}
      <section className="px-6 py-16 text-center">
        <h2 className="text-4xl font-semibold mb-3">
          Diseño hedonista para el futuro urbano
        </h2>
        <p className="text-neutral-600 max-w-2xl mx-auto">
          Inspirado en la estética de BIG.dk — combina arquitectura, arte y
          tecnología para mostrar tus proyectos como una experiencia interactiva.
        </p>
        <button className="mt-6 px-4 py-2 bg-black text-white rounded-xl">
          Explorar proyectos <ArrowRight className="inline w-4 h-4 ml-1" />
        </button>
      </section>

      {/* Proyectos */}
      <section className="px-6 grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {filtered.map((p) => (
          <motion.div
            key={p.id}
            whileHover={{ y: -6 }}
            className="rounded-2xl border overflow-hidden cursor-pointer"
            onClick={() => setSelected(p)}
          >
            <img src={p.cover} alt={p.title} className="w-full h-64 object-cover" />
            <div className="p-4">
              <h3 className="font-semibold text-lg">{p.title}</h3>
              <p className="text-sm text-neutral-600">{p.blurb}</p>
              <div className="flex justify-between text-xs text-neutral-500 mt-2">
                <span>{p.year}</span>
                <span className="flex items-center gap-1">
                  <MapPin className="w-3 h-3" /> {p.location}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </section>

      {/* Modal de proyecto */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              className="bg-white rounded-2xl max-w-lg w-full overflow-hidden"
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 20, opacity: 0 }}
              transition={{ type: "spring", stiffness: 250, damping: 20 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <img
                  src={selected.cover}
                  alt={selected.title}
                  className="w-full h-80 object-cover"
                />
                <button
                  className="absolute top-3 right-3 bg-white rounded-full p-1"
                  onClick={() => setSelected(null)}
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold">{selected.title}</h3>
                <p className="text-neutral-600 mt-2">{selected.blurb}</p>
                <div className="flex justify-between text-sm text-neutral-500 mt-3">
                  <span>{selected.year}</span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" /> {selected.location}
                  </span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <footer className="mt-16 py-6 text-center text-neutral-500 border-t border-neutral-200">
        © {new Date().getFullYear()} blu · React + Vite + Tailwind
      </footer>
    </div>
  );
}