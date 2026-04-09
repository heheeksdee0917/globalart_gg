import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const programs = [
  {
    name: 'Junior',
    age: '3+',
    emoji: '🌱',
    color: '#4ECDC4',
    bg: '#F0FAFA',
    border: '#4ECDC4',
    desc: 'Introduction to learning through games, puzzles, art & activities.',
  },
  {
    name: 'Foundation',
    age: '5+',
    emoji: '🎨',
    color: '#FFB347',
    bg: '#FFFAF3',
    border: '#FFB347',
    desc: 'Drawing, colouring & collaging technique.',
  },
  {
    name: 'Pre-Basic',
    age: '6+',
    emoji: '✏️',
    color: '#FF6B6B',
    bg: '#FFF5F5',
    border: '#FF6B6B',
    desc: 'Basic & fun drawing with simple techniques.',
  },
  {
    name: 'Basic',
    age: '7+',
    emoji: '🍎',
    color: '#1488C9',
    bg: '#EEF7FD',
    border: '#1488C9',
    desc: 'Fruits & Animals thematic ideation, composition, observational drawing & colouring techniques.',
  },
  {
    name: 'Intermediate',
    age: '10+',
    emoji: '🖌️',
    color: '#9B59B6',
    bg: '#F9F0FF',
    border: '#9B59B6',
    desc: 'People & Activities thematic ideation, composition, observational drawing & colouring techniques.',
  },
  {
    name: 'Advanced',
    age: '13+',
    emoji: '🌟',
    color: '#F9C832',
    bg: '#FFFAEB',
    border: '#F9C832',
    desc: 'Ideation, composition, observational drawing, colouring & illustration techniques.',
  },
];

export default function Programs() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section id="programs" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-gray-900 mb-3">
            Our Core <span className="text-primary">Programs</span>
          </h2>
          <p className="text-gray-500 font-body text-base sm:text-lg max-w-xl mx-auto">
            Structured programs designed to grow with your child at every stage of their artistic journey.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {programs.map((prog, i) => (
            <motion.div
              key={prog.name}
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.08 + i * 0.09 }}
              className="rounded-3xl p-6 border-2 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group cursor-default"
              style={{ backgroundColor: prog.bg, borderColor: `${prog.border}40` }}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="text-3xl">{prog.emoji}</div>
                <span
                  className="inline-flex items-center justify-center w-12 h-12 rounded-2xl text-white font-display font-bold text-sm shadow-sm"
                  style={{ backgroundColor: prog.color }}
                >
                  {prog.age}
                </span>
              </div>
              <h3
                className="font-display font-bold text-xl mb-2"
                style={{ color: prog.color }}
              >
                {prog.name}
              </h3>
              <p className="text-gray-600 font-body text-sm leading-relaxed">{prog.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
