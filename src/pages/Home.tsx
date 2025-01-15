/* eslint-disable @typescript-eslint/no-unused-vars */
import Card from '../components/Card';
import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Loading from '../components/Loading';
import Pagination from '../components/Pagination';

import { useMediaQuery } from '../hooks/queries/mediaQuery';

const Home: React.FC = () => {
  const perPage = 20;

  const [page, setPage] = useState(1);
  const { data, refetch, loading } = useMediaQuery(page, perPage);

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
    refetch({ page: page, perPage });

    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="flex flex-col gap-10">
      <div>
        <Header />
      </div>
      {loading && (
        <div>
          <Loading />
        </div>
      )}
      <div className="grid grid-cols-5 gap-4">
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
        <Pagination currentPage={page} onPageChange={handlePageChange} />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
