import React from 'react';

const Comments = () => {
  return (
    <div className='CommentsFlexBox'>
    <img className='commentImage' src='https://s-media-cache-ak0.pinimg.com/736x/89/6d/bc/896dbc1349fb2cbc24803707feb3ab94.jpg' alt='profile picture' />
      <div className='LeftCommentFlexBox'>
      <p className='commentText'> <em> @manpacks is awesome. Between @manpacks, @zappos, and @soap.com, I might never have to run errands again. </em> </p>
      <p className='username'> <strong>-@natehennings</strong></p>
      </div>
      <img className='commentImage' src='https://s-media-cache-ak0.pinimg.com/736x/9c/3f/e8/9c3fe8cb6977875bdb00eaeaae2e4d87.jpg' alt='profile picture' />
      <div className='RightCommentFlexBox'>
      <p className='commentText' > <em> Maybe it is silly, but @manpacks is my FAVORITE SAAS service that I pay for. Socks as a Service, amirite? </em> </p>
      <p className='username'> <strong>-@alexknowshtml</strong></p>
      </div>
    </div>
  )
}

export default Comments;
