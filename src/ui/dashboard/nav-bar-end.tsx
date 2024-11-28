import Avatar from '../avatar';
import Search from '../search';
import { GoBell } from 'react-icons/go';
import ProfileImage from '../../assets/images/profile.jpg';

const NavbarEnd = () => {
  return (
    <div className="flex items-center  gap-[1rem]">
      <Search />

      <div className="flex items-center justify-center rounded-full size-[4rem] lg:w-[5rem] lg:h-[5rem] bg-secondary ">
        <GoBell className="text-black" size={20} />
      </div>

      <Avatar
        width="40px"
        height="40px"
        image={ProfileImage}
        altText="profile-image"
      />
    </div>
  );
};

export default NavbarEnd;
