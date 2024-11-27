import Navbar from '../../ui/dashboard/nav-bar';
import Overview from '../../ui/dashboard/overview';

const Dashboard = () => {
  return (
    <main className="flex flex-col xxl:items-center text-[4rem] bg-secondary font-manrope font-medium  min-h-screen lg:px-[2rem] xl:px-[4rem] xxl:px-[6rem] py-[1.6rem] ">
      <Navbar />
      <section className="flex flex-col gap-[3rem] py-[4rem] xxl:w-full">
        <Overview />
      </section>
    </main>
  );
};

export default Dashboard;
