const Footer = () => {
  return (
    <footer className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
      <div className="text-white-500 flex gap-2">
        <p>Murukesh Pillai</p>
        <p>|</p>
        <p>3D Web Development Portfolio</p>
      </div>

      <div className="flex gap-3">
        <a href="https://github.com/Murukesh-Pillai" target="_blank" rel="noopener noreferrer" className="social-icon">
          <img src="/assets/github.svg" alt="github" className="w-1/2 h-1/2" />
        </a>
        <a href="https://www.instagram.com/murukesh_/" target="_blank" rel="noopener noreferrer" className="social-icon">
          <img src="/assets/instagram.svg" alt="instagram" className="w-1/2 h-1/2" />
        </a>
      </div>

      <p className="text-white-500">© 2024 | Contact to Learn more about the Project.</p>
    </footer>
  );
};

export default Footer;