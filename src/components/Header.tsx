
import React from 'react';

const Header = () => {
  return (
    <header className="relative py-8 md:py-12">
      <div className="container mx-auto px-4 text-center">
        <div className="mb-8 animate-fade-in">
          <img 
            src="/lovable-uploads/aa8528dc-a259-4469-966c-8475c57d06b5.png" 
            alt="BibleNOW Logo" 
            className="w-24 h-24 md:w-32 md:h-32 mx-auto mb-6 rounded-lg shadow-lg"
          />
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gradient mb-4">
            BibleNOW
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-bible-gold-400 to-bible-gold-500 mx-auto mb-6"></div>
          <p className="text-xl md:text-2xl text-bible-beige-200 max-w-2xl mx-auto leading-relaxed">
            Stay connected with BibleNOW updates and insights
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;
