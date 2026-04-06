import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import MagneticButton from '../ui/MagneticButton';

const LUMA_URL = 'https://luma.com/user/webpsy';

const CLI_SNIPPET = `agentpunk --root \\
  --name "AGENTPUNK2077｜HK" \\
  --time "2026.04.19 // GMT+8" \\
  --location "AWS Hong Kong" \\
  --link "https://luma.com/user/webpsy" \\
  --stack "AI × Web3 × Agents" \\
  --load "builders; devs; researchers; city-nodes" \\
  --boot "self_inspect(); filter_signal(); activate_network();" \\
  --anchor "freedom = knowing_the_function" \\`;

const glassPanel =
  'rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl shadow-[0_0_0_1px_rgba(255,255,255,0.04)_inset]';

const btnOutline =
  'inline-flex items-center justify-center px-6 py-3 rounded-full font-bold text-sm uppercase tracking-wider border border-white/25 bg-white/5 text-white hover:bg-white/10 hover:border-white/40 transition-all duration-300';

export default function AgentPunkSummit() {
  return (
    <section
      id="agentpunk-summit"
      className="relative scroll-mt-24 border-t border-white/5 bg-black py-24 text-white"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(153,69,255,0.15),transparent_55%),radial-gradient(ellipse_60%_40%_at_100%_50%,rgba(20,241,149,0.08),transparent_50%)]" />

      <div className="relative z-10 mx-auto max-w-[1440px] px-6 md:px-12">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-14">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={`overflow-hidden ${glassPanel}`}
          >
            <img
              src="/AGENTPUNKSUMMIT.png"
              alt="AGENTPUNK SUMMIT Hong Kong — April 19 2026 at AWS Hong Kong"
              className="h-full w-full object-cover object-center"
              loading="lazy"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="flex flex-col gap-8"
          >
            <div>
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[#14F195]/90">
                AGENTPUNK SUMMIT · HONG KONG
              </p>
              <h2 className="mb-4 bg-linear-to-b from-white via-white to-white/60 bg-clip-text text-4xl font-semibold tracking-tight text-transparent md:text-5xl">
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

            <div className={`p-6 ${glassPanel}`}>
              <pre className="overflow-x-auto text-left text-xs leading-relaxed text-white/85 md:text-sm font-mono whitespace-pre">
                {CLI_SNIPPET}
              </pre>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <MagneticButton
                href={LUMA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full px-6 py-3 sm:w-auto rounded-full border-2 border-[#14F195] bg-[#14F195] text-sm font-bold uppercase tracking-wider text-black transition-all duration-300 hover:border-[#2affb8] hover:bg-[#2affb8] inline-flex items-center justify-center"
              >
                Event Link
              </MagneticButton>
              <Link to="/contact?topic=demo" className={`w-full sm:w-auto ${btnOutline}`}>
                Update Demo
              </Link>
              <Link to="/contact?topic=partner" className={`w-full sm:w-auto ${btnOutline}`}>
                Join Partner
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
