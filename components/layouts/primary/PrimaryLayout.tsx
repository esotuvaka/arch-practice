import Head from 'next/head';
import React from 'react';
import Footer from '../../navigation/footer/Footer';
import Header from '../../navigation/header/Header';

export interface IPrimaryLayout {
  children?: React.ReactNode;
}

const PrimaryLayout: React.FC<IPrimaryLayout> = ({ children }) => {
  return (
    <>
      <Head>
        <title>Fullstack Architecture Practice</title>
      </Head>
      <div
        className={`min-h-screen overflow-x-hidden flex flex-col justify-center items-center`}
      >
        <Header />
        <main className="">{children}</main>
        <div className="m-auto" />
        <Footer />
      </div>
    </>
  );
};

export default PrimaryLayout;
