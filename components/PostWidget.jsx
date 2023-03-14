import React, { useState, useEffect } from 'react';
import moment from 'moment';
import Link from 'next/link';

import { getRecentPosts, getSimilarPosts } from '../services';


const PostWidget = ({categories, slug}) => {
  const [relatedPosts, setRelatedPosts] = useState([]);
  useEffect(() => {
    if(slug) {
      getSimilarPosts(categories, slug)
        .then((result) => setRelatedPosts(result))
    } else {
      getRecentPosts()
        .then((result) => setRelatedPosts(result))
    }
  }, [slug])

  
  return (
    <div className="text-center md:text-right justify-around shadow-none pb-80 mb-8">
        
        <h3 className='text-gray-400 text-xl mb-8 font-semibold border-b pb-4'>
          {slug ? 'Related' : 'Recent'}
        </h3> 

        {relatedPosts.map((post)=> (
          <Link href={`/post/${post.slug}`} key={post.title} className='text-xs'>
          <div className='relative'>
          <div key={post.title} className=''>
            <div className=''>
              <img
              alt={post.title}
              height='300px'
              width='400px'
              className='pb-3 rounded'
              src={post.featuredImage.url}
              />
            </div>
            <div className='text-white absolute bottom-4 cursor-pointer hover:text-black'>
                {post.title}&nbsp;<kbd>-</kbd>&nbsp;{moment(post.createdAt).format('MMM DD, YYYY')}
            </div>
            </div>
          </div>
          </Link>
        ))}
    </div>
  )
}



export default PostWidget