export const Header = () => {
  return (
    <div className="flex justify-center items-center fixed top-3 w-full z-50">
      <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-black/80 text-white backdrop-blur">
        <a href="#" className="nav-item">Home</a>
        <a href="#projects" className="nav-item">Projects</a>
        <a href="#about" className="nav-item">About</a>
        <a href="#contact" className="nav-item bg-orange-500 text-white hover:bg-orange-600 hover:text-white">Contact</a>
      </nav>
    </div>
  );
};