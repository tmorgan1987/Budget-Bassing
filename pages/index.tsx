import Head from 'next/head';
import { PostCard, Categories, PostWidget, Header } from '../components';
import { getPosts } from '../services';

export default function Home({ posts }) {
  return (
    <div className="container mx-auto">
      <Head>
        <title>Budget Bassing</title>
        <link rel="icon" href="/BB-logos" />
      </Head>
      <div className='grid grid-cols-1 lg:grid-cols-12'>
      <div className='lg:col-span-5 col-span-1'>
        {posts.map((post) => <PostCard post={post.node} key={post.title}/>)}
      </div>
      <div className='col-span-4 col-span-4 hidden md:block'>
      {/* Empty Div for Spacing */}
      <div className="border-b mb-8 pb-11">
        </div>
        <div className="static-text flex items-center invisible lg:visible">
          <h1 className="text-white text-xl bottom-1 text-center pr-10 pt-20 fade-in"><span className='fade-in-span'>Welcome</span> <span className='fade-in-span'>to</span> <span className='fade-in-span'>Budget</span> <span className='fade-in-span'>Bassing.</span>  <span className='fade-in-span'>We</span> <span className='fade-in-span'>bring</span> <span className='fade-in-span'>you</span> <span className='fade-in-span'>the</span> <span className='fade-in-span'>bottom-line</span> <span className='fade-in-span'>on</span> <span className='fade-in-span'>fishing</span> <span className='fade-in-span'>gear</span> <span className='fade-in-span'>that</span> <span className='fade-in-span'>will</span> <span className='fade-in-span'>get</span> <span className='fade-in-span'>you</span> <span className='fade-in-span'>more</span> <span className='fade-in-span'>bass</span> <span className='fade-in-span'>for</span> <span className='fade-in-span'>your</span> <span className='fade-in-span'>buck.</span></h1>
        </div>
      </div>
      <div className="col-span-3 col-span-1">
        <div>
          <PostWidget />
          <Categories />
        </div>
      </div>
    </div>
  </div>
  )
}

export async function getStaticProps() {
  const posts = (await getPosts()) || [];

  return {
    props: { posts }
  }

}