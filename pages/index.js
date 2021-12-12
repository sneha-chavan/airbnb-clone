import Head from 'next/head'
import Header from '../component/Header'

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>AirbnbNextJS</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Header */}
      <Header />
      <main className="">
        <h1>Sneha</h1>

        {/* Body Component */}

      </main>

      <footer className="">

      </footer>
    </div>
  )
}
