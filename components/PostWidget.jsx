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
    <div className="text-right relative overflow-hidden justify-around shadow-none pb-80 mb-8">
        
        <h3 className='text-gray-400 text-xl mb-8 font-semibold border-b pb-4'>
          {slug ? 'Related' : 'Recent'}
        </h3> 
        {/* This is the H3 element that displays related/recent reviews */}

        {relatedPosts.map((post)=> (
          <div key={post.title} className=''>
            <div className=''>
              <img
              alt={post.title}
              height='120px'
              width='120px'
              className=''
              src={post.featuredImage.url}
              />
            </div>
            <div className='text-white'>
            <Link href={`/post/${post.slug}`} key={post.title} className='text-md'>
                {post.title}
              </Link>
              <p className='text-white font-xs'>
                {moment(post.createdAt).format('MMM DD, YYYY')}
              </p>
            </div>
          </div>
        ))}
    </div>
  )
}

export default PostWidget

//   return (
//     <div className="text-right relative overflow-hidden justify-around shadow-none pb-8 mb-8">
//         <h3 className='text-gray-400 text-xl mb-8 font-semibold border-b pb-4'>
//           {slug ? 'Related Reviews' : 'Recent Reviews'}
//         </h3>
//         {relatedPosts.map((post)=> (
//           <div key={post.title} className='flex items-center w-full mb-4'>
//             <div className='w-16 flex-none'>
//               <img
//               alt={post.title}
//               height='120px'
//               width='120px'
//               className='align-middle rounded-full'
//               src={post.featuredImage.url}
//               />
//             </div>
//             <div className='flex-grow ml-4 text-white'>
//             <Link href={`/post/${post.slug}`} key={post.title} className='text-md'>
//                 {post.title}
//               </Link>
//               <p className='text-white font-xs'>
//                 {moment(post.createdAt).format('MMM DD, YYYY')}
//               </p>
//             </div>
//           </div>
//         ))}
//     </div>
//   )
// }

// export default PostWidget