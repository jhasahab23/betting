import React, { useState } from 'react'
import "../css/page css/ActivityPage.css"
import depositBanner from "../images/first-deposit-banner.png"
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import WalletIcon from '@mui/icons-material/Wallet';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import giftCard from "../images/gift-card-img.png"
import bonusCard from "../images/bonus-card-img.png"
import bx1 from "../images/bx1.png"
import bx2 from "../images/bx2.png"
import bx3 from "../images/bx3.png"
import bx4 from "../images/bx4.png"
export default function ActivityPage() {
    return (
       <>
        <div className="avtivity-page-header">
            <h2>BalajiBet</h2>
            <h3>Activity</h3>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor sit nisi eveniet repellat commodi, accusamus unde distinctio perspiciatis dolores! Autem doloremque corrupti error inventore, corporis at atque explicabo! Est, voluptas?</p>
        </div>
        <div className="activity-page-second-section">
            <div className="activity-page-second-section-card">
                <div className="activity-page-second-section-card-icon">
                    <MilitaryTechIcon className='activity-card-icon'/>
                </div>
                <h6>Activity Reward</h6>
            </div>
            <div className="activity-page-second-section-card">
                <div className="activity-page-second-section-card-icon">
                    <GroupAddIcon className='activity-card-icon'/>
                </div>
                <h6>Invitation Bonus</h6>
            </div>
            <div className="activity-page-second-section-card">
                <div className="activity-page-second-section-card-icon">
                    <WalletIcon className='activity-card-icon'/>
                </div>
                <h6>Betting Rebate</h6>
            </div>
            <div className="activity-page-second-section-card">
                <div className="activity-page-second-section-card-icon">
                    <EmojiEventsIcon className='activity-card-icon'/>
                </div>
                <h6>Super Jackpot</h6>
            </div>
        </div>

        <div className="activity-page-third-section">
            <div className="activity-page-third-section-card">
                <img src={giftCard} alt="" />
                <h3>Gifts</h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis assumenda veniam ipsum laborum quidem suscipit ex quam accusamus ducimus corporis, ratione nihil nemo quas aut fugit pariatur ipsam quaerat. Nostrum.</p>
            </div>
            <div className="activity-page-third-section-card">
                <img src={bonusCard} alt="" />
                <h3>Attendance Bonus</h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis assumenda veniam ipsum laborum quidem suscipit ex quam accusamus ducimus corporis, ratione nihil nemo quas aut fugit pariatur ipsam quaerat. Nostrum.</p>
            </div>
        </div>

        <div className="banner-section">
            <div className="banner-card">
                <img src={depositBanner} alt="" />
                <h3>New Member first deposit banner</h3>
            </div>
            <div className="banner-card">
                <img src={bx1} alt="" />
                <h3>BalajiBet Official Channel</h3>
            </div>
            <div className="banner-card">
                <img src={bx3} alt="" />
                <h3>Real-Time Rebate</h3>
            </div>
            <div className="banner-card">
                <img src={bx4} alt="" />
                <h3>Super Jackpot</h3>
            </div>
            <div className="banner-card">
                <img src={bx2} alt="" />
                <h3>Youtube Creative Video</h3>
            </div>
        </div>
       </>
    )
}
