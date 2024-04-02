import React from 'react'
import "../css/page css/ActivityPage.css"
import landingImg from "../images/activity-header-img.png"
import giftCard from "../images/gift-card-img.png"
import bonusCard from "../images/bonus-card-img.png"
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import PaidIcon from '@mui/icons-material/Paid';
import SavingsIcon from '@mui/icons-material/Savings';
import depositBanner from "../images/first-deposit-banner.png"
export default function ActivityPage() {
    return (
        <div className='activity-page'>
            <div className="activity-page-header">
                <div className="activity-page-landing">
                    <div className="activity-page-landing-left">
                        <h1><span>Activity</span></h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, minus. Repellat quam asperiores explicabo praesentium doloribus rerum sed accusantium sint tempora deserunt perferendis, odio numquam ullam voluptate unde ad! Asperiores!</p>
                        <a href="#" className="btn-a">Explore Now</a>
                    </div>
                    {/* <div className="activity-page-landing-right">
                        <img src={landingImg} alt="" />
                    </div> */}
                </div>
                {/* <hr /> */}
                <div className="activy-page-header-bottom">
                    <div className="activity-small-icon">
                        <EmojiEventsIcon/>
                        <p>Activity Reward</p>
                    </div>
                    <div className="activity-small-icon">
                        <GroupAddIcon/>
                        <p>Invitation Bonus</p>
                    </div>
                    <div className="activity-small-icon">
                        <PaidIcon/>
                        <p>Betting Rebate</p>
                    </div>
                    <div className="activity-small-icon">
                        <SavingsIcon/>
                        <p>Super Jackpot</p>
                    </div>
                </div>
            </div>
            <div className="activity-page-second-section">
                <div className="activity-page-second-section-card">
                    <img src={giftCard} alt="" />
                    <h3>Gifts</h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos, debitis! Dolor perspiciatis veniam, saepe eum, sequi voluptatibus autem provident sapiente delectus qui ipsa laborum suscipit repellendus beatae, temporibus iure exercitationem.</p>
                </div>
                <div className="activity-page-second-section-card">
                    <img src={bonusCard} alt="" />
                    <h3>Attendance Bonus</h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos, debitis! Dolor perspiciatis veniam, saepe eum, sequi voluptatibus autem provident sapiente delectus qui ipsa laborum suscipit repellendus beatae, temporibus iure exercitationem.</p>
                </div>
            </div>
            <div className="first-deposit-banner">
                <img src={depositBanner} alt="" />
            </div>
            <div className="offer-section"></div>
        </div>
    )
}
