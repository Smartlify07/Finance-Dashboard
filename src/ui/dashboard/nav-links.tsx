import clsx from 'clsx';
import { NavLink } from 'react-router-dom';

const NavLinks = () => {
  const setClassName = (isActive: boolean) => {
    return clsx(' font-medium   text-[1.7rem]', {
      'text-black ': !isActive,
      'text-black bg-secondary rounded-[2.4rem] py-[1.4rem]  px-[1rem]':
        isActive, // Active state styling
    });
  };
  return (
    <ul className="flex font-raleway items-center gap-[3rem]">
      <NavLink to={'/'} className={({ isActive }) => setClassName(isActive)}>
        Overview
      </NavLink>
      <NavLink
        to={'wallet'}
        className={({ isActive }) => setClassName(isActive)}
      >
        Wallet
      </NavLink>
      <NavLink
        to={'settings'}
        className={({ isActive }) => setClassName(isActive)}
      >
        Settings
      </NavLink>
      <NavLink to={'help'} className={({ isActive }) => setClassName(isActive)}>
        Help Center
      </NavLink>
    </ul>
  );
};

export default NavLinks;
