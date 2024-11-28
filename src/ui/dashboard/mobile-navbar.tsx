import NavbarEnd from './nav-bar-end';
import Hamburger from './hamburger';

const MobileNavbar = () => {
  return (
    <nav className="flex lg:hidden rounded-[6rem]     font-raleway items-center justify-between py-[1rem] px-[1rem] bg-white w-full">
      <div className="flex items-center gap-[4.5rem]">
        <Hamburger />
      </div>
      <NavbarEnd />
    </nav>
  );
};

export default MobileNavbar;
