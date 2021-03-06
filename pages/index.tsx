import React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import Header from '../components/header';
import Hero from '../components/hero';
import Info from '../components/info';
import FeaturedServices from '../components/featuredServices';
import About from '../components/about';

const Home: NextPage = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Template</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Info />
      <Header />
      <Hero />
      <FeaturedServices />
      <About />
    </React.Fragment>
  )
}

export default Home
