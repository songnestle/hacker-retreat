import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import MagneticButton from '../ui/MagneticButton';

const LUMA_URL = 'https://luma.com/275o2p22';
const PARTNER_FORM_URL =
  'https://docs.qq.com/form/page/DR1BmR3hmcXZMcUxS';

const CLI_SNIPPET = `agentpunk --root \\
  --name "AGENTPUNK2077｜HK" \\
  --time "2026.04.19 // GMT+8" \\
  --location "AWS Hong Kong" \\
  --link "https://luma.com/275o2p22" \\
  --stack "AI × Web3 × Agents" \\
  --load "builders; devs; researchers; city-nodes" \\
  --boot "self_inspect(); filter_signal(); activate_network();" \\
  --anchor "freedom = knowing_the_function" \\`;

const glassPanel =
  'rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl shadow-[0_0_0_1px_rgba(255,255,255,0.04)_inset]';

const btnOutline =
  'flex min-w-0 w-full shrink-0 items-center justify-center px-4 py-3.5 sm:px-6 sm:py-3 rounded-full text-center text-xs font-bold uppercase tracking-wide sm:tracking-wider sm:text-sm border border-white/25 bg-white/5 text-white hover:bg-white/10 hover:border-white/40 transition-all duration-300 whitespace-normal leading-snug sm:w-auto sm:whitespace-nowrap';

export default function AgentPunkSummit() {
  return (
    <section
      id="agentpunk-summit"
      className="relative w-full min-w-0 scroll-mt-24 border-t border-white/5 bg-black py-16 text-white sm:py-24"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(153,69,255,0.15),transparent_55%),radial-gradient(ellipse_60%_40%_at_100%_50%,rgba(20,241,149,0.08),transparent_50%)]" />

      <div className="relative z-10 mx-auto w-full min-w-0 max-w-[1440px] px-4 sm:px-6 md:px-12">
        <div className="grid w-full min-w-0 grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center lg:gap-14">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={`min-w-0 w-full max-w-full overflow-hidden ${glassPanel}`}
          >
            <img
              src="/AGENTPUNKSUMMIT.png"
              alt="AGENTPUNK SUMMIT Hong Kong — April 19 2026 at AWS Hong Kong"
              className="h-auto w-full max-w-full object-cover object-center"
              loading="lazy"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="flex min-w-0 w-full max-w-full flex-col gap-6 sm:gap-8"
          >
            <div className="min-w-0">
              <p className="mb-3 wrap-break-word text-[10px] font-bold uppercase tracking-[0.12em] text-[#14F195]/90 xs:text-xs sm:tracking-[0.2em]">
                AGENTPUNK SUMMIT · HONG KONG
              </p>
              <h2 className="mb-4 wrap-break-word bg-linear-to-b from-white via-white to-white/60 bg-clip-text text-3xl font-semibold tracking-tight text-transparent sm:text-4xl md:text-5xl">
                AGENTPUNK SUMMIT｜HONG KONG
              </h2>
              <p className="text-lg text-white/80 md:text-xl">
                2026.04.19 · Hong Kong · AWS
              </p>
            </div>

            <p className="text-lg font-medium text-white/90">
              From Signal to Network Activation
            </p>

            <div className="space-y-4 text-gray-400 leading-relaxed">
              <p>
                AgentPunk Summit is an AI-native summit and global Haicker network.
              </p>
              <div>
                <p className="mb-1 font-semibold text-white">Open Call</p>
                <p className="text-white/70">
                  Sponsors · Speakers · Hackathon Co-hosts · City Partners
                </p>
              </div>
              <div>
                <p className="mb-1 font-semibold text-white">Endless Haickthon</p>
                <p className="text-white/70">by WebPsy Labs</p>
                <a
                  href="https://webpsy.net"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 inline-block text-[#14F195] underline-offset-4 hover:underline"
                >
                  webpsy.net
                </a>
              </div>
            </div>

            <div className={`min-w-0 w-full max-w-full p-4 sm:p-6 ${glassPanel}`}>
              <pre className="min-w-0 w-full max-w-full text-left font-mono text-[0.625rem] leading-relaxed whitespace-pre-wrap wrap-anywhere text-white/85 sm:text-xs md:text-sm md:whitespace-pre md:overflow-x-auto md:wrap-normal">
                {CLI_SNIPPET}
              </pre>
            </div>

            <div className="flex w-full min-w-0 flex-col gap-3 sm:flex-row sm:flex-wrap">
              <MagneticButton
                href={LUMA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="box-border min-w-0 w-full shrink-0 px-4 py-3.5 text-center text-xs font-bold uppercase tracking-wide text-black sm:w-auto sm:px-6 sm:py-3 sm:text-sm sm:tracking-wider inline-flex items-center justify-center rounded-full border-2 border-[#14F195] bg-[#14F195] transition-all duration-300 hover:border-[#2affb8] hover:bg-[#2affb8] whitespace-normal leading-snug sm:whitespace-nowrap"
              >
                Event Link
              </MagneticButton>
              <Link to="/contact?topic=demo" className={`sm:w-auto ${btnOutline}`}>
                Update Demo
              </Link>
              <a
                href={PARTNER_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`sm:w-auto ${btnOutline}`}
              >
                Join Partner
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
