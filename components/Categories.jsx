import React, { useState, useEffect } from 'react';
import Link from 'next/link';

import { getCategories } from '../services';

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories()
      .then((newCategories) => setCategories(newCategories))
  }, []);

  return (
    <div className='visible lg:invisible text-white mb-8'>
        <h3 className='text-gray-400 text-xl mb-8 font-semibold border-b text-right pb-4'>
          Categories
        </h3>
        {categories.map((category) => (
          <Link key={category.slug} href={`/category/${category.slug}`}>
            <span className='cursor-pointer block pb-3 mb-3 text-right'>
              {category.name}
            </span>
          </Link>
        ))}
    </div>
  )
}

export default Categories