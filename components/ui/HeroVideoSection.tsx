"use client";

import { motion } from "framer-motion";

const HeroVideoSection = () => {
  return (
    <section className="relative w-full min-h-[70vh] overflow-hidden bg-black-100">
      {/* Video de fondo */}
      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source
            src="https://www.pexels.com/download/video/6963744/"
            type="video/mp4"
          />
          Tu navegador no soporta videos.
        </video>

        {/* Overlay elegante que combina con tu diseño */}
        <div className="absolute inset-0 bg-gradient-to-b from-black-100/80 via-black-100/40 to-black-100/80" />
      </div>

      {/* Grid de fondo sutil */}
      <div className="absolute inset-0 w-full h-full">
        <div className="w-full h-full bg-grid-white/[0.02] bg-[size:50px_50px]" />
      </div>

      {/* Contenido principal */}
      <div className="relative z-10 flex items-center justify-center h-full min-h-[70vh] px-6">
        <div className="max-w-6xl w-full">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.3 }}
            className="text-center"
          >
            {/* Título principal */}
            <motion.h2
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.0, delay: 0.6 }}
              className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white"
            >
              Building the
              <span className="text-purple block mt-2">Future of Web</span>
            </motion.h2>
          </motion.div>
        </div>
      </div>

      {/* Elementos decorativos sutiles */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2.0, delay: 1.5 }}
        className="absolute top-1/4 left-1/6 w-1 h-1 bg-purple-400 rounded-full blur-sm"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2.0, delay: 1.8 }}
        className="absolute top-1/3 right-1/6 w-1.5 h-1.5 bg-blue-400 rounded-full blur-sm"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2.0, delay: 2.1 }}
        className="absolute bottom-1/4 left-1/2 w-1 h-1 bg-cyan-400 rounded-full blur-sm"
      />

      {/* Indicador de scroll */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.0, delay: 2.0 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-white/60 rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroVideoSection;
