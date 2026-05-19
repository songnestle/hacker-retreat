import React from 'react';
import { motion } from 'framer-motion';
import ColorBends from '../ColorBends';
import ScrambleText from '../visuals/ScrambleText';
import MagneticButton from '../ui/MagneticButton';

const XIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
    <path d="M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9A5.5 5.5 0 0 1 16.5 22h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2Zm0 2A3.5 3.5 0 0 0 4 7.5v9A3.5 3.5 0 0 0 7.5 20h9a3.5 3.5 0 0 0 3.5-3.5v-9A3.5 3.5 0 0 0 16.5 4h-9ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm6.25-2.15a1.15 1.15 0 1 1 0 2.3 1.15 1.15 0 0 1 0-2.3Z" />
  </svg>
);

const TelegramIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
    <path d="M9.91 15.75 9.7 19.1c.43 0 .61-.18.83-.4l1.99-1.9 4.12 3.01c.76.42 1.31.2 1.5-.7l2.72-12.73c.25-1.13-.41-1.58-1.15-1.3L3.88 9.17c-1.11.43-1.1 1.05-.2 1.33l4.05 1.26 9.4-5.93c.44-.27.85-.12.52.16l-7.74 6.99Z" />
  </svg>
);

const NotionIcon = () => (
  <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
    <rect x="4.25" y="3.75" width="15.5" height="16.5" rx="3" fill="none" stroke="currentColor" strokeWidth="1.8" />
    <path
      d="M9 17V7.6c0-.4.33-.73.73-.73h.86c.2 0 .4.08.54.22l3.97 4.05V7.6c0-.4.33-.73.73-.73H17v10c0 .4-.33.73-.73.73h-.75c-.2 0-.4-.08-.54-.22l-4.02-4.1V17c0 .4-.33.73-.73.73H9.9c-.5 0-.9-.4-.9-.9Z"
      fill="currentColor"
    />
  </svg>
);

const HostingIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#ffffff"><path d="m560-240-56-58 142-142H160v-80h486L504-662l56-58 240 240-240 240Z"/></svg>
);

