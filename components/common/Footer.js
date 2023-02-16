const Footer = ({ className = "" }) => {
  const elements = ["Product", "Features", "Pricing", "Resources", "Careers", "Help", "Privacy"];

  return (
    <footer className={`${className} mt-20`}>
      <div className="h-24 bg-rectangle"></div>
      <div className="bg-gray-2 pt-10 pb-6">
        <h2 className="text-dark font-bold text-center text-xl">Typiano</h2>
        <div className="centering flex-wrap gap-8 py-4 border-b-2">
          {elements.map((el, index) => (
            <p className="text-gray-4" key={index}>
              {el}
            </p>
          ))}
        </div>
        <p className="text-gray-4 text-xs mt-8 text-center tracking-widest">&copy; 2023 Itiano, All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
