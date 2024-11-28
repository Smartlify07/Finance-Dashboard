import MobileNavbar from '../../ui/dashboard/mobile-navbar';
import Navbar from '../../ui/dashboard/nav-bar';
import Overview from '../../ui/dashboard/overview';

const Dashboard = () => {
  return (
    <main className="flex flex-col items-center   xxl:items-center text-[4rem] bg-secondary font-manrope font-medium  min-h-screen px-[1.5rem] lg:px-[2rem] xl:px-[4rem] xxl:px-[6rem] py-[1.6rem]">
      <Navbar />
      <MobileNavbar />
      <section className="flex flex-col items-center lg:items-stretch gap-[3rem] py-[4rem]  w-full  xxl:w-full">
        <Overview />
      </section>
    </main>
  );
};

export default Dashboard;
