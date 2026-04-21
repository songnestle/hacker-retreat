import React from 'react';
import { Link } from 'react-router-dom';

type FooterItem = {
  name: string;
  /** External URL, or internal path+hash for same-site scroll */
  url: string;
  /** When set, render as <Link> to home + hash (SPA-friendly scroll targets) */
  homeHash?: string;
};

const footerLinks: { title: string; items: FooterItem[] }[] = [
  {
    title: 'WebPsy Labs',
    items: [
      { name: 'About', url: '/', homeHash: 'about' },
      { name: 'Careers', url: '/', homeHash: 'community' },
      { name: 'Brand Assets', url: '/', homeHash: 'projects' },
      { name: 'Terms of Service', url: '/', homeHash: 'terms' },
      { name: 'Privacy Policy', url: '/', homeHash: 'privacy' }
    ]
  },
  {
    title: 'Connect',
    items: [
      { name: 'Instagram', url: 'https://www.instagram.com/uniclub_1968?igsh=MXdqYnh6cWd0ZGZ5cA==' },
      { name: 'X (Twitter)', url: 'https://x.com/webpsylabs' },
      { name: 'Ton / Telegram', url: 'https://t.me/+hcJ97ZnmLVZhNDQ1' },
      { name: 'Luma', url: 'https://luma.com/user/webpsy' }
    ]
  },
  {
    title: 'Resources',
    items: [
      { name: 'Concept Deck', url: 'https://docs.google.com/presentation/d/18hqGIXaT9Nyma8GhTiMR7kpm7l0HqL5uxIbRzEARCe0/edit?usp=sharing' },
      { name: 'Partner Assets', url: '/', homeHash: 'projects' }
    ]
  }
];

export default function Footer() {
  return (
    <footer className="bg-black pt-20 pb-10 px-6 border-t border-white/10">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-1">
             <div className="flex items-center gap-2 mb-6">
                <img src="/logo.png" alt="WebPsy Labs" className="w-8 h-8 object-contain opacity-80" />
                <span className="text-xl font-bold tracking-tighter text-white font-['Inter']">WebPsy Labs</span>
             </div>
             <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
               WebPsy Labs is a frontier hacker agency formed by elite builders across AI, Web3, and biotechnology.
             </p>
          </div>

          {/* Links Columns */}
          {footerLinks.map((column, idx) => (
            <div key={idx} className="lg:col-span-1">
              <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-6">
                {column.title}
              </h4>
              <ul className="space-y-4">
                {column.items.map((item, itemIdx) => (
                  <li key={itemIdx}>
                    {item.homeHash ? (
                      <Link
                        to={{ pathname: '/', hash: item.homeHash }}
                        className="text-gray-500 hover:text-white transition-colors text-sm font-medium"
                      >
                        {item.name}
                      </Link>
                    ) : (
                      <a
                        href={item.url}
                        className="text-gray-500 hover:text-white transition-colors text-sm font-medium"
                        target={item.url.startsWith('http') ? '_blank' : '_self'}
                        rel={item.url.startsWith('http') ? 'noopener noreferrer' : ''}
                      >
                        {item.name}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mb-12 border-t border-white/10 pt-10">
          <div id="terms" className="scroll-mt-28 mb-8">
            <h5 className="mb-2 text-sm font-semibold text-white">Terms of Service</h5>
            <p className="max-w-2xl text-xs leading-relaxed text-gray-600">
              For the latest terms governing use of this site, contact WebPsy Labs via the Connect links above.
            </p>
          </div>
          <div id="privacy" className="scroll-mt-28">
            <h5 className="mb-2 text-sm font-semibold text-white">Privacy Policy</h5>
            <p className="max-w-2xl text-xs leading-relaxed text-gray-600">
              We process personal data in line with applicable regulations. Details are available on request through the same channels.
            </p>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-xs">
            © 2024-2026 WebPsy Labs. All Rights Reserved.
          </p>
          <div className="flex items-center gap-6">
             <span className="text-gray-600 text-xs uppercase tracking-wider">Managed by CygneNoir</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
