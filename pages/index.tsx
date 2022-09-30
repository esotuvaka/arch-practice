import Image from 'next/image';

import PrimaryLayout from '../components/layouts/primary/PrimaryLayout';
import Search from '../components/utility/search/Search';
import { NextPageWithLayout } from './page';

const Home: NextPageWithLayout = () => {
  return (
    <section className="flex flex-col items-center gap-y-5 mt-12 sm:mt-36">
      <Image
        src="/Google.png"
        alt="Google Logo"
        width={272}
        height={92}
        priority
      />
      <Search />
      <p>Search for dogs, cats, or broccoli!</p>
    </section>
  );
};

export default Home;

Home.getLayout = (page) => {
  return <PrimaryLayout>{page}</PrimaryLayout>;
};
