
import React from 'react';

const Footer = () => {
  return (
    <footer className="border-t border-bible-brown-700 mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <img 
                src="/lovable-uploads/aa8528dc-a259-4469-966c-8475c57d06b5.png" 
                alt="BibleNOW Logo" 
                className="w-8 h-8 mr-3"
              />
              <h3 className="text-xl font-semibold text-bible-gold-400">BibleNOW</h3>
            </div>
            <p className="text-bible-beige-300 mb-4 max-w-md">
              Connecting communities through faith, knowledge, and spiritual growth. 
              Experience the Word of God in a fresh, contemporary way.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-bible-beige-400 hover:text-bible-gold-400 transition-colors">
                <span className="sr-only">Facebook</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="#" className="text-bible-beige-400 hover:text-bible-gold-400 transition-colors">
                <span className="sr-only">Twitter</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
              <a href="#" className="text-bible-beige-400 hover:text-bible-gold-400 transition-colors">
                <span className="sr-only">YouTube</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-bible-beige-50 mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="https://biblenow.io" className="text-bible-beige-400 hover:text-bible-gold-400 transition-colors">Home</a></li>
              <li><a href="https://biblenow.io/about" className="text-bible-beige-400 hover:text-bible-gold-400 transition-colors">About</a></li>
              <li><a href="https://biblenow.io/sermons" className="text-bible-beige-400 hover:text-bible-gold-400 transition-colors">Sermons</a></li>
              <li><a href="https://biblenow.io/events" className="text-bible-beige-400 hover:text-bible-gold-400 transition-colors">Events</a></li>
              <li><a href="https://biblenow.io/contact" className="text-bible-beige-400 hover:text-bible-gold-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-semibold text-bible-beige-50 mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><a href="https://biblenow.io/bible-study" className="text-bible-beige-400 hover:text-bible-gold-400 transition-colors">Bible Study</a></li>
              <li><a href="https://biblenow.io/devotionals" className="text-bible-beige-400 hover:text-bible-gold-400 transition-colors">Devotionals</a></li>
              <li><a href="https://biblenow.io/prayer" className="text-bible-beige-400 hover:text-bible-gold-400 transition-colors">Prayer Requests</a></li>
              <li><a href="https://biblenow.io/give" className="text-bible-beige-400 hover:text-bible-gold-400 transition-colors">Give</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-bible-brown-700 mt-8 pt-8 text-center">
          <p className="text-bible-beige-400 text-sm">
            © {new Date().getFullYear()} BibleNOW. All rights reserved.
          </p>
          <div className="mt-2 space-x-6 text-sm">
            <a href="https://biblenow.io/privacy" className="text-bible-beige-400 hover:text-bible-gold-400 transition-colors">
              Privacy Policy
            </a>
            <a href="https://biblenow.io/terms" className="text-bible-beige-400 hover:text-bible-gold-400 transition-colors">
              Terms of Service
            </a>
            <a href="mailto:newsletter@biblenow.io" className="text-bible-beige-400 hover:text-bible-gold-400 transition-colors">
              Newsletter Support
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
