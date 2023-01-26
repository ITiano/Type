const Footer = () => {
  const elements = ["Our team", "Features", "Contact us", "About us", "Fate BUT", "Bad rohi", "Cat Soheil"];

  return (
    <footer className="bg-gray-2 py-14">
      <h1 className="text-dark font-bold text-center text-xl">Typiano</h1>
      <div className="centering gap-8 py-8 border-b-2">
        {elements.map((el, index) => (
          <p className="text-gray-4 text-xs" key={index}>
            {el}
          </p>
        ))}
      </div>
      <p className="text-gray-4 text-xs mt-8 text-center tracking-widest">&copy; 2023 Itiano, All rights reserved</p>
    </footer>
  );
};

export default Footer;
