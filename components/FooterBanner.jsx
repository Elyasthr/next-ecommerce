import React from 'react';
import Link from 'next/link';

import { urlFor } from '../lib/client';

const FooterBanner = ({ footerBanner }) => {
  return (
    <div className='footer-banner-container'>
      <div className="banner-desc">
        <LeftBanner footerBanner={footerBanner}/>
        <RightBanner footerBanner={footerBanner}/>
        <img src={urlFor(footerBanner.image)} className="footer-banner-image"/>
      </div>
    </div>
  );
};

export default FooterBanner;

const LeftBanner = ({ footerBanner: {discount, largeText1, largeText2, saleTime } })=>{
  return(
    <div className="left">
      <p>{discount}</p>
      <h3>{largeText1}</h3>
      <h3>{largeText2}</h3>
      <p>{saleTime}</p>
    </div>
  )
}

const RightBanner = ({ footerBanner : {smallText, midText, desc, product, buttonText} })=>{
  return(  
    <div className="right">
      <p>{smallText}</p>
      <h3>{midText}</h3>
      <p>{desc}</p>
      <Link href={`/product/${product}`}>
        <button type='button'>{buttonText}</button>
      </Link>
    </div>
  )
}