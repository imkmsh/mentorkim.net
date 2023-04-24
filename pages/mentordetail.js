import Head from 'next/head'
import Layout from '../components/layout'
import Infomation from '../components/detail/infomation'
import Comment from '../components/detail/comment'

export default function Home() {
    return (
      <Layout>
        <Head>
          <title>김멘토넷</title>
          <meta name="description" content="김멘토넷" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Infomation/>
        <Comment />
      </Layout>
    )
  }