import React, { useContext } from 'react';

import Link from 'next/link';

const categories = [{name: 'Lure Reviews', slug: 'lure-review'}, { name: 'Rod Reviews', slug: 'rod-review'}];

const Header = () => {
    return (
        <div className = "container mx-auto px-10 mb-8">
            <div className="border-b w-full inline-block border-white-800 py-8">
                <div className="md:float-left block">
                    <Link href='/'>
                        <span className='cursor-pointer'>
                            {/* <img src='BB-logos_white_1_80x80.png'></img> */}
                            <img src='test-logo.png'/>
                        </span>
                    </Link>
                </div>
                <div className='hidden md:float-center md:contents'>
                    {categories.map((category) => (
                        <Link key={category.slug} href={`/category/${category.slug}`}>
                            <span className='md:float-right mt-11 align-middle text-white ml-4 font-semibold cursor-pointer border-r pr-3 border-white-800'>
                                {category.name}
                            </span>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Header;