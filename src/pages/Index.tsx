
import React from 'react';
import Header from '@/components/Header';
import NewsletterSignup from '@/components/NewsletterSignup';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-primary">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23F9D049' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative z-10">
        <Header />
        
        <main className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            {/* Hero Content */}
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-bible-beige-50 mb-6 leading-tight">
                Join Our Community of 
                <span className="text-gradient"> Faith</span>
              </h2>
              <p className="text-lg md:text-xl text-bible-beige-200 max-w-3xl mx-auto leading-relaxed mb-8">
                Get exclusive access to biblical insights, community updates, sermon notes, 
                and spiritual growth resources delivered directly to your inbox. 
                Be the first to know about special events and new content.
              </p>
              
              {/* Feature highlights */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-2xl mx-auto">
                <div className="text-center">
                  <div className="w-12 h-12 bg-bible-gold-400 rounded-full flex items-center justify-center mx-auto mb-3">
                    <svg className="w-6 h-6 text-bible-brown-950" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                  </div>
                  <h3 className="font-semibold text-bible-beige-50 mb-1">Weekly Insights</h3>
                  <p className="text-sm text-bible-beige-300">Fresh biblical perspectives</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-bible-gold-400 rounded-full flex items-center justify-center mx-auto mb-3">
                    <svg className="w-6 h-6 text-bible-brown-950" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"/>
                    </svg>
                  </div>
                  <h3 className="font-semibold text-bible-beige-50 mb-1">Community Updates</h3>
                  <p className="text-sm text-bible-beige-300">Stay connected with events</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-bible-gold-400 rounded-full flex items-center justify-center mx-auto mb-3">
                    <svg className="w-6 h-6 text-bible-brown-950" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
                    </svg>
                  </div>
                  <h3 className="font-semibold text-bible-beige-50 mb-1">Exclusive Content</h3>
                  <p className="text-sm text-bible-beige-300">Sermon notes & resources</p>
                </div>
              </div>
            </div>

            {/* Newsletter Signup Form */}
            <NewsletterSignup />

            {/* Additional Info */}
            <div className="text-center mt-16 animate-fade-in">
              <div className="bg-gradient-card border border-bible-brown-700 rounded-lg p-8 max-w-2xl mx-auto">
                <h3 className="text-2xl font-semibold text-bible-beige-50 mb-4">
                  Why Subscribe?
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-bible-gold-400 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-bible-beige-200">Get notified about new sermon series and special events</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-bible-gold-400 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-bible-beige-200">Receive encouraging devotionals and prayer updates</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-bible-gold-400 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-bible-beige-200">Access exclusive Bible study materials and resources</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-bible-gold-400 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-bible-beige-200">Stay connected with our growing faith community</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default Index;
