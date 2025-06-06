'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { WithTranslation } from '@/app/i18n/withLocalization';

interface HeroProps extends WithTranslation {
  customClass?: string;
}

export default function HeroBase({ t, customClass = '' }: HeroProps) {
  const params = useParams();
  const locale = params?.locale as string || 'en';
  
  return (
    <section className={`relative h-screen flex items-center justify-center overflow-hidden ${customClass}`}>
      <div className="absolute inset-0 bg-black z-0 overflow-hidden">
        <motion.div 
          className="w-full h-full relative"
          animate={{ 
            scale: [1, 1.05, 1.08, 1.05, 1],
          }}
          transition={{ 
            duration: 20,
            ease: "easeInOut", 
            repeat: Infinity,
            repeatType: "mirror"
          }}
        >
          <Image 
            src="/assets/mcafee1bn.png" 
            alt="John McAfee"
            fill
            quality={100}
            style={{ 
              objectFit: 'cover',
              objectPosition: 'center 35%',
              opacity: 0.7
            }}
            priority
          />
        </motion.div>
        
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/90 z-1"></div>
      </div>
      
      <div className="z-10 text-center px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-white mb-4 sm:mb-6">
            <span className="text-white">
              {t('title')}
            </span>
          </h1>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <p className="text-base sm:text-xl md:text-2xl text-gray-200 mb-8 sm:mb-12 px-4 max-w-3xl mx-auto">
            {t('subtitle')}
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col md:flex-row gap-4 justify-center"
        >
      <div className="relative group w-full sm:w-auto max-w-xs mx-auto">
        <motion.a
          href="https://t.me/ghostxtech"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-transparent border border-white text-white px-6 sm:px-8 py-3 rounded-full font-medium 
                    hover:bg-white hover:text-black transition-all duration-300 flex items-center justify-center mx-auto w-full sm:w-auto"
        >
          {t('cta.talkToJohn')}
        </motion.a>
      </div>
        </motion.div>
      </div>
    </section>
  );
} 