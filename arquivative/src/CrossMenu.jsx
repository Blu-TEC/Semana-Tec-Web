import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ModalPortal from "./ModalPortal";
import { PROJECTS } from "./data/projects"; // 👈 importación del JSON

export default function CrossMenu() {
  const [selected, setSelected] = useState(null);

  return (
    <div className="w-full bg-white text-neutral-900 relative z-10">
      <div className="max-w-6xl mx-auto py-32 space-y-32">
        {PROJECTS.map((p) => (
          <motion.div
            key={p.id}
            className="flex flex-col items-center text-center space-y-6 cursor-pointer"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            onClick={() => setSelected(p)}
          >
            <motion.img
              src={p.image}
              alt={p.title}
              className="w-[500px] h-auto object-cover rounded-md shadow-sm hover:brightness-105 transition duration-500 mx-auto"
            />
            <div className="space-y-2">
              <h2 className="text-3xl font-light tracking-tight hover:text-neutral-600 transition duration-300">
                {p.title}
              </h2>
              <p className="text-sm text-neutral-500 tracking-widest uppercase">
                {p.location}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal tipo galería */}
      <AnimatePresence>
        {selected && (
          <ModalPortal>
            <motion.div
              key="modal"
              className="fixed inset-0 bg-black/95 flex flex-col z-[9999] overflow-hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelected(null)}
            >
              <div
                className="flex justify-between items-center px-10 py-6 border-b border-white/10 sticky top-0 bg-black/90 backdrop-blur-md"
                onClick={(e) => e.stopPropagation()}
              >
                <h2 className="text-2xl font-light tracking-wide">{selected.title}</h2>
                <button
                  onClick={() => setSelected(null)}
                  className="text-white/60 hover:text-white transition text-2xl"
                >
                  ✕
                </button>
              </div>

              <motion.div
                className="flex gap-8 overflow-x-auto px-10 py-10"
                onClick={(e) => e.stopPropagation()}
              >
                {selected.gallery?.map((img, idx) => (
                  <motion.img
                    key={idx}
                    src={img}
                    alt={`${selected.title} ${idx + 1}`}
                    className="w-[800px] h-auto object-cover rounded-lg border border-white/10 shrink-0 hover:scale-105 transition-transform duration-300"
                  />
                ))}
              </motion.div>
            </motion.div>
          </ModalPortal>
        )}
      </AnimatePresence>
    </div>
  );
}
