import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const classes = [
  { label: 'Acrylic Painting', emoji: '🖼️', color: '#1488C9', bg: '#EEF7FD' },
  { label: 'Clay Modelling', emoji: '🏺', color: '#FF6B6B', bg: '#FFF1F1' },
  { label: 'Cultural Art', emoji: '🎎', color: '#4ECDC4', bg: '#F0FAFA' },
  { label: 'Deco-Art Workshop', emoji: '🌸', color: '#F9C832', bg: '#FFFAEB' },
];

export default function OtherClasses() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section className="py-16 bg-softblue">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-gray-900 mb-3">
            Other <span className="text-primary">Classes</span> We Offer
          </h2>
          <p className="text-gray-500 font-body text-base max-w-lg mx-auto">
            Beyond our core programs, we run special workshops and themed classes throughout the year.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4"
        >
          {classes.map((cls) => (
            <div
              key={cls.label}
              className="flex items-center gap-2.5 px-6 py-3 rounded-full font-semibold text-sm shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-0.5 cursor-default"
              style={{ backgroundColor: cls.bg, color: cls.color, border: `2px solid ${cls.color}30` }}
            >
              <span className="text-lg">{cls.emoji}</span>
              {cls.label}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
