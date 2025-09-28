import { Heart, Star, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

export default function LoveLetter() {
  return (
    <section className="py-20 bg-gradient-to-br from-rose-900 via-rose-800 to-pink-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-2 h-2 bg-white rounded-full opacity-30 animate-twinkle"></div>
        <div className="absolute top-32 right-20 w-1 h-1 bg-rose-300 rounded-full opacity-40 animate-twinkle delay-1000"></div>
        <div className="absolute bottom-20 left-32 w-3 h-3 bg-pink-200 rounded-full opacity-20 animate-twinkle delay-500"></div>
        <div className="absolute bottom-40 right-16 w-2 h-2 bg-white rounded-full opacity-30 animate-twinkle delay-700"></div>
      </div>

      <div className="max-w-4xl mx-auto px-6 relative">
        {/* Header */}
        <div className="text-center mb-12" data-aos="fade-down">
          <motion.div 
            className="flex justify-center mb-6"
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Sparkles className="w-12 h-12 text-rose-300" />
              </motion.div>
              <motion.div 
                className="absolute -top-1 -right-1"
                animate={{ rotate: 360 }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              >
                <Star className="w-4 h-4 text-yellow-300" />
              </motion.div>
            </div>
          </motion.div>
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-white mb-4 font-playfair"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Uma Carta Para Você
          </motion.h2>
          <motion.div 
            className="w-24 h-1 bg-gradient-to-r from-rose-400 to-pink-400 mx-auto rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          ></motion.div>
        </div>

        {/* Letter Content */}
        <motion.div 
          className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl border border-rose-200"
          initial={{ opacity: 0, scale: 0.9, y: 50 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          data-aos="zoom-in"
          data-aos-delay="300"
        >
          <motion.div 
            className="text-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Heart className="w-8 h-8 text-rose-500 mx-auto mb-4" fill="currentColor" />
            </motion.div>
            <div className="text-rose-700 font-light text-lg">Minha Querida,</div>
          </motion.div>

          <div className="space-y-6 text-rose-800 leading-relaxed">
            <motion.p 
              className="text-lg md:text-xl font-light"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Existe uma música que diz que "o amor é um lugar", e eu descobri que esse lugar é exatamente onde você está. 
              Seus olhos são o céu mais bonito que já contemplei, e seu sorriso é a luz que ilumina até os meus dias mais sombrios.
            </motion.p>

            <motion.p 
              className="text-lg md:text-xl font-light"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
            >
              Cada manhã que acordo, a primeira coisa que vem à minha mente é você. Cada noite, antes de dormir, 
              meu último pensamento é sobre como sou grato por ter você em minha vida. Você não é apenas minha namorada, 
              você é minha melhor amiga, minha confidente, minha inspiração.
            </motion.p>

            <motion.p 
              className="text-lg md:text-xl font-light"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              viewport={{ once: true }}
            >
              Crierei mil sites, escreverei mil cartas, cruzarei mil oceanos se isso significar ver aquele sorriso 
              especial que você faz quando está verdadeiramente feliz. Porque sua felicidade é a minha felicidade, 
              e seu amor é o presente mais precioso que já recebi.
            </motion.p>

            <motion.p 
              className="text-lg md:text-xl font-light"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              viewport={{ once: true }}
            >
              Este site é apenas uma pequena demonstração do que você significa para mim. Espero que, ao navegar por ele, 
              você sinta um pouquinho do amor imenso que tenho por você. Você merece tudo de mais belo que este mundo pode oferecer, 
              e prometo passar minha vida inteira tentando te dar exatamente isso.
            </motion.p>
          </div>

          <div className="text-center mt-8">
            <div className="flex justify-center space-x-2 mb-6">
              {[...Array(7)].map((_, i) => (
                <Heart 
                  key={i}
                  className="w-4 h-4 text-rose-400 animate-pulse"
                  style={{ animationDelay: `${i * 0.2}s` }}
                  fill="currentColor"
                />
              ))}
            </div>
            <div className="text-rose-700 font-medium text-xl">
              Com todo meu amor,
            </div>
            <div className="text-rose-600 font-light text-lg mt-2 italic">
              Seu Admirador Secreto 💕
            </div>
          </div>
        </motion.div>

        {/* Floating Hearts */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-float-slow opacity-20"
              style={{
                left: `${10 + (i * 15)}%`,
                top: `${20 + Math.random() * 60}%`,
                animationDelay: `${i * 1.5}s`,
                animationDuration: `${6 + Math.random() * 4}s`
              }}
            >
              <Heart className="w-6 h-6 text-rose-300" fill="currentColor" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
