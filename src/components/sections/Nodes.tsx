import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

// Icons
const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.163 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
);

const XIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const YouTubeIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);

const GitHubIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
);

const XiaohongshuIcon = () => (
  <div className="bg-[#FF2442] text-white text-[9px] px-2 py-0.5 rounded-full font-bold leading-none flex items-center justify-center -mr-1">
    小红书
  </div>
);

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.238 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);

const GlobeIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-4.115 15.545c.127-1.482.205-3.007.205-3.545 0-.539-.078-2.063-.205-3.545 1.995.31 4.023.31 6.017-.001-.126 1.481-.205 3.006-.205 3.545s.078 2.064.205 3.545c-1.995-.31-4.023-.311-6.017.001zm7.974 2.455c-1.122.188-2.545.288-3.859.288s-2.737-.1-3.859-.288c.871-1.303 1.942-2.316 3.12-3.356 1.178 1.04 2.248 2.053 3.12 3.356zm-1.859-6c0-.539.079-2.064.205-3.545 1.995.31 4.023.31 6.017-.001-.126 1.481-.205 3.006-.205 3.545s.078 2.064.205 3.545c-1.995-.31-4.023-.311-6.017.001-.126-1.481-.205-3.006-.205-3.545zm2.859-6c.871 1.303 1.942 2.316 3.12 3.356-1.178-1.04-2.248-2.053-3.12-3.356 1.122-.188 2.545-.288 3.859-.288s2.737.1 3.859.288zM4.847 8c1.178-1.04 2.248-2.053 3.12-3.356-1.122.188-2.545.288-3.859.288s-2.737-.1-3.859-.288c.871 1.303 1.942 2.316 3.12 3.356zm0 8c-1.178 1.04-2.248 2.053-3.12 3.356 1.122-.188 2.545-.288 3.859-.288s2.737.1 3.859.288c-.871-1.303-1.942-2.316-3.12-3.356zm12.153 0c1.178 1.04 2.248 2.053 3.12 3.356-1.122-.188-2.545-.288-3.859-.288s-2.737.1-3.859.288c.871-1.303 1.942-2.316 3.12-3.356zm0-8c-1.178-1.04-2.248-2.053-3.12-3.356 1.122.188 2.545.288 3.859.288s2.737-.1-3.859-.288c.871 1.303 1.942 2.316 3.12 3.356z" />
  </svg>
);

type SocialLink = {
  name: string;
  url: string;
  icon: React.ReactNode;
};

type NetworkMember = {
  id: string;
  name: string;
  title: React.ReactNode;
  avatar?: string;
  profileUrl: string;
  socials?: SocialLink[];
  x: number;
  y: number;
  positionClass: string;
  nodeSizeClass: string;
  isJoinSlot?: boolean;
};

type Connection = {
  from: string;
  to: string;
  opacity: number;
};

function getMemberById(id: string, members: NetworkMember[]) {
  return members.find((member) => member.id === id);
}

function buildCurvePath(from: NetworkMember, to: NetworkMember) {
  const dx = to.x - from.x;
  const dy = to.y - from.y;
  const distance = Math.sqrt(dx * dx + dy * dy) || 1;
  const offset = Math.min(14, distance * 0.16);
  const nx = -dy / distance;
  const ny = dx / distance;
  const cx = (from.x + to.x) / 2 + nx * offset;
  const cy = (from.y + to.y) / 2 + ny * offset;

  return `M ${from.x} ${from.y} Q ${cx} ${cy} ${to.x} ${to.y}`;
}

