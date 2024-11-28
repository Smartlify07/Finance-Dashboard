import NavbarEnd from './nav-bar-end';
import NavLinks from './nav-links';

const Navbar = () => {
  return (
    <nav className="lg:flex rounded-[6rem] hidden  font-raleway items-center justify-between py-[1rem] px-[1rem] bg-white w-full">
      <div className="flex items-center gap-[4.5rem]">
        <h1 className="font-raleway text-[2.5rem] font-semibold">Minpeak</h1>

        <NavLinks />
      </div>
      <NavbarEnd />
    </nav>
  );
};

export default Navbar;
