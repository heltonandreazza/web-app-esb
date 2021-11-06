import React from 'react'
import { BanIcon } from '@heroicons/react/outline'

const items = [
  {
    img: 'http://finance.bold-themes.com/main-demo/wp-content/uploads/sites/4/2016/07/inner_6-160x160.jpg',
    accountant: 'FIST',
    title: 'Collaboration',
    desc: 'Collaboratively administrate empowered markets via plug-and-play networks.'
  },
  {
    img: 'http://finance.bold-themes.com/main-demo/wp-content/uploads/sites/4/2016/07/inner_6-160x160.jpg',
    accountant: 'SECOND',
    title: 'Vision',
    desc: 'Completely iterate covalent strategic theme areas via accurate e-markets.'
  },
  {
    img: 'http://finance.bold-themes.com/main-demo/wp-content/uploads/sites/4/2016/07/inner_6-160x160.jpg',
    accountant: 'THIRD',
    title: 'Planning',
    desc: 'Seamlessly empower fully researched growth strategies and sources.'
  },
]

const Item = ({ img, accountant, title, desc }) => (
  <div className="p-4 pt-0 md:flex">
    <div className="pl-8 w-80 md:m-0">
      <img
        src={img}
        className="rounded-full"
      />
    </div >
    <div className=" pt-0 md:pl-0 md:pr-8">
      <p className='tracking-widest'>{accountant}</p>
      <p className='font-extrabold text-xl pb-2'>{title}</p>
      <p className="leading-8">{desc}</p>
      <div className="flex items-center py-8">
        <BanIcon className="h-4 w-4"/>
        <p className="pl-1 pr-2">reade more</p>
        <BanIcon className="h-4 w-4" />
        <p className="pl-1">get started</p>
      </div>
    </div>
  </div>
)

const Blog = () => {
  return (
    <section>
      <div>
        <p className="font-extrabold text-4xl leading-6 p-8" >Synergize resources</p>
        <p className="font-medium text-gray-700 leading-8 px-8  ">Collaboratively administrate empowered markets via plug-and-play maintain networks. Dynamically usable procrastinate B2B users after installed base benefits. Dramatically maintain visualize customer directed convergence without revolutionary ROI.</p>
      </div>
      <div className='p-8 pb-0'>
        <img
          className="w-full pt-4"
          src="http://finance.bold-themes.com/main-demo/wp-content/uploads/sites/4/2016/07/promo_contact.jpg"
          alt=""
        />
      </div>
      <div>
        {items.map(item => (
          <Item key={item.title} title={item.title} desc={item.desc} accountant={item.accountant} img={item.img} />
        ))}
      </div>
    </section>
  )
}

export default Blog
