import React from 'react';
import Card from '../components/Card';
import Header from '../components/Header';
import Footer from '../components/Footer';

import { useMediaQuery } from '../hooks/queries/mediaQuery';

const Home: React.FC = () => {
  const page = 1;
  const perPage = 50;
  const { data } = useMediaQuery(page, perPage);

  return (
    <div className="flex flex-col gap-10">
      <div>
        <Header />
      </div>
      <div className="grid grid-cols-6 gap-4">
        {data?.Page?.mediaList?.map((item) => (
          <Card
            key={item?.id}
            title={item?.media?.title?.english}
            image={item?.media?.coverImage?.large}
            nativeTitle={item?.media?.title?.native}
          />
        ))}
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
