import OverviewMain from './overview-main';
import OverviewTop from './overview-top';

const Overview = () => {
  return (
    <section className="flex flex-col  md:w-full lg:w-auto items-center   gap-[2rem]">
      <OverviewTop />
      <OverviewMain />
    </section>
  );
};

export default Overview;
