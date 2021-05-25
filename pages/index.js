import Head from "next/head";
import Card from "../components/Card";
import Header from "../components/Header";
import Nav from "../components/Nav";
import request from "../utils/request";

export default function Home({ results }) {
  return (
    <div>


      <Head>
        <title>hulu</title>
        <link rel="icon" href="/hulu.png" />
      </Head>
      <Header />
      <Nav />
      <Card results={results} />
    </div>
  );
}

export async function getServerSideProps(context) {
  const genre = context.query.genre;
  const req = await fetch(
    `https://api.themoviedb.org/3${
      request[genre]?.url || request.fetchTrending.url
    }`
  ).then((res) => res.json());

  return {
    props: {
      results: req.results,
    },
  };
}
