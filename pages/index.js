import Head from 'next/head'
import Banner from '../component/banner/Banner'
import BodyJs from '../component/body/bodyJs';
import bodyJs from '../component/body/bodyJs';
import Header from '../component/header/Header'
import HeaderSite from '../component/header/HeaderSite'
import styles from '../styles/main.module.css';



export default function Home({ exploreData }) {
  return (
    <div className="">
      <Head>
        <title>AirbnbNextJS</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* <Header /> */}
      <HeaderSite />

      <Banner />
      {/* className="pb-5 pt-6" */}
      <main className={styles.main}>
        <section className={styles.explore_section}>
          <h1 className={styles.h1}>Explore Nearby</h1>

        </section>
      </main>


      <footer className="">
        <BodyJs props />
        {/* Api called for Explore Data */}
        {exploreData.map(item => console.log(item))}
        <div className="text-4xl hover:italic">footer</div>
      </footer>
    </div>
  )
}

// const getStaticProps = async function () {
//   try {
//     const exploreData = () => await fetch('https://links.papareact.com/pyp')
//       .then(res => res.json());
//     return {
//       props: exploreData
//     }
//   }
//   catch (err) {
//     showError(err);
//   }
// }

export async function getStaticProps() {
  const exploreData = await fetch('https://links.papareact.com/pyp')
    .then(res => res.json());

  return {
    props: { exploreData }
  }
}

