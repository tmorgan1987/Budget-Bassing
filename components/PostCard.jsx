import React from "react";
import moment from "moment";
import Link from "next/link";

const PostCard = ({ post }) => {
  if (post.featuredPost === true) {
    return (
      <div className="relative overflow-hidden justify-around shadow-md pb-80 mb-6">
        <Link href={`/post/${post.slug}`}>
          <img
            src={post.featuredImage.url}
            alt={post.title}
            className="object-top absolute h-80 w-full object-scale-down shadow-lg rounded-t-lg lg:rounded-lg"
          />
        </Link>
        <h1 className="absolute transition duration-700 mb-8 cursor-pointer text-white hover:text-black font-semibold bottom-6 right-5">
          {post.title}
        </h1>
        <p className="absolute transition duration-700 mb-8 cursor-pointer text-white bottom-1 right-5">
          {post.author.name} - {moment(post.createdAt).format("M-D-YYYY")}
        </p>
      </div>
    );
  }
};

export default PostCard;
