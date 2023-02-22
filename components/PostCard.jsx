import React from "react";
import moment from "moment";
import Link from "next/link";

const PostCard = ({ post }) => {
  if (post.featuredPost === true) {
    return (
      <div className="relative overflow-hidden justify-around shadow-none pb-80 mb-6">
        <h3 className='text-gray-400 text-xl mb-8 font-semibold border-b pb-4'>
          Featured
        </h3> 
        <Link href={`/post/${post.slug}`}>
          <img
            src={post.featuredImage.url}
            alt={post.title}
            className="object-top absolute h-80 object-scale-down shadow-none rounded-t-lg lg:rounded-lg"
          />
        </Link>
        <h1 className="absolute transition duration-700 mb-8 cursor-pointer text-white hover:text-black font-semibold bottom-6 left-2">
          {post.title}
        </h1>
        <p className="absolute transition duration-700 mb-8 cursor-pointer text-white bottom-1 left-2">
          {post.author.name} - {moment(post.createdAt).format("MMM D, YYYY")}
        </p>
      </div>
    );
  }
};

export default PostCard;
