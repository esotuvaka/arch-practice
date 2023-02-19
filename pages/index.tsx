import PrimaryLayout from '../components/layouts/primary/PrimaryLayout';
import Search from '../components/utility/search/Search';
import { NextPageWithLayout } from './page';

const Home: NextPageWithLayout = () => {
  return (
    <section className="flex flex-col items-center gap-y-5 justify-center h-screen">
      <div className="text-7xl">AImages</div>
      <Search />
    </section>
  );
};

export default Home;

Home.getLayout = (page) => {
  return <PrimaryLayout>{page}</PrimaryLayout>;
};
