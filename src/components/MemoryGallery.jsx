import { Camera, Heart, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

const memories = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=500&h=600&fit=crop&crop=center",
    title: "Primeiro Encontro",
    description: "O dia que mudou nossas vidas para sempre",
    location: "Café Central"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=500&h=600&fit=crop&crop=center",
    title: "Passeio no Parque",
    description: "Risos e conversas que duraram horas",
    location: "Parque da Cidade"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1502635385003-ee1e6a1a742d?w=500&h=600&fit=crop&crop=center",
    title: "Jantar Romântico",
    description: "Uma noite perfeita sob as estrelas",
    location: "Restaurante Vista"
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=500&h=600&fit=crop&crop=center",
    title: "Viagem dos Sonhos",
    description: "Explorando o mundo juntos",
    location: "Praia Paradisíaca"
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=500&h=600&fit=crop&crop=center",
    title: "Momentos Especiais",
    description: "Cada segundo ao seu lado é precioso",
    location: "Em Casa"
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1518477460014-1b5e0b5b93cd?w=500&h=600&fit=crop&crop=center",
    title: "Nosso Futuro",
    description: "Todos os sonhos que ainda vamos realizar",
    location: "Para Sempre"
  }
];

export default function MemoryGallery() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-rose-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <motion.div 
            className="flex justify-center mb-6"
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Camera className="w-12 h-12 text-rose-500" />
          </motion.div>
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-rose-800 mb-4 font-playfair"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Nossas Memórias
          </motion.h2>
          <motion.p 
            className="text-xl text-rose-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Cada momento contigo é uma página especial na história do nosso amor
          </motion.p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {memories.map((memory, index) => (
            <motion.div
              key={memory.id}
              className="group relative bg-white rounded-2xl shadow-lg overflow-hidden"
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
              }}
              data-aos="zoom-in"
              data-aos-delay={index * 100}
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={memory.image}
                  alt={memory.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Heart Overlay */}
                <motion.div 
                  className="absolute top-4 right-4"
                  initial={{ opacity: 0, scale: 0 }}
                  whileHover={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <Heart className="w-6 h-6 text-white" fill="currentColor" />
                  </motion.div>
                </motion.div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-rose-800 mb-2">
                  {memory.title}
                </h3>
                <p className="text-rose-600 mb-3 leading-relaxed">
                  {memory.description}
                </p>
                <div className="flex items-center text-rose-500">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span className="text-sm font-medium">{memory.location}</span>
                </div>
              </div>

              {/* Decorative Border */}
              <div className="absolute inset-0 border-2 border-rose-200 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Message */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <motion.div 
            className="inline-flex items-center space-x-3 bg-rose-100 px-8 py-4 rounded-full"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <Heart className="w-5 h-5 text-rose-500" fill="currentColor" />
            </motion.div>
            <span className="text-rose-700 font-medium">E muitas mais memórias por vir...</span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
            >
              <Heart className="w-5 h-5 text-rose-500" fill="currentColor" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