export default function Hero() {
  return (
    <div className="relative min-h-screen flex items-center overflow-hidden bg-black">
      {/* Content */}
      <div className="relative z-10 w-full">
        {/* Title Box with ColorBends Background - full screen */}
        <div className="relative w-full min-h-screen overflow-hidden">
          {/* ColorBends full background - fills viewport */}
          <div className="absolute inset-0 z-0 min-h-full min-w-full">
            <ColorBends
              className="w-full h-full"
              rotation={45}
              autoRotate={0.2}
              speed={0.2}
              colors={['#9945FF', '#14F195', '#000000']}
              transparent={false}
              scale={1}
              frequency={1}
              warpStrength={1}
              mouseInfluence={1}
              parallax={0.5}
              noise={0.1}
            />
          </div>
          {/* Content Layer */}
          <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-12 pt-32 pb-24 h-full flex flex-col justify-center min-h-screen">
            <div className="w-full max-w-4xl md:max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8 w-full"
          >
            <span className="block w-full text-center sm:inline-block sm:w-auto py-2 px-4 border border-[#14F195]/30 rounded-full bg-[#14F195]/10 text-[10px] sm:text-xs font-bold tracking-widest uppercase text-[#14F195]">
              POWERED BY MYCOFI PROTOCOL
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-6"
          >
            <h1 className="font-pixel-fine text-[11vw] xs:text-[12vw] sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight text-white leading-none whitespace-normal sm:whitespace-nowrap wrap-break-word w-full">
              <ScrambleText text="WebPsy Labs" delay={0.5} />
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-sm md:text-base text-gray-400 w-full sm:max-w-[75%] font-normal leading-snug mb-10 text-justify sm:text-left"
          >
            WebPsy Labs is a frontier hacker agency formed by elite builders across <ScrambleText text="AI" delay={1.2} className="text-white" />, <ScrambleText text="Web3" delay={1.4} className="text-white" />, and <ScrambleText text="BioTech" delay={1.6} className="text-white" />, shaping next-generation paradigms for technology, brand, and growth.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col items-start gap-3 sm:flex-row sm:flex-wrap"
          >
            {/* Primary links: mobile = 1 CTA + icon dock, desktop = inline */}
            <MagneticButton
              href="https://luma.com/user/webpsy"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-cta-primary w-full sm:w-auto px-6 py-3 rounded-full font-bold text-sm uppercase tracking-wider border-2 border-[#14F195] bg-[#14F195] text-black hover:bg-[#2affb8] hover:border-[#2affb8] transition-all duration-300 inline-flex items-center justify-center"
            >
              FinTech Event
            </MagneticButton>

            {/* Mobile icon dock (looks cleaner than vertical stack) */}
            <div className="sm:hidden w-full mt-2">
              <div className="flex w-full justify-between items-center rounded-full border border-white/15 bg-black/35 backdrop-blur-md px-4 py-2">
                <MagneticButton
                  href="https://x.com/webpsylabs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center h-10 w-10 rounded-full border border-white/25 bg-white/5 text-white hover:bg-white/12 hover:border-white/45 transition-all duration-300"
                  aria-label="X"
                  title="X"
                >
                  <XIcon />
                  <span className="sr-only">X</span>
                </MagneticButton>
                <MagneticButton
                  href="https://www.instagram.com/uniclub_1968?igsh=MXdqYnh6cWd0ZGZ5cA=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center h-10 w-10 rounded-full border border-white/25 bg-white/5 text-white hover:bg-white/12 hover:border-white/45 transition-all duration-300"
                  aria-label="Instagram"
                  title="Instagram"
                >
                  <InstagramIcon />
                  <span className="sr-only">Instagram</span>
                </MagneticButton>
                <MagneticButton
                  href="https://t.me/+hcJ97ZnmLVZhNDQ1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center h-10 w-10 rounded-full border border-white/25 bg-white/5 text-white hover:bg-white/12 hover:border-white/45 transition-all duration-300"
                  aria-label="Telegram"
                  title="Telegram"
                >
                  <TelegramIcon />
                  <span className="sr-only">Telegram</span>
                </MagneticButton>
                <MagneticButton
                  href="https://webpsy.notion.site/c9bc71b06fe84eff959251a90da955f6?v=74467a5f965248d7b696bd8c2ebb848b&source=copy_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center h-10 w-10 rounded-full border border-white/25 bg-white/5 text-white hover:bg-white/12 hover:border-white/45 transition-all duration-300"
                  aria-label="Notion"
                  title="Notion"
                >
                  <NotionIcon />
                  <span className="sr-only">Notion</span>
                </MagneticButton>
              </div>
            </div>

            {/* Desktop inline icons */}
            <div className="hidden sm:flex items-center gap-2">
              <MagneticButton
                href="https://x.com/webpsylabs"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center h-11 w-11 rounded-full border border-white/30 bg-white/5 text-white hover:bg-white/12 hover:border-white/55 transition-all duration-300"
                aria-label="X"
                title="X"
              >
                <XIcon />
                <span className="sr-only">X</span>
              </MagneticButton>
              <MagneticButton
                href="https://www.instagram.com/uniclub_1968?igsh=MXdqYnh6cWd0ZGZ5cA=="
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center h-11 w-11 rounded-full border border-white/30 bg-white/5 text-white hover:bg-white/12 hover:border-white/55 transition-all duration-300"
                aria-label="Instagram"
                title="Instagram"
              >
                <InstagramIcon />
                <span className="sr-only">Instagram</span>
              </MagneticButton>
              <MagneticButton
                href="https://t.me/+hcJ97ZnmLVZhNDQ1"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center h-11 w-11 rounded-full border border-white/30 bg-white/5 text-white hover:bg-white/12 hover:border-white/55 transition-all duration-300"
                aria-label="Telegram"
                title="Telegram"
              >
                <TelegramIcon />
                <span className="sr-only">Telegram</span>
              </MagneticButton>
              <MagneticButton
                href="https://webpsy.notion.site/c9bc71b06fe84eff959251a90da955f6?v=74467a5f965248d7b696bd8c2ebb848b&source=copy_link"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center h-11 w-11 rounded-full border border-white/30 bg-white/5 text-white hover:bg-white/12 hover:border-white/55 transition-all duration-300"
                aria-label="Notion"
                title="Notion"
              >
                <NotionIcon />
                <span className="sr-only">Notion</span>
              </MagneticButton>
            </div>
          </motion.div>
            </div>
            <div className="mt-6">
              <a
                href="https://ai.webpsy.net/home"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-white hover:bg-white/12 transition-all duration-300 whitespace-nowrap"
              >
                <span>Go to Gateway</span>
                <HostingIcon />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
