import type { NextPage } from 'next'
import Head from 'next/head'
import Header from "../components/Header"
import Title from "../components/Title"
import Image from "../components/Image"
import Try from "../components/Try"

const Home: NextPage = () => {
  return (
    <main className='bg-[#0A014F] h-screen'>
      <Head>
        <title>Quiet Notes</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Title />
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="#f6caca" fill-opacity="1" d="M0,128L34.3,144C68.6,160,137,192,206,208C274.3,224,343,224,411,202.7C480,181,549,139,617,106.7C685.7,75,754,53,823,69.3C891.4,85,960,139,1029,154.7C1097.1,171,1166,149,1234,133.3C1302.9,117,1371,107,1406,101.3L1440,96L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"></path>
      </svg>
      <Image />
      <Try />
    </main>
  )
}

export default Home
