import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    }else{
      document.body.style.overflowY = "scroll";
    }
    return () => {
      document.body.style.overflowX = "hidden";
    }
  }, [!open])
  

  return (
    <div className="px-6 py-10 md:px-32 md:py-16">
      <div
        className="flex flex-col gap-1 w-fit md:hidden"
        onClick={() => setOpen(!open)}
        style={{
          opacity: open && "0",
        }}
      >
        <div className="w-5 border border-y-[1.25px] border-white bg-white rounded-sm"></div>
        <div className="w-4 border border-y-[1.25px] border-white bg-white rounded-sm"></div>
        <div className="w-6 border border-y-[1.25px] border-white bg-white rounded-sm"></div>
      </div>
      
      <div
        className="fixed top-0 z-50 left-0 overflow-hidden hidden h-screen w-full"
        style={{
          display: open && "block",
          background : open && "#849E8F",
          opacity: open && '90%',
          transition: open && "all",
          transitionDuration: open && "500ms",
        }}
      >
        <div
          className="absolute top-6 left-6 opacity-0"
          onClick={() => setOpen(!open)}
          style={{
            opacity: open && "1",
          }}
        >
          <ion-icon name="close-outline" size="large"></ion-icon>
        </div>
        <nav
          className="absolute top-8 left-6 z-50 opacity-0 flex flex-col text-center text-white font-helvetica"
          style={{
            opacity: open && "1",
            transform: open && "translate(40px)",
          }}
        >
              <NavLink className={({isActive}) => (isActive ? 'active' : 'inactive')} to="/">Home</NavLink>
              <NavLink className={({isActive}) => (isActive ? 'active' : 'inactive')} to="/about">About us</NavLink>
              <NavLink className={({isActive}) => (isActive ? 'active' : 'inactive')} to="/press">Press</NavLink>
        </nav>
      </div>

      <nav className="hidden text-white md:block">
        <NavLink className={({isActive}) => (isActive ? 'active' : 'inactive')} to='/'>
          Home
        </NavLink>
        <NavLink className={({isActive}) => (isActive ? 'active' : 'inactive')} to='/about'>
          About Us
        </NavLink>
        <NavLink className={({isActive}) => (isActive ? 'active' : 'inactive')} to='/press'>
          Press
        </NavLink>
      </nav>
    </div>
  );
};

export default Navbar;
