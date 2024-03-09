import React, { useState, useEffect } from 'react'
import HomeTopSlider from './HomeTopSlider'
import TopBooks from './TopBooks'
import Sidebar from './Sidebar'

const Home = () => {
  const [isSticky, setSticky] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 300)
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])
  return (
    <div className=' pr-4  pb-1 -z-20 pt-32  pl-60'>

      <div className="absolute left-0 top-[91px]">
        <Sidebar />
      </div>

      <div>
        <div>
          <HomeTopSlider />
        </div>

        <div>
          <TopBooks />
        </div>
      </div>
    </div>
  )
}

export default Home
