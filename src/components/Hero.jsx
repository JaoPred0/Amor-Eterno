import { Heart, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-rose-100 via-pink-50 to-red-100">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-4 h-4 bg-rose-400 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-32 w-2 h-2 bg-pink-500 rounded-full animate-bounce delay-1000"></div>
        <div className="absolute bottom-32 left-16 w-3 h-3 bg-red-400 rounded-full animate-pulse delay-500"></div>
        <div className="absolute bottom-20 right-20 w-5 h-5 bg-rose-300 rounded-full animate-bounce delay-700"></div>
      </div>

      {/* Main Content */}
      <motion.div 
        className="text-center px-6 max-w-4xl"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        {/* Sparkles Animation */}
        <motion.div 
          className="flex justify-center mb-8"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <div className="relative">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="w-12 h-12 text-rose-400" />
            </motion.div>
            <motion.div 
              className="absolute -top-2 -right-2"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <Heart className="w-6 h-6 text-pink-500" />
            </motion.div>
          </div>
        </motion.div>

        {/* Main Title */}
        <motion.h1 
          className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-rose-600 via-pink-600 to-red-600 bg-clip-text text-transparent mb-6 leading-tight font-playfair"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          Para Você
        </motion.h1>
        
        {/* Subtitle */}
        <motion.h2 
          className="text-2xl md:text-4xl text-rose-800 mb-8 font-light tracking-wide font-dancing"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          Minha Pessoa Especial
        </motion.h2>

        {/* Heart Animation */}
        <motion.div 
          className="flex justify-center space-x-4 mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 1.4 + i * 0.1 }}
              whileHover={{ scale: 1.2 }}
            >
              <Heart 
                className="w-6 h-6 text-rose-500"
                fill="currentColor"
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Romantic Message */}
        <motion.p 
          className="text-lg md:text-xl text-rose-700 leading-relaxed max-w-2xl mx-auto mb-12 font-medium"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.6 }}
        >
          "Em cada batida do meu coração, em cada estrela no céu, 
          em cada momento que vivemos juntos, você é a razão do meu sorriso.
          Este site é uma pequena demonstração do amor infinito que sinto por você."
        </motion.p>

        {/* Call to Action */}
        <motion.button 
          className="group bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-600 hover:to-pink-700 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.8 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="flex items-center space-x-2">
            <span>Descobrir Mais</span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <Heart className="w-5 h-5" fill="currentColor" />
            </motion.div>
          </span>
        </motion.button>
      </motion.div>

      {/* Floating Hearts */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute opacity-20"
            initial={{ 
              x: typeof window !== 'undefined' ? Math.random() * window.innerWidth : Math.random() * 1200,
              y: typeof window !== 'undefined' ? Math.random() * window.innerHeight : Math.random() * 800,
              scale: 0
            }}
            animate={{ 
              x: typeof window !== 'undefined' ? Math.random() * window.innerWidth : Math.random() * 1200,
              y: typeof window !== 'undefined' ? Math.random() * window.innerHeight : Math.random() * 800,
              scale: [0, 1, 0],
              rotate: [0, 360, 720]
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "easeInOut"
            }}
          >
            <Heart className="w-4 h-4 text-rose-400" fill="currentColor" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