const teamMembers: NetworkMember[] = [
  {
    id: 'luo',
    name: 'Luo',
    title: (
      <>
        Founder<br />
        PKU Visual Research Center and UCCA Curator
      </>
    ),
    avatar: '/Luo Founder PKU Visual Research Center and UCCA Curator.jpg',
    profileUrl: 'https://x.com/cypherwander',
    socials: [
      { name: 'X', url: 'https://x.com/cypherwander', icon: <XIcon /> },
      { name: 'Instagram', url: 'https://www.instagram.com/cypherhippie/', icon: <InstagramIcon /> }
    ],
    x: 48,
    y: 42,
    // Mobile first, then scale up on larger screens
    positionClass: 'left-[52%] top-[34%] sm:left-[48%] sm:top-[42%]',
    nodeSizeClass: 'w-[120px] sm:w-[152px] md:w-[168px]'
  },
  {
    id: 'jason-jiao',
    name: 'Jason Jiao',
    title: (
      <>
        Builder @ Ethereum | AAStar.io | CMUBA | Aura AI<br />
        Launching Mycelium Protocol | Mushroom.box | DAO
      </>
    ),
    avatar: '/JasonJiao.png',
    profileUrl: 'https://x.com/jhfnetboy',
    socials: [
      { name: 'X', url: 'https://x.com/jhfnetboy', icon: <XIcon /> },
      { name: 'GitHub', url: 'https://github.com/jhfnetboy', icon: <GitHubIcon /> }
    ],
    x: 24,
    y: 24,
    positionClass: 'left-[22%] top-[18%] sm:left-[24%] sm:top-[24%]',
    nodeSizeClass: 'w-[108px] sm:w-[132px] md:w-[144px]'
  },
  {
    id: 'cygne-noir',
    name: 'Cygne Noir',
    title: 'Full Stack & AI Dev',
    avatar: '/CygneNoir.png',
    profileUrl: 'https://zielonanoir.github.io',
    socials: [
      { name: 'Website', url: 'https://zielonanoir.github.io', icon: <GlobeIcon /> }
    ],
    x: 76,
    y: 18,
    positionClass: 'left-[80%] top-[24%] sm:left-[76%] sm:top-[18%]',
    nodeSizeClass: 'w-[104px] sm:w-[120px] md:w-[128px]'
  },
  {
    id: 'unai',
    name: 'Unai',
    title: 'New Sector Research, AI, Fintech & Tokenization',
    avatar: '/Unai.jpeg',
    profileUrl: 'https://x.com/unaiyang',
    socials: [
      { name: 'X', url: 'https://x.com/unaiyang', icon: <XIcon /> },
      { name: 'Instagram', url: 'https://www.instagram.com/unai27x?igsh=MTF5dmFna2pjcjlraw==', icon: <InstagramIcon /> }
    ],
    x: 14,
    y: 50,
    positionClass: 'left-[16%] top-[46%] sm:left-[14%] sm:top-[50%]',
    nodeSizeClass: 'w-[104px] sm:w-[118px] md:w-[126px]'
  },
  {
    id: 'leon',
    name: 'Leon',
    title: (
      <>
        Founder of <a href="https://multifire.org" target="_blank" rel="noopener noreferrer" className="hover:text-white underline decoration-white/30 transition-colors">MultiFIRE Club</a><br />
        @人生游乐场 got 1.5w+ likes & cols on Xiaohongshu
      </>
    ),
    avatar: '/Leon.jpeg',
    profileUrl: 'https://multifire.org',
    socials: [
      { name: 'YouTube', url: 'https://www.youtube.com/@multifireclub', icon: <YouTubeIcon /> },
      { name: 'Xiaohongshu', url: 'https://xhslink.com/m/4KzoU2H7DMr', icon: <XiaohongshuIcon /> }
    ],
    x: 58,
    y: 24,
    positionClass: 'left-[52%] top-[14%] sm:left-[58%] sm:top-[24%]',
    nodeSizeClass: 'w-[114px] sm:w-[140px] md:w-[156px]'
  },
  {
    id: 'join-us',
    name: 'Join Us',
    title: 'Future builder slot for the next collaborator.',
    profileUrl: 'https://t.me/+hcJ97ZnmLVZhNDQ1',
    x: 86,
    y: 42,
    positionClass: 'left-[80%] top-[50%] sm:left-[86%] sm:top-[42%]',
    nodeSizeClass: 'w-[116px] sm:w-[132px] md:w-[144px]',
    isJoinSlot: true
  },
  {
    id: 'sakya-lee',
    name: 'Sakya Lee',
    title: (
      <>
        Electronic Music Producer & Healing Practitioner<br />
        @李教授电音疗愈 got 9051 likes & cols on Xiaohongshu
      </>
    ),
    avatar: '/SakyaLee.jpeg',
    profileUrl: 'https://xhslink.com/m/9wQgCb5l2uD',
    socials: [
      { name: 'Xiaohongshu', url: 'https://xhslink.com/m/9wQgCb5l2uD', icon: <XiaohongshuIcon /> }
    ],
    x: 20,
    y: 76,
    positionClass: 'left-[18%] top-[74%] sm:left-[20%] sm:top-[76%]',
    nodeSizeClass: 'w-[104px] sm:w-[118px] md:w-[126px]'
  },
  {
    id: 'chloe',
    name: 'Chloe',
    title: 'Brand Lead',
    avatar: '/Chloe Brand Lead.jpg',
    profileUrl: 'https://www.instagram.com/chloenostylist',
    socials: [
      { name: 'Instagram', url: 'https://www.instagram.com/chloenostylist', icon: <InstagramIcon /> },
      { name: 'LinkedIn', url: 'https://www.linkedin.com/in/chloenostylist/', icon: <LinkedInIcon /> }
    ],
    x: 38,
    y: 64,
    positionClass: 'left-[44%] top-[60%] sm:left-[38%] sm:top-[64%]',
    nodeSizeClass: 'w-[104px] sm:w-[118px] md:w-[126px]'
  },
  {
    id: 'kuanfu-weimu',
    name: 'Kuanfu Weimu',
    title: (
      <>
        Art Advisor<br />
        @管付为模KUANFUWEIMU got 4043 likes & cols on Xiaohongshu
      </>
    ),
    avatar: '/Kuanfu Weimu. Art Advisor Instagram  X @kuanfuweimu.jpg',
    profileUrl: 'https://instagram.com/kuanfuweimu',
    socials: [
      { name: 'Instagram', url: 'https://instagram.com/kuanfuweimu', icon: <InstagramIcon /> },
      { name: 'Xiaohongshu', url: 'https://xhslink.com/m/9rKX3JEffWA', icon: <XiaohongshuIcon /> }
    ],
    x: 70,
    y: 72,
    positionClass: 'left-[72%] top-[70%] sm:left-[70%] sm:top-[72%]',
    nodeSizeClass: 'w-[106px] sm:w-[120px] md:w-[128px]'
  },
  {
    id: 'wang-hsiaohi',
    name: 'Wang Hsiaohi',
    title: 'Core Member',
    avatar: '/Wang Hsiaohi.png',
    profileUrl: 'https://sogo.la/',
    socials: [
      { name: 'Website', url: 'https://sogo.la/', icon: <GlobeIcon /> },
      { name: 'GitHub', url: 'https://github.com/yeahwong', icon: <GitHubIcon /> }
    ],
    x: 84,
    y: 60,
    positionClass: 'left-[84%] top-[78%] sm:left-[84%] sm:top-[60%]',
    nodeSizeClass: 'w-[104px] sm:w-[118px] md:w-[126px]'
  },
  {
    id: 'oddie',
    name: 'Oddie',
    title: 'Design Director',
    avatar: '/Oddie.jpeg',
    profileUrl: 'https://webpsy.net',
    x: 58,
    y: 86,
    positionClass: 'left-[54%] top-[88%] sm:left-[58%] sm:top-[86%]',
    nodeSizeClass: 'w-[100px] sm:w-[114px] md:w-[122px]'
  }
];

