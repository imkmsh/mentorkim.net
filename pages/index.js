import Head from 'next/head'
import Layout from '../components/layout'
import Picture from '../components/home/picture'
import Feature from '../components/home/feature'
import Mentorlist from '../components/home/mentorlist'
import Mentorrating from '../components/home/mentorrating'


export default function Home({url}) {
  console.log(url);
  return (
    <Layout>
      <Head>
        <title>김멘토넷</title>
        <meta name="description" content="김멘토넷" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Picture />
      <Feature />
      <section className="flex min-h-screen flex-col items-center justify-center text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <Mentorrating />
        </div>
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <Mentorlist />
        </div>
      </section>
    </Layout>
  )
}