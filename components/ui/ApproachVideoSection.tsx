"use client";

import { motion } from "framer-motion";

const ApproachVideoSection = () => {
  return (
    <section className="relative w-full min-h-[60vh] overflow-hidden bg-black-100 rounded-2xl md:rounded-3xl">
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
            src="https://www.pexels.com/download/video/29458457/"
            type="video/mp4"
          />
          Tu navegador no soporta videos.
        </video>

        {/* Overlay elegante que combina con tu diseño */}
        <div className="absolute inset-0 bg-gradient-to-b from-black-100/70 via-black-100/30 to-black-100/70" />
      </div>

      {/* Grid de fondo sutil */}
      <div className="absolute inset-0 w-full h-full">
        <div className="w-full h-full bg-grid-white/[0.02] bg-[size:50px_50px]" />
      </div>

      {/* Contenido principal */}
      <div className="relative z-10 flex items-center justify-center h-full min-h-[60vh] px-6">
        <div className="max-w-5xl w-full">
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
        </div>
      </div>
    </section>
  );
};

export default ApproachVideoSection;
