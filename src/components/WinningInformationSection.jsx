import React from 'react'
import game1 from "../images/game1.webp"
import game2 from "../images/game2.webp"
import game3 from "../images/game3.webp"
import game4 from "../images/game4.png"
import game5 from "../images/game5.webp"
import game6 from "../images/game6.webp"
import boy1 from "../images/boy1.jpg"
import boy2 from "../images/boy2.jpg"
import boy3 from "../images/boy3.jpg"
import girl1 from "../images/girl1.jpg"
import girl2 from "../images/girl2.jpg"
import girl3 from "../images/girl3.jpg"
export default function WinningInformationSection() {
  return (
    <div className="winning-information-section">
          <div className="winning-information-section-top">
            <h2>Winning Information</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non porro dicta, eaque eius cum laboriosam quos ullam recusandae saepe quae corporis, mollitia obcaecati consequuntur dolorem deserunt repellendus quia quidem libero!</p>
          </div>
          <div className="winning-information-section-bottom">
            <div className="common-winner-card">
              <img src={girl1} alt="" />
              <h5>riya****2303</h5>
              <img src={game3} alt="" />
              <div className="common-winner-card-price">
                <h4>Winning Price</h4>
                <h6>Rs. 12,99900/-</h6>
              </div>
            </div>
            <div className="common-winner-card">
              <img src={boy1} alt="" />
              <h5>sach***2303</h5>
              <img src={game3} alt="" />
              <div className="common-winner-card-price">
                <h4>Winning Price</h4>
                <h6>Rs. 12,99900/-</h6>
              </div>
            </div>
            <div className="common-winner-card">
              <img src={girl2} alt="" />
              <h5>jyot****2303</h5>
              <img src={game3} alt="" />
              <div className="common-winner-card-price">
                <h4>Winning Price</h4>
                <h6>Rs. 12,99900/-</h6>
              </div>
            </div>
            <div className="common-winner-card">
              <img src={boy2} alt="" />
              <h5>same****2303</h5>
              <img src={game3} alt="" />
              <div className="common-winner-card-price">
                <h4>Winning Price</h4>
                <h6>Rs. 12,99900/-</h6>
              </div>
            </div>
            <div className="common-winner-card">
              <img src={girl3} alt="" />
              <h5>gayat****2303</h5>
              <img src={game3} alt="" />
              <div className="common-winner-card-price">
                <h4>Winning Price</h4>
                <h6>Rs. 12,99900/-</h6>
              </div>
            </div>
            <div className="common-winner-card">
              <img src={boy3} alt="" />
              <h5>chun****2303</h5>
              <img src={game3} alt="" />
              <div className="common-winner-card-price">
                <h4>Winning Price</h4>
                <h6>Rs. 12,99900/-</h6>
              </div>
            </div>
          </div>
        </div>
  )
}
