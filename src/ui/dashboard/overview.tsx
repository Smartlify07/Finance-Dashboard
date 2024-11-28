import OverviewMain from './overview-main';
import OverviewTop from './overview-top';

const Overview = () => {
  return (
    <section className="flex flex-col items-center   gap-[2rem]">
      <OverviewTop />
      <OverviewMain />
    </section>
  );
};

export default Overview;
