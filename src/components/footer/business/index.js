import React from 'react'

const postsBusiness = [
  {
    twitterLink: '#',
    twitterTitle: '@bold-themes - 9 months',
    desc: 'Take a moment to enjoy in our all time favorite and the bestseller in its niche Craft Beer, a WordPress theme for',
    postLink: '#',
    postTitle: 'https://t.co/XRO2r5MhJr',
  },
  {
    twitterLink: '#',
    twitterTitle: '@bold-themes - 9 months',
    desc: 'Take a moment to enjoy in our all time favorite and the bestseller in its niche Craft Beer, a WordPress theme for',
    postLink: '#',
    postTitle: 'https://t.co/XRO2r5MhJr',
  },
  {
    twitterLink: '#',
    twitterTitle: '@bold-themes - 9 months',
    desc: 'Take a moment to enjoy in our all time favorite and the bestseller in its niche Craft Beer, a WordPress theme for',
    postLink: '#',
    postTitle: 'https://t.co/XRO2r5MhJr',
  },
]

const Content = ({ twitterLink, twitterTitle, desc, postLink, postTitle }) => (
  <div className="pb-4">
    <div className="flex items-center">
      <Twitter />
      <a href={twitterLink}>
        <p>{twitterTitle}</p>
      </a>
    </div>
    <div>
      <p className="leading-8">{desc}</p>
      <a
        href={postLink}
        className="hover:text-blue-400 duration-150 text-gray-500"
      >
        {postTitle}
      </a>
    </div>
  </div>
)

const Twitter = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 56 52"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="hover:fill-green"
  >
    <path
      d="M19.095 43.5014C37.2083 43.5014 47.1155 28.4946 47.1155 15.4809C47.1155 15.0546 47.1155 14.6303 47.0867 14.2079C49.0141 12.8138 50.6778 11.0877 52 9.11033C50.2028 9.90713 48.2961 10.4294 46.3437 10.6598C48.3996 9.42915 49.9383 7.49333 50.6733 5.21273C48.7402 6.35994 46.6253 7.16838 44.4198 7.60313C42.935 6.02428 40.9712 4.97881 38.8324 4.6285C36.6935 4.27818 34.4988 4.64256 32.5879 5.66523C30.677 6.68791 29.1564 8.31187 28.2615 10.2858C27.3665 12.2598 27.1471 14.4737 27.6371 16.5849C23.7218 16.3885 19.8915 15.371 16.3949 13.5983C12.8983 11.8257 9.81353 9.33765 7.3408 6.29561C6.08146 8.4636 5.69574 11.0301 6.2622 13.4725C6.82865 15.9148 8.30468 18.0495 10.3898 19.4418C8.82246 19.3959 7.2893 18.9731 5.92 18.2092V18.334C5.92062 20.6077 6.7077 22.8112 8.14774 24.5707C9.58778 26.3303 11.5921 27.5375 13.8208 27.9878C12.371 28.3832 10.8497 28.441 9.37408 28.1567C10.0036 30.1134 11.2289 31.8244 12.8785 33.0506C14.5281 34.2768 16.5197 34.9569 18.5747 34.9958C16.5329 36.6007 14.1946 37.7873 11.6937 38.4878C9.19287 39.1882 6.57843 39.3886 4 39.0777C8.50367 41.9677 13.7438 43.5007 19.095 43.4937"
      fill="#1DA1F2"
    />
  </svg>
)

const Business = () => {
  return (
    <div className=" pt-4 lg:w-1/4 pb-12 lg:px-8">
      <div className="mb-4 ">
        <h2 className="text-3xl font-bold mb-4">#bussines</h2>
        <div className="border-solid border-2 border-blue-300 rounded bg-blue-300 w-24"></div>
      </div>
      {postsBusiness.map(item => (
        <Content
          twitterLink={item.twitterLink}
          twitterTitle={item.twitterTitle}
          desc={item.desc}
          postLink={item.postLink}
          postTitle={item.postTitle}
          key={item.postTitle}
        />
      ))}
    </div>
  )
}

export default Business
