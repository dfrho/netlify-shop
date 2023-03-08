import Head from 'next/head';
import { useState } from 'react';
import HitListing from '../components/HitListing';
import Header from '@components/Header';
import Footer from '@components/Footer';
import { getProductList } from 'netlify/functions/getProductList';
import searchClient from '../algolia';
import { InstantSearch, SearchBox, Hits } from 'react-instantsearch-hooks-web';

function Hit({ hit }) {
  return <HitListing hit={hit} />;
}

function Home({ products }) {
  const [searchState, setSearchState] = useState({});

  const handleSearchStateChange = (newSearchState) => {
    setSearchState(newSearchState);
  };

  return (
    <>
      <Head>
        <title>Life Fitness Shop</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main>
        <InstantSearch
          indexName={process.env.ALGOLIA_SEARCH_INDEX}
          searchClient={searchClient}
          searchState={searchState}
          onSearchStateChange={handleSearchStateChange}
        >
          <SearchBox />
          <Hits hitComponent={Hit} />
        </InstantSearch>
      </main>

      <Footer />
    </>
  );
}

export async function getStaticProps() {
  const products = await getProductList();

  return {
    props: {
      products,
    },
  };
}

export default Home;
