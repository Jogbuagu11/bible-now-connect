
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
          <div className="max-w-6xl mx-auto">
            {/* Newsletter Signup Form - Made wider and more prominent */}
            <div className="mb-16">
              <NewsletterSignup />
            </div>

            {/* Additional Info */}
            <div className="text-center animate-fade-in">
              <div className="bg-gradient-card border border-bible-brown-700 rounded-lg p-8 max-w-4xl mx-auto">
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
