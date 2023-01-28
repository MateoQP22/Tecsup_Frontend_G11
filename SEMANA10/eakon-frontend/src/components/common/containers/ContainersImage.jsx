import React, { useState } from 'react'
import logoEAKON from '../../../assets/img/logo-eakon.webp'

const ContainersImage = ({src, alt, className=''}) => {
  const [numberOfErrors, setnumberOfErrors] = useState(0);

  const handleLoadImg = (e) => {  
    e.target.style.animation = 'none'
  }

  const handleErrorImg = (e) => {
    if(numberOfErrors === 0){
      setnumberOfErrors(1);
      e.target.src = logoEAKON

    }
  }

  return (
    <img
      src={src ?? logoEAKON}
      alt={alt}
      className={`section_img ${className}`}
      loading='lazy'
      onLoad={handleLoadImg}
      onError={handleErrorImg}
      width="256"
      height="256"
    >
    </img>
  )
}

export default ContainersImage;