const networkConnections: Connection[] = [
  { from: 'luo', to: 'jason-jiao', opacity: 0.92 },
  { from: 'luo', to: 'unai', opacity: 0.72 },
  { from: 'luo', to: 'cygne-noir', opacity: 0.66 },
  { from: 'luo', to: 'leon', opacity: 0.96 },
  { from: 'luo', to: 'join-us', opacity: 0.84 },
  { from: 'jason-jiao', to: 'cygne-noir', opacity: 0.82 },
  { from: 'jason-jiao', to: 'leon', opacity: 0.74 },
  { from: 'jason-jiao', to: 'unai', opacity: 0.52 },
  { from: 'unai', to: 'sakya-lee', opacity: 0.68 },
  { from: 'leon', to: 'chloe', opacity: 0.7 },
  { from: 'leon', to: 'kuanfu-weimu', opacity: 0.68 },
  { from: 'chloe', to: 'wang-hsiaohi', opacity: 0.64 },
  { from: 'kuanfu-weimu', to: 'wang-hsiaohi', opacity: 0.7 },
  { from: 'wang-hsiaohi', to: 'oddie', opacity: 0.66 },
  { from: 'join-us', to: 'chloe', opacity: 0.36 },
  { from: 'join-us', to: 'kuanfu-weimu', opacity: 0.44 },
  { from: 'join-us', to: 'oddie', opacity: 0.34 }
];

