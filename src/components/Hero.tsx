import { motion } from 'framer-motion';
import { MessageCircle, ChevronDown } from 'lucide-react';

const WA_LINK = 'https://wa.me/60124161357?text=Hi,%20I%20would%20like%20to%20know%20more%20about%20the%20classes%20and%20schedule';

const Splat = ({
  color,
  style,
  size = 120,
}: {
  color: string;
  style?: React.CSSProperties;
  size?: number;
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 120 120"
    className="absolute pointer-events-none select-none"
    style={style}
    aria-hidden="true"
  >
    <ellipse cx="60" cy="60" rx="55" ry="42" fill={color} opacity="0.22" transform="rotate(30 60 60)" />
    <ellipse cx="70" cy="50" rx="38" ry="25" fill={color} opacity="0.18" transform="rotate(-20 70 50)" />
    <circle cx="45" cy="72" r="22" fill={color} opacity="0.16" />
    <circle cx="80" cy="38" r="14" fill={color} opacity="0.20" />
    <circle cx="30" cy="45" r="10" fill={color} opacity="0.15" />
  </svg>
);

const Star = ({ style, color }: { style?: React.CSSProperties; color: string }) => (
  <svg
    width="28"
    height="28"
    viewBox="0 0 28 28"
    className="absolute pointer-events-none"
    style={style}
    aria-hidden="true"
  >
    <polygon
      points="14,2 17,11 26,11 19,17 22,26 14,20 6,26 9,17 2,11 11,11"
      fill={color}
      opacity="0.5"
    />
  </svg>
);

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white pt-16">
      <div className="absolute inset-0 overflow-hidden">
        <Splat color="#1488C9" style={{ top: '-5%', left: '-8%' }} size={280} />
        <Splat color="#F9C832" style={{ top: '10%', right: '-5%' }} size={220} />
        <Splat color="#FF6B6B" style={{ bottom: '5%', left: '5%' }} size={180} />
        <Splat color="#4ECDC4" style={{ bottom: '-8%', right: '10%' }} size={240} />
        <Splat color="#FFB347" style={{ top: '45%', left: '35%' }} size={160} />

        <Star style={{ top: '20%', left: '15%' }} color="#F9C832" />
        <Star style={{ top: '35%', right: '20%' }} color="#1488C9" />
        <Star style={{ bottom: '30%', left: '40%' }} color="#FF6B6B" />
        <Star style={{ bottom: '20%', right: '35%' }} color="#4ECDC4" />

        <div className="absolute top-[28%] right-[12%] text-5xl opacity-30 select-none">🎨</div>
        <div className="absolute top-[60%] left-[8%] text-4xl opacity-30 select-none">✏️</div>
        <div className="absolute bottom-[25%] right-[8%] text-4xl opacity-30 select-none">🖌️</div>
        <div className="absolute top-[15%] left-[35%] text-3xl opacity-25 select-none">🌟</div>
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <span className="inline-block bg-accent text-gray-800 font-bold text-sm px-4 py-1.5 rounded-full mb-5 shadow-sm">
            Art Classes for Kids in Rawang
          </span>

          <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-gray-900 leading-tight mb-5">
            Art Centre Classes{' '}
            <span className="text-primary">Available</span>{' '}
            in Rawang
          </h1>

          <p className="text-gray-600 text-lg sm:text-xl font-body leading-relaxed mb-8 max-w-xl mx-auto">
            Nurturing creativity in every child, from age 3 and above
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold px-7 py-3.5 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 text-base w-full sm:w-auto justify-center"
            >
              <MessageCircle size={20} />
              WhatsApp Us
            </a>
            <a
              href="#programs"
              className="flex items-center gap-2 border-2 border-primary text-primary hover:bg-primary hover:text-white font-bold px-7 py-3.5 rounded-full transition-all duration-200 text-base w-full sm:w-auto justify-center"
            >
              View Programs
              <ChevronDown size={18} />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="mt-16 flex justify-center"
        >
          <a
            href="#why"
            className="text-gray-400 hover:text-primary transition-colors flex flex-col items-center gap-1 text-xs font-semibold"
            aria-label="Scroll down"
          >
            <span>Discover More</span>
            <ChevronDown size={20} className="animate-bounce" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
