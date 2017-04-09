import React from 'react';

const MainBody = () => {
  return (
    <div className='bodyFlexBox'>
      <div className='leftBodyFlexbox'>
        <h1 className='leftBodyTitle'> What are Manpacks? </h1>
        <h4> Manpacks is a lifestyle service for men who are too busy to worry about basics (socks, underwear, shirts, shaving supplies, condoms, etc.)</h4>
        <p className='leftBodyDetails'>
          Whether they are busy working long hours, vacationing, playing sports, making music, playing sports, making music, working out at the gym...
          e make it easy  stay on topof having the essentials. We always put the customer first and enhance mens lives with name-brand products in their
          quarterly deliveries. </p>
        <p className='leftBodyDetails'> We are user friendly and allow customers to modify, rush, or delay shipment at anytime.</p>
      </div>
      <div className='rightBodyFlexbox'>
        <h1 className='leftBodyTitle'> Why Manpacks? </h1>
        <p className='leftBodyDetails'><strong>Discover the best mens products</strong> to look your best & attract others. </p>
        <p className='leftBodyDetails'><strong>Modify, rush, or delay shipments</strong> to get what you need when you need it. </p>
        <p className='leftBodyDetails'><strong>Automate routine purchases</strong> and never shop for them again. </p>
      </div>
    </div>
  )
}

export default MainBody;
