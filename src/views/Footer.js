import React from 'react';

const Footer = () => {
  return (
    <div className='footerFlexbox'>
      <p className='FollowText'> Follow Us</p>
      <div className='iconsFlexbox'>
        <img className='socialMediaIcons' src='http://metaleater.com/images/layout/rss-logo.png' />
        <img className='socialMediaIcons' src='https://pbs.twimg.com/profile_images/652502026929197056/tWqz5td1_400x400.png' />
        <img className='socialMediaIcons' src='http://www.marketingsupply.co/old/wp-content/uploads/2016/07/fb-art.jpg' />
        <img className='socialMediaIcons' src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/768px-LinkedIn_logo_initials.png' />
      </div>
      <h3 className='liscenseText'> Made by Co. All Rights Reserved. 2011 </h3>
    </div>
  )
}

export default Footer;
