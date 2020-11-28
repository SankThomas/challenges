import React, { useState, useEffect } from 'react'
import desktopBg from '../images/bg-header-desktop.svg'
import mobileBg from '../images/bg-header-mobile.svg'

const Header = () => {
  const [image, setImage] = useState(desktopBg)

  const setHeader = () => {
    if (window.innerWidth < 375) {
      setImage(mobileBg)
    } else {
      setImage(desktopBg)
    }
  }

  useEffect(() => {
    setHeader()
  }, [])

  return (
    <div className='header-image'>
      <img src={image} alt='background header' />
    </div>
  )
}

export default Header
