import React from 'react'
import boy1 from "../images/boy1.jpg"
import boy2 from "../images/boy2.jpg"
import boy3 from "../images/boy3.jpg"
import girl1 from "../images/girl1.jpg"
import girl2 from "../images/girl2.jpg"
import girl3 from "../images/girl3.jpg"
import firstWinner from "../images/first.png"
import secondWinner from "../images/second.png"
import thirdWinner from "../images/third.png"
export default function WinnerToday() {
  return (
    <div className="winner-section">
    <div className="winner-section-top">
      <h2>Top <span>Gainers</span> Today</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim natus facilis voluptates laudantium voluptatum necessitatibus perspiciatis nam nihil doloremque fugiat qui debitis corporis officia velit, repudiandae sed aspernatur dignissimos eaque.</p>
    </div>
    <div className="winner-section-bottom">
      <div className="winner-card" id="second-winner">
      <img src={secondWinner} alt="" />
        <img src={girl2} alt="" className='winner-image' />
        <h3>No. 2</h3>
        <h4>Rs. 95,000/-</h4>
      </div>
      <div className="winner-card" id="first-winner">
        <img src={firstWinner} alt="" />
        <img src={boy2} alt="" className='winner-image' />
        <h3>No. 1</h3>
        <h4>Rs. 99,000/-</h4>
      </div>
      <div className="winner-card" id="third-winner">
      <img src={thirdWinner} alt="" />
        <img src={girl3} alt="" className='winner-image' />
        <h3>No. 3</h3>
        <h4>Rs. 89,000/-</h4>
      </div>
    </div>
  </div>
  )
}
