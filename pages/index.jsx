import Head from "next/head";

import Popular from "../components/popular";

function Home({ movies }) {
  return (
    <>
      <Head>
        <title>KDMB</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h3>Dünya Gündeminde En Popüler Filmler</h3>
      
      <Popular movies={movies}/>
    </>
  );
}


export async function getServerSideProps(){
  const request = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=6367becc9d2b0a4bdffacddf5a705b0b')
  const movies = await request.json()
  return {
    props: {
        movies
    }
  }
}

export default Home