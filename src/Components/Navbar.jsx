import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    }else{
      // document.body.style.overflow = "scroll";
    }
    return () => {
      // document.body.style.overflow = "scroll";
    }
  }, [!open])
  

  return (
    <div className="p-6">
      <div
        className="space-y-1 md:hidden"
        onClick={() => setOpen(!open)}
        style={{
          opacity: open && "0",
          transition: open && "all",
          transitionDuration: open && "500ms",
        }}
      >
        <div className="w-5 h-0.5 bg-white"></div>
        <div className="w-4 h-0.5 bg-white"></div>
        <div className="w-6 h-0.5 bg-white"></div>
      </div>
      
      <div
        className="fixed z-50 top-0 left-0 overflow-hidden hidden h-screen w-full"
        style={{
          display: open && "block",
          backdropFilter: open && "blur(5px)",
        }}
      >
        <div
          className="absolute top-6 left-6 opacity-0"
          onClick={() => setOpen(!open)}
          style={{
            opacity: open && "1",
            transition: open && "all",
            transitionDuration: open && "all",
          }}
        >
          <ion-icon name="close-outline" size="large"></ion-icon>
        </div>
        <nav
          className="absolute top-8 left-6 opacity-0 text-white font-helvetica border border-white"
          style={{
            opacity: open && "1",
            transform: open && "translate(40px)",
          }}
        >
          <ul>
            <li className="px-6 py-2">
              <Link to="/">Home</Link>
            </li>
            <hr />
            <li className="px-6 py-2">
              <Link to="/about">About us</Link>
            </li>
            <hr />
            <li className="px-6 py-2">
              <Link to="/press">Press</Link>
            </li>
          </ul>
        </nav>
      </div>

      <nav className="hidden text-white md:block">
        <ul className="flex justify-start items-center">
          <li className="bg-white text-[#849E8F] px-8 py-2 border border-white"><Link to="/">Home</Link></li>
          <li className="px-8 py-2 border border-white"><Link to="/about">About Us</Link></li>
          <li className="px-8 py-2 border border-white"><Link to="/press">Press</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
