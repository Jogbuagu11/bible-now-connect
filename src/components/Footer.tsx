
import React from 'react';
import { Facebook, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-footer border-t border-bible-brown-700 mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* BibleNOW */}
          <div>
            <h4 className="text-lg font-semibold text-bible-beige-50 mb-4">BibleNOW</h4>
            <p className="text-bible-beige-300 text-sm">
              A new way for believers to connect and edify through scripture.
            </p>
          </div>

          {/* BibleNOW Apps */}
          <div>
            <h4 className="text-lg font-semibold text-bible-beige-50 mb-4">BibleNOW Apps</h4>
            <ul className="space-y-2">
              <li><span className="text-bible-beige-300 text-sm">Read</span></li>
              <li><span className="text-bible-beige-300 text-sm">Social</span></li>
              <li><span className="text-bible-beige-300 text-sm">Live</span></li>
              <li><span className="text-bible-beige-300 text-sm">Learn</span></li>
              <li><span className="text-bible-beige-300 text-sm">Play</span></li>
            </ul>
          </div>

          {/* About */}
          <div>
            <h4 className="text-lg font-semibold text-bible-beige-50 mb-4">About</h4>
            <ul className="space-y-2">
              <li><a href="https://about.biblenow.io" className="text-bible-beige-300 hover:text-bible-gold-400 transition-colors text-sm">About Us</a></li>
              <li><a href="https://contact.biblenow.io" className="text-bible-beige-300 hover:text-bible-gold-400 transition-colors text-sm">Contact</a></li>
              <li><a href="https://contribute.biblenow.io" className="text-bible-beige-300 hover:text-bible-gold-400 transition-colors text-sm">Support</a></li>
              <li><a href="https://faq.biblenow.io" className="text-bible-beige-300 hover:text-bible-gold-400 transition-colors text-sm">F.A.Q's</a></li>
              <li><a href="https://help.biblenow.io" className="text-bible-beige-300 hover:text-bible-gold-400 transition-colors text-sm">Help Center</a></li>
            </ul>
          </div>

          {/* Download Our App */}
          <div>
            <h4 className="text-lg font-semibold text-bible-beige-50 mb-4">Download Our App</h4>
            <p className="text-bible-beige-300 text-sm mb-4">
              Experience BibleNOW on your mobile device. Download our app today!
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com/biblenow.io" className="text-bible-beige-300 hover:text-bible-gold-400 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://instagram.com/biblenow.io" className="text-bible-beige-300 hover:text-bible-gold-400 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://x.com/biblenowio" className="text-bible-beige-300 hover:text-bible-gold-400 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/>
                </svg>
              </a>
              <a href="https://youtube.com/@Biblenow-io" className="text-bible-beige-300 hover:text-bible-gold-400 transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-bible-brown-700 mt-8 pt-8 text-center">
          <p className="text-bible-beige-300 text-sm">
            © 2025 BibleNOW. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
