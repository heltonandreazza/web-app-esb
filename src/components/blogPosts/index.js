import { ArrowSmRightIcon, StarIcon } from '@heroicons/react/outline'
import React from 'react'

const BlogPosts = () => {
  return (
    <section className="container mx-auto p-8">
      <div className="flex items-center justify-between">
        <div className="w-12 pb-4">
          <img
            className=""
            src="http://2.gravatar.com/avatar/?s=144&d=mm&r=g"
            alt="avatar"
          />
        </div>
        <div className=" flex flex-col items-end">
          <a href="³">by</a>
          <p>july 22, 2021</p>
        </div>
      </div>
      <div>
        <div className="pb-8">
          <img
            src="http://finance.bold-themes.com/main-demo/wp-content/uploads/sites/4/2016/07/post_15-1280x800.jpg"
            alt="post img"
          />
        </div>
        <div>
          <p className="flex">
            <a href="#" className="pr-2">
              Audio
            </a>
            <a href="#" className="pr-2">
              video
            </a>
            /
            <StarIcon className="w-8 pl-2 pr-1" /> 0
          </p>
        </div>
      </div>
      <div className="pb-16">
        <h2 className="pb-2 font-extrabold text-3xl md:text-5xl">
          Share the inspiration
        </h2>
        <p className="leading-16">
          Eodem modo typi, qui nunc nobis videntur parum clari, fiant sollemnes
          in futurum. Eodem modo typi, qui nunc nobis videntur parum. Ut wisi
          enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit
          lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum
          iriure dolor in hendrerit in vulputate velit.
        </p>
      </div>
      <div className="md:hidden">
        <div className="border-solid border-t-2 border-black rounded-full bg-black  black w-20 m-auto pt-"></div>
      </div>
      <div className="pt-4">
        <div className=" flex items-center justify-center pt-2 pb-8">
          <StarIcon className="w-6 mr-2" />
          <StarIcon className="w-6 mr-2" />
          <StarIcon className="w-6 mr-2" />
          <StarIcon className="w-6 mr-2" />
          <StarIcon className="w-6 " />
        </div>
        <div className="flex justify-center border-solid border-2 border-black rounded-3xl w-64 m-auto py-1 hover:bg-black hover:text-white duration-500">
          <a src="#" className="flex items-center font-bold">
            <p className="px-6 text-bold uppercase">continue reading </p>
            <div className="border-l-solid border-l-2 border-black">
              <ArrowSmRightIcon className="w-8 ml-1" />
            </div>
          </a>
        </div>
      </div>
    </section>
  )
}

export default BlogPosts
