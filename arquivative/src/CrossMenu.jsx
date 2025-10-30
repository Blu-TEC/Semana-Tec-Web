import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ModalPortal from "./ModalPortal";

// 🏗️ Imágenes de los proyectos
import CicloA1 from "./assets/Ciclo A/Ciclo A 1.png";
import CicloA2 from "./assets/Ciclo A/Ciclo A 2.png";
import CicloA3 from "./assets/Ciclo A/Ciclo A 3.png";
import CicloA4 from "./assets/Ciclo A/Ciclo A 4.png";
import CicloA5 from "./assets/Ciclo A/Ciclo A 5.png";
import CicloA6 from "./assets/Ciclo A/Ciclo A 6.png";
import CicloA7 from "./assets/Ciclo A/Ciclo A 7.png";
import CicloA8 from "./assets/Ciclo A/Ciclo A 8.png";
import Primsaterra1 from "./assets/Prismaterra/Prismaterra 1.png";
import Primsaterra2 from "./assets/Prismaterra/Prismaterra 2.png";
import Primsaterra3 from "./assets/Prismaterra/Prismaterra 3.png";
import Primsaterra4 from "./assets/Prismaterra/Prismaterra 4.png";
import Primsaterra5 from "./assets/Prismaterra/Prismaterra 5.png";
import Primsaterra6 from "./assets/Prismaterra/Prismaterra 6.png";
import Primsaterra7 from "./assets/Prismaterra/Prismaterra 7.png";
import Primsaterra8 from "./assets/Prismaterra/Prismaterra 8.png";
import ModuloVerde1 from "./assets/Modulo Verde/Modulo Verde 1.png";
import ModuloVerde2 from "./assets/Modulo Verde/Modulo Verde 2.png";
import ModuloVerde3 from "./assets/Modulo Verde/Modulo Verde 3.png";
import ModuloVerde4 from "./assets/Modulo Verde/Modulo Verde 4.png";
import ModuloVerde5 from "./assets/Modulo Verde/Modulo Verde 5.png";
import ModuloVerde6 from "./assets/Modulo Verde/Modulo Verde 6.png";
import ModuloVerde7 from "./assets/Modulo Verde/Modulo Verde 7.png";

const PROJECTS = [
  {
    id: 1,
    title: "Ciclo A",
    location: "GUADALAJARA, MÉXICO",
    image: CicloA1,
    gallery: [CicloA1, CicloA2, CicloA3, CicloA4, CicloA5, CicloA6, CicloA7, CicloA8],
  },
  {
    id: 2,
    title: "Prismaterra",
    location: "GUADALAJARA, MÉXICO",
    image: Primsaterra1,
    gallery: [Primsaterra1, Primsaterra2, Primsaterra3, Primsaterra4, Primsaterra5, Primsaterra6, Primsaterra7, Primsaterra8],
  },
  {
    id: 3,
    title: "Módulo Verde",
    location: "GUADALAJARA, MÉXICO",
    image: ModuloVerde1,
    gallery: [ModuloVerde1, ModuloVerde2, ModuloVerde3, ModuloVerde4, ModuloVerde5, ModuloVerde6, ModuloVerde7],
  },
];

export default function CrossMenu() {
  const [selected, setSelected] = useState(null);

  console.log("Proyecto seleccionado:", selected?.title || "ninguno");

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
                className="flex gap-8 overflow-x-auto px-10 py-10 no-scrollbar"
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
