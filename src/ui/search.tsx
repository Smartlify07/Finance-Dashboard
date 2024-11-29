import { RiSearch2Line } from 'react-icons/ri';

const Search = () => {
  return (
    <>
      <div className="relative hidden lg:flex items-center font-raleway   ">
        <input
          type="text"
          className=" rounded-[3rem] text-[1.6rem] text-black-text pl-[4rem] pr-[2rem] placeholder:text-black-text bg-secondary py-[1.4rem] px-[0.5rem] "
          placeholder="Search"
        />
        <RiSearch2Line className="text-black text-[2rem] absolute left-[1rem] top-[1.5rem]" />
      </div>

      <div className="rounded-full bg-secondary size-[4rem] flex items-center justify-center">
        <RiSearch2Line className="text-black" size={25} />
      </div>
    </>
  );
};

export default Search;
