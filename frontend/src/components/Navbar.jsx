import React from 'react';

const Navbar = () => {
  return (
      <nav className="bg-[#2A2A2A] py-5 px-5 flex items-center border-b border-[#096caa] min-h-[60px]">
        <div className="mr-auto flex items-center">
          {/* 
            IMPORTANT: Replace this logo placeholder with your actual <img> tag for the Concitor TCG logo.
            For example: <img src="/path/to/your/logo.png" alt="Concitor TCG Logo" className="h-10" /> 
            Ensure the logo image is placed in the public folder or src/assets and imported correctly.
          */}
          <div className="w-[200px] h-[40px] bg-[#FF6B00] text-[#121212] flex items-center justify-center font-bold text-lg rounded">
            Concitor TCG
          </div>
        </div>
        <div>
          {/* Add navigation links here if needed in the future */}
          <a href="home" className="text-white no-underline ml-5 hover:text-[#FF6B00]">Home</a>
          <a href="discovery" className="text-white no-underline ml-5 hover:text-[#FF6B00]">Discovery</a>
        </div>
      </nav>
  );
};

export default Navbar;