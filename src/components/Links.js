import React from 'react'

const Links = () => {
  const path = [
    {
    type:'svg'      
    },
    {
      name:'User Agreement',
      path:'/user-agreement',
      // component:{UserAgrement}
    },
    {
      name:'Privacy Policy',
      path:'/privacy-Policy',
      // component:{PrivacyPolicy}
    },
    {
      name:'Community Guidelines',
      path:'/community-guidelines',
      // component:{CommunityGuidelines}
    },
    {
      name:'Cookie Policy',
      path:'/cookie-policy',
      // component:{CookiePolicy}
    },
    {
      name:'Copyright Policy',
      path:'/copyright-policy',
      // component:{CopyrightPolicy}
    },
    {
      name:'Send Feedback',
      path:'/Send-Feedback',
      // component:{CopyrightPolicy}
    }
    // Send Feedback
  ]

  const handleLink=(e,path)=>{
  //  e.preventDefault()
    // console.log('path->',path)
  }

  return (
    <div className='flex w-full justify-center absolute mb-4 bottom-0' >
    {path.map((item)=>item.type=='svg'? <div><g class="linkedin-text"><path d="M136,41 L130,41 L130,37.5 C128.908,39.162 125.727,41.3 122.5,41.3 C115.668,41.3 111.2,36.975 111.2,30 C111.2,23.594 114.951,17.7 121.5,17.7 C124.441,17.7 127.388,18.272 129,20.5 L129,7 L136,7 L136,41 Z M123.25,23.9 C119.691,23.9 117.9,26.037 117.9,29.5 C117.9,32.964 119.691,35.2 123.25,35.2 C126.81,35.2 129.1,32.964 129.1,29.5 C129.1,26.037 126.81,23.9 123.25,23.9 L123.25,23.9 Z" fill="#000000"></path><path d="M108,37.125 C105.722,40.02 101.156,41.3 96.75,41.3 C89.633,41.3 85.2,36.354 85.2,29 C85.2,21.645 90.5,17.7 97.75,17.7 C103.75,17.7 108.8,21.917 108.8,30 C108.8,31.25 108.6,32 108.6,32 L92,32 L92.111,32.67 C92.51,34.873 94.873,36 97.625,36 C99.949,36 101.689,34.988 102.875,33.375 L108,37.125 Z M101.75,27 C101.797,24.627 99.89,22.7 97.328,22.7 C94.195,22.7 92.189,24.77 92,27 L101.75,27 Z" fill="#000000"></path><polygon fill="#000000" points="63 7 70 7 70 27 78 18 86.75 18 77 28.5 86.375 41 78 41 70 30 70 41 63 41"></polygon><path d="M37,18 L43,18 L43,21.375 C43.947,19.572 47.037,17.7 50.5,17.7 C57.713,17.7 59,21.957 59,28.125 L59,41 L52,41 L52,29.625 C52,26.969 52.152,23.8 48.5,23.8 C44.8,23.8 44,26.636 44,29.625 L44,41 L37,41 L37,18 Z" fill="#000000"></path><path d="M29.5,6.125 C31.813,6.125 33.875,8.189 33.875,10.5 C33.875,12.811 31.813,14.875 29.5,14.875 C27.19,14.875 25.125,12.811 25.125,10.5 C25.125,8.189 27.19,6.125 29.5,6.125 L29.5,6.125 Z M26,41 L33,41 L33,18 L26,18 L26,41 Z" fill="#000000"></path><polygon fill="#000000" points="0 7 7 7 7 34 22 34 22 41 0 41"></polygon></g></div>:<a onClick={(e)=>handleLink(e,item.path)} class="underline cursor-pointer text-xs text-gray-500 font-flex decoration-transparentbold  mr-6 decoration-transparent hover:decoration-inherit transition duration-300 ease-in-out">{item.name}</a>)}
    </div>
  )
}

export default Links