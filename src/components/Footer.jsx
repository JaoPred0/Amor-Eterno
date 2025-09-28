import { Heart, Star, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-r from-rose-800 via-rose-900 to-pink-900 text-white py-16">
      <div className="max-w-6xl mx-auto px-6">
        {/* Main Content */}
        <div className="text-center">
          {/* Icon */}
          <motion.div 
            className="flex justify-center mb-8"
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            data-aos="zoom-in"
          >
            <div className="relative">
              <motion.div 
                className="bg-white/10 backdrop-blur-sm rounded-full p-6"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Heart className="w-12 h-12 text-rose-300" fill="currentColor" />
                </motion.div>
              </motion.div>
              <motion.div
                className="absolute -top-2 -right-2"
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              >
                <Sparkles className="w-6 h-6 text-yellow-300" />
              </motion.div>
              <motion.div
                className="absolute -bottom-1 -left-1"
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <Star className="w-4 h-4 text-rose-200" />
              </motion.div>
            </div>
          </motion.div>

          {/* Main Message */}
          <h3 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-rose-200 to-pink-200 bg-clip-text text-transparent font-playfair">
            Nosso Amor É Infinito
          </h3>

          <p className="text-lg md:text-xl text-rose-200 mb-8 max-w-2xl mx-auto leading-relaxed">
            "Em um mundo cheio de códigos e pixels, você é a única linguagem que meu coração compreende perfeitamente."
          </p>

          {/* Decorative Hearts */}
          <div className="flex justify-center space-x-4 mb-8">
            {[...Array(5)].map((_, i) => (
              <Heart 
                key={i}
                className="w-5 h-5 text-rose-300 animate-pulse"
                style={{ animationDelay: `${i * 0.3}s` }}
                fill="currentColor"
              />
            ))}
          </div>

          {/* Quote */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 mb-8 border border-white/10">
            <blockquote className="text-xl md:text-2xl font-light text-rose-100 italic leading-relaxed">
              "O amor verdadeiro não tem fim, apenas recomeços. 
              E com você, cada dia é um novo começo cheio de possibilidades infinitas."
            </blockquote>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-white/20 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-rose-200">
                Feito com 💕 especialmente para você
              </div>
              <div className="text-rose-300 text-sm">
                © {currentYear} • Amor Eterno • Para Sempre
              </div>
            </div>
          </div>
        </div>

        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-10 left-1/4 w-2 h-2 bg-white rounded-full animate-twinkle"></div>
          <div className="absolute top-20 right-1/3 w-1 h-1 bg-rose-200 rounded-full animate-twinkle delay-1000"></div>
          <div className="absolute bottom-16 left-1/3 w-3 h-3 bg-pink-200 rounded-full animate-twinkle delay-500"></div>
          <div className="absolute bottom-8 right-1/4 w-2 h-2 bg-white rounded-full animate-twinkle delay-700"></div>
        </div>
      </div>
    </footer>
  );
}
