import React from 'react';

const Hamburger = () => {
  return (
    <div className="bg-secondary rounded-full size-[40px] flex flex-col gap-[0.4rem] items-center justify-center">
      <span className="border border-black rounded-sm w-[20px] h-[1.5px]"></span>
      <span className="border border-black rounded-sm w-[20px] h-[1.5px]"></span>
      <span className="border border-black rounded-sm w-[20px] h-[1.5px]"></span>
    </div>
  );
};

export default Hamburger;
