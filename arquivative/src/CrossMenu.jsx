import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const PROJECTS = [
  {
    id: 1,
    title: "Civic Canopy Pavilion",
    image: "https://images.unsplash.com/photo-1529429612776-0a0f1a9b1b52?q=80&w=800",
    gallery: [
      "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?q=80&w=1200",
      "https://images.unsplash.com/photo-1558021211-7df8d00a3d5c?q=80&w=1200",
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1200",
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=1200",
      "https://images.unsplash.com/photo-1491553895911-0055eca6402d?q=80&w=1200",
    ],
  },
  {
    id: 2,
    title: "Riverfront Hub",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=800",
    gallery: [
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=1200",
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200",
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1200",
      "https://images.unsplash.com/photo-1473187983305-f615310e7daa?q=80&w=1200",
    ],
  },
];

export default function CrossMenu() {
  const [selected, setSelected] = useState(null);

  return (
    <div className="relative flex flex-col items-center justify-start py-20 space-y-10">
      {PROJECTS.map((p) => (
        <motion.div
          key={p.id}
          className="relative cursor-pointer"
          whileHover={{ scale: 1.02 }}
          onClick={() => setSelected(p)}
        >
          <img
            src={p.image}
            alt={p.title}
            className="w-[600px] object-cover rounded-2xl shadow-lg"
          />
          <h2 className="absolute bottom-4 left-6 text-lg font-semibold bg-black/50 px-3 py-1 rounded-md">
            {p.title}
          </h2>
        </motion.div>
      ))}

      {/* Galería horizontal al abrir una línea */}
      <AnimatePresence>
        {selected && (
          <motion.div
            key={selected.id}
            className="fixed inset-0 bg-black/95 flex flex-col z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            {/* Header del proyecto */}
            <div className="flex justify-between items-center px-8 py-6 border-b border-white/10">
              <h2 className="text-2xl font-semibold">{selected.title}</h2>
              <button
                onClick={() => setSelected(null)}
                className="text-white/60 hover:text-white transition"
              >
                ✕
              </button>
            </div>

            {/* Galería scrolleable horizontal */}
            <motion.div
              className="flex gap-6 overflow-x-auto px-8 py-10 no-scrollbar"
              initial={{ x: 200 }}
              animate={{ x: 0 }}
              exit={{ x: 200 }}
              onClick={(e) => e.stopPropagation()}
            >
              {selected.gallery.map((img, idx) => (
                <motion.img
                  key={idx}
                  src={img}
                  className="w-[700px] h-[500px] object-cover rounded-xl border border-white/10 shrink-0"
                  whileHover={{ scale: 1.05 }}
                />
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
