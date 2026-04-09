import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, Users, Lightbulb } from 'lucide-react';

const cards = [
  {
    icon: GraduationCap,
    color: '#1488C9',
    bg: '#EEF7FD',
    title: 'Experienced Teachers',
    desc: 'Our instructors are trained art educators passionate about nurturing young creative minds in a supportive environment.',
  },
  {
    icon: Users,
    color: '#F9C832',
    bg: '#FFFAEB',
    title: 'Ages 3–13+',
    desc: 'We offer age-appropriate programs from toddler introduction classes all the way to advanced teen-level illustration.',
  },
  {
    icon: Lightbulb,
    color: '#FF6B6B',
    bg: '#FFF1F1',
    title: 'Fun & Structured Learning',
    desc: 'Every class blends creativity with technique, keeping kids engaged while building real artistic skills.',
  },
];

export default function WhyGlobalArt() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="why" className="py-20 bg-softblue">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-gray-900 mb-3">
            Why Choose <span className="text-primary">Global Art?</span>
          </h2>
          <p className="text-gray-500 font-body text-base sm:text-lg max-w-xl mx-auto">
            A place where every child's creativity is valued, nurtured, and celebrated.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.1 + i * 0.12 }}
              className="bg-white rounded-3xl p-7 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col items-center text-center"
            >
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center mb-5 shadow-sm"
                style={{ backgroundColor: card.bg }}
              >
                <card.icon size={30} style={{ color: card.color }} />
              </div>
              <h3 className="font-display font-bold text-xl text-gray-900 mb-2">{card.title}</h3>
              <p className="text-gray-500 font-body text-sm leading-relaxed">{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
