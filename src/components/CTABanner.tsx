import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { MessageCircle } from 'lucide-react';

const WA_LINK = 'https://wa.me/60124161357?text=Hi,%20I%20would%20like%20to%20know%20more%20about%20the%20classes%20and%20schedule';

export default function CTABanner() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section className="py-20 bg-primary relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute -top-12 -left-12 w-48 h-48 rounded-full bg-white opacity-5" />
        <div className="absolute top-8 right-10 w-32 h-32 rounded-full bg-accent opacity-10" />
        <div className="absolute -bottom-10 left-1/3 w-56 h-56 rounded-full bg-white opacity-5" />
        <div className="absolute bottom-5 right-5 w-24 h-24 rounded-full bg-accent opacity-8" />
        <div className="absolute top-1/2 left-8 w-16 h-16 rounded-full bg-white opacity-5" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="text-5xl mb-5">🎨</div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white mb-3 leading-tight">
            Ready to enrol your child?
          </h2>
          <p className="text-white/80 font-body text-base sm:text-lg mb-8 max-w-md mx-auto">
            Chat with us on WhatsApp and we'll help you find the right class for your child's age and interest.
          </p>

          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-400 text-white font-bold text-lg px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 hover:-translate-y-0.5"
          >
            <MessageCircle size={22} />
            Chat on WhatsApp
          </a>

          <p className="text-white/50 text-xs mt-5 font-body">
            We'll reply to help you choose the best program
          </p>
        </motion.div>
      </div>
    </section>
  );
}