export default function Nodes() {
  const [activeMemberId, setActiveMemberId] = useState(teamMembers[0].id);
  const activeMember = getMemberById(activeMemberId, teamMembers) ?? teamMembers[0];

  return (
    <section className="py-24 bg-black px-6 border-t border-white/5 overflow-hidden" id="nodes">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 md:mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-medium text-white tracking-tight mb-4">
            Nodes
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl">
            Core team members building the future together. Hover a node to inspect the builder profile and click to open it.
          </p>
        </motion.div>

        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_360px] items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative h-[1120px] sm:h-[920px] md:h-[860px] rounded-4xl border border-white/10 bg-black/60 overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_38%,rgba(20,241,149,0.12),transparent_33%),radial-gradient(circle_at_78%_22%,rgba(153,69,255,0.14),transparent_30%),linear-gradient(180deg,rgba(255,255,255,0.02),transparent_32%)]" />
              <div className="absolute inset-0 opacity-25 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-size-[64px_64px]" />
              <div className="absolute inset-0 bg-black/15" />

              <svg
                className="absolute inset-0 h-full w-full pointer-events-none"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
              >
                <defs>
                  <linearGradient id="network-line" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="rgba(20,241,149,0.12)" />
                    <stop offset="50%" stopColor="rgba(20,241,149,0.5)" />
                    <stop offset="100%" stopColor="rgba(153,69,255,0.2)" />
                  </linearGradient>
                </defs>

                {networkConnections.map((connection, index) => {
                  const from = getMemberById(connection.from, teamMembers);
                  const to = getMemberById(connection.to, teamMembers);
                  if (!from || !to) return null;

                  return (
                    <motion.path
                      key={`${connection.from}-${connection.to}`}
                      d={buildCurvePath(from, to)}
                      fill="none"
                      stroke="url(#network-line)"
                      strokeWidth="0.6"
                      strokeLinecap="round"
                      strokeDasharray="4 10"
                      initial={{ opacity: 0, strokeDashoffset: 0 }}
                      animate={{ opacity: connection.opacity, strokeDashoffset: -50 }}
                      transition={{
                        opacity: { duration: 1, delay: index * 0.05 },
                        strokeDashoffset: { duration: 12 + index * 0.4, repeat: Infinity, ease: 'linear' }
                      }}
                    />
                  );
                })}
              </svg>

              {teamMembers.map((member, index) => {
                const isActive = activeMemberId === member.id;
                const isCenterNode = member.id === 'luo';
                const isJoinNode = member.id === 'join-us';

                return (
                  <motion.a
                    key={member.id}
                    href={member.profileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onMouseEnter={() => setActiveMemberId(member.id)}
                    onFocus={() => setActiveMemberId(member.id)}
                    initial={{ opacity: 0, scale: 0.92 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05, duration: 0.45 }}
                    whileHover={{ scale: isCenterNode ? 1.02 : 1.08, y: isCenterNode ? -2 : -4 }}
                    className={`group absolute ${member.positionClass} ${isCenterNode ? 'z-30' : isJoinNode ? 'z-30' : 'z-20'} flex -translate-x-1/2 -translate-y-1/2 flex-col items-center text-center outline-none`}
                  >
                    <div className={`relative ${member.nodeSizeClass} rounded-full ${isCenterNode ? 'border border-[#14F195]/30 bg-black/85 shadow-[0_0_0_1px_rgba(20,241,149,0.2),0_0_40px_rgba(20,241,149,0.18)]' : isJoinNode ? 'border-2 border-dashed border-[#14F195] bg-[#14F195]/12 shadow-[0_0_0_1px_rgba(20,241,149,0.25),0_0_36px_rgba(20,241,149,0.18)]' : 'border border-white/10 bg-black/75'} transition-all duration-300 group-hover:border-white/30`}>
                      <div className={`absolute inset-0 rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100 ${isJoinNode ? 'bg-[#14F195]/15' : 'bg-white/5'}`} />
                      {isCenterNode && (
                        <div className="absolute inset-[-10px] rounded-full border border-[#14F195]/25 bg-[#14F195]/5 blur-[0.5px]" />
                      )}
                      {isJoinNode ? (
                        <div className="relative flex h-full w-full items-center justify-center">
                          <span className="text-5xl md:text-6xl font-light text-[#14F195] leading-none">+</span>
                        </div>
                      ) : (
                        <img
                          src={member.avatar}
                          alt={member.name}
                          className="relative z-10 h-full w-full rounded-full object-cover"
                        />
                      )}
                    </div>

                    <div className="mt-3 space-y-0.5">
                      <h4 className={`text-sm md:text-base font-semibold tracking-tight transition-colors ${isActive || isCenterNode ? 'text-white' : 'text-gray-200 group-hover:text-white'}`}>
                        {member.name}
                      </h4>
                      <p className={`text-[10px] uppercase tracking-[0.24em] transition-colors ${isJoinNode ? 'text-[#14F195]' : isCenterNode ? 'text-[#14F195]/80' : 'text-gray-500 group-hover:text-gray-300'}`}>
                        {isJoinNode ? 'Join Slot' : isCenterNode ? 'Network Core' : 'Member Node'}
                      </p>
                    </div>
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          <motion.aside
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:sticky lg:top-8"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeMember.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 16 }}
                transition={{ duration: 0.3 }}
                className="rounded-4xl border border-white/10 bg-[#050505]/85 p-6 md:p-8 backdrop-blur-xl"
              >
                <div className="flex items-start gap-4">
                  <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-full border border-white/15 bg-white/5">
                    {activeMember.isJoinSlot ? (
                      <div className="flex h-full w-full items-center justify-center text-4xl text-[#14F195]">+</div>
                    ) : (
                      <img
                        src={activeMember.avatar}
                        alt={activeMember.name}
                        className="h-full w-full object-cover"
                      />
                    )}
                  </div>

                  <div className="min-w-0">
                    <p className="text-[10px] uppercase tracking-[0.32em] text-gray-500">
                      {activeMember.isJoinSlot ? 'Future Builder Slot' : 'Hovered Node'}
                    </p>
                    <h3 className="mt-2 text-2xl font-semibold tracking-tight text-white">
                      {activeMember.name}
                    </h3>
                  </div>
                </div>

                <div className="mt-5 text-sm leading-relaxed text-gray-400">
                  {activeMember.title}
                </div>

                {activeMember.socials && activeMember.socials.length > 0 && (
                  <div className="mt-6 flex flex-wrap gap-3">
                    {activeMember.socials.map((social) => (
                      <a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs font-semibold uppercase tracking-wider text-gray-300 transition-colors hover:border-white/25 hover:bg-white/10 hover:text-white"
                      >
                        {social.icon}
                        {social.name}
                      </a>
                    ))}
                  </div>
                )}

                <a
                  href={activeMember.profileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex w-full items-center justify-center rounded-full border border-[#14F195]/40 bg-[#14F195]/10 px-4 py-3 text-sm font-semibold uppercase tracking-wider text-[#14F195] transition-colors hover:bg-[#14F195]/20"
                >
                  {activeMember.isJoinSlot ? 'Join Telegram' : 'Open Profile'}
                </a>

                <p className="mt-4 text-xs uppercase tracking-[0.24em] text-gray-500">
                  {activeMember.isJoinSlot
                    ? 'Reserved for the next builder in the network.'
                    : 'Hover another node to inspect the collaboration graph.'}
                </p>
              </motion.div>
            </AnimatePresence>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}
