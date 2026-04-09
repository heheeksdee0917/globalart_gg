import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const WA_LINK = 'https://wa.me/60124161357?text=Hi,%20I%20would%20like%20to%20know%20more%20about%20the%20classes%20and%20schedule';

const faqs = [
  {
    q: 'What age groups do you accept?',
    a: 'We welcome children ages 3 and above, all the way up to 13+. Our programs are tailored to each age group so every child gets the most out of their art education.',
  },
  {
    q: 'What programs are available?',
    a: 'We offer six structured programs: Junior (3+), Foundation (5+), Pre-Basic (6+), Basic (7+), Intermediate (10+), and Advanced (13+). Each program builds on the previous level.',
  },
  {
    q: 'What other classes do you offer?',
    a: 'Beyond our core programs, we also run Acrylic Painting, Clay Modelling, Cultural Art, and Deco-Art Workshops throughout the year.',
  },
  {
    q: 'Where are you located?',
    a: 'We are located at E-1-02, Gardens Square, Bandar Gamuda Gardens, 48050 Rawang, Selangor. Conveniently situated within the Gamuda Gardens township.',
  },
  {
    q: 'How do I register?',
    a: (
      <>
        Simply{' '}
        <a
          href={WA_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary font-semibold underline underline-offset-2 hover:text-primary-dark"
        >
          WhatsApp us at 0124161357
        </a>{' '}
        and we'll guide you through the enrollment process step by step.
      </>
    ),
  },
  {
    q: 'What are your operating hours?',
    a: (
      <>
        Please{' '}
        <a
          href={WA_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary font-semibold underline underline-offset-2 hover:text-primary-dark"
        >
          WhatsApp us
        </a>{' '}
        for our latest class schedule and operating hours, as they may vary by term and season.
      </>
    ),
  },
];

function FAQItem({ q, a, index }: { q: string; a: React.ReactNode; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: index * 0.07 }}
      className="border border-gray-200 rounded-2xl overflow-hidden bg-white hover:border-primary/30 transition-colors"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-6 py-4 text-left gap-4 group"
        aria-expanded={open}
      >
        <span className="font-semibold text-gray-800 font-body text-sm sm:text-base group-hover:text-primary transition-colors">
          {q}
        </span>
        <span
          className="shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300"
          style={{ backgroundColor: open ? '#1488C9' : '#EEF7FD' }}
        >
          <ChevronDown
            size={16}
            className="transition-transform duration-300"
            style={{ color: open ? '#fff' : '#1488C9', transform: open ? 'rotate(180deg)' : 'rotate(0deg)' }}
          />
        </span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="body"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-5 text-gray-600 font-body text-sm sm:text-base leading-relaxed border-t border-gray-100 pt-3">
              {a}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-gray-900 mb-3">
            Frequently Asked <span className="text-primary">Questions</span>
          </h2>
          <p className="text-gray-500 font-body text-base max-w-lg mx-auto">
            Have questions? We've answered the most common ones below.
          </p>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <FAQItem key={faq.q} q={faq.q} a={faq.a} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
