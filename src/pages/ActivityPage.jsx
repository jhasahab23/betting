import React, { useState } from 'react'
import "../css/page css/ActivityPage.css"
import depositBanner from "../images/first-deposit-banner.png"
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import WinningInformationSection from '../components/WinningInformationSection'
import WinnerToday from '../components/WinnerToday'
import game1 from "../images/game1.png"
import game2 from "../images/game2.png"
import game3 from "../images/game3.png"
import game4 from "../images/game5.png"
import game5 from "../images/game6.png"
import mg1 from "../images/mg1.png"
import mg2 from "../images/mg2.png"
import mg3 from "../images/mg3.png"
import mg4 from "../images/mg4.png"
import mg5 from "../images/mg5.png"
import mg6 from "../images/mg6.png"
import mg7 from "../images/mg7.png"
import mg8 from "../images/mg8.png"
import mg9 from "../images/mg9.png"
import mg10 from "../images/mg10.png"
import WidgetsIcon from '@mui/icons-material/Widgets';
export default function ActivityPage() {
    const [lotteryGames , setLotteryGames] = useState(true)
    const [miniGames , setMiniGames] = useState(false)
    const [popularGames , setPopularGames] = useState(false)
    const [slotGames , setSlotGames] = useState(false)
    const [fishingGames , setFishingGames] = useState(false)

    const displayLotteryGames = () => {
        setLotteryGames(true)
        setMiniGames(false)
        setPopularGames(false)
        setSlotGames(false)
        setFishingGames(false)
    }
    const displayMiniGames = () => {
        setLotteryGames(false)
        setMiniGames(true)
        setPopularGames(false)
        setSlotGames(false)
        setFishingGames(false)
    }
    const displayPopularGames = () => {
        setLotteryGames(false)
        setMiniGames(false)
        setPopularGames(true)
        setSlotGames(false)
        setFishingGames(false)
    }
    const displaySlotGames = () => {
        setLotteryGames(false)
        setMiniGames(false)
        setPopularGames(false)
        setSlotGames(true)
        setFishingGames(false)
    }
    const displayFishingGames = () => {
        setLotteryGames(false)
        setMiniGames(false)
        setPopularGames(false)
        setSlotGames(false)
        setFishingGames(true)
    }

    return (
       <>
        <div className="avtivity-page-header">
            <img src={depositBanner} alt="" />
        </div>
        <div className="notification-box">
            <VolumeUpIcon/>
            <h5>Welcome to 91 CLUB! We have a variety of games, promos and bonus for you to enjoy, so</h5>
            <a href="#" className="btn-a">Details</a>
        </div>
        <div className="multigame-section">
            <div className="multigame-section-left">
                <div className="multigame-section-left-card" onClick={displayLotteryGames}>
                    <img src={game1} alt="" />
                    <h6>Lottery</h6>
                </div>
                <div className="multigame-section-left-card" onClick={displayMiniGames}>
                    <img src={game2} alt="" />
                    <h6>Mini Games</h6>
                </div>
                <div className="multigame-section-left-card" onClick={displayPopularGames}>
                    <img src={game3} alt="" />
                    <h6>Popular</h6>
                </div>
                <div className="multigame-section-left-card" onClick={displaySlotGames}>
                    <img src={game4} alt="" />
                    <h6>Slots</h6>
                </div>
                <div className="multigame-section-left-card" onClick={displayFishingGames}>
                    <img src={game5} alt="" />
                    <h6>Fishing</h6>
                </div>
            </div>
            {lotteryGames && <div className="multigame-section-right">
                 <div className="multigame-section-right-card">
                    <div className="multigame-section-right-card-content">
                        <h3>Win Go</h3>
                        <p>Guess The Number</p>
                        <p>Green/Red/Purple To Win</p>
                    </div>
                    <div className="multigame-section-right-card-img">
                        <img src={mg1} alt="" />
                    </div>
                </div>
                <div className="multigame-section-right-card">
                    <div className="multigame-section-right-card-content">
                        <h3>K3</h3>
                        <p>Guess The Number</p>
                        <p>Green/Red/Purple To Win</p>
                    </div>
                    <div className="multigame-section-right-card-img">
                        <img src={mg2} alt="" />
                    </div>
                </div>
                <div className="multigame-section-right-card">
                    <div className="multigame-section-right-card-content">
                        <h3>5D</h3>
                        <p>Guess The Number</p>
                        <p>Green/Red/Purple To Win</p>
                    </div>
                    <div className="multigame-section-right-card-img">
                        <img src={mg3} alt="" />
                    </div>
                </div>
                <div className="multigame-section-right-card">
                    <div className="multigame-section-right-card-content">
                        <h3>Trx Win</h3>
                        <p>Guess The Number</p>
                        <p>Green/Red/Purple To Win</p>
                    </div>
                    <div className="multigame-section-right-card-img">
                        <img src={mg4} alt="" />
                    </div>
                </div>
                <div className='view-all-btn'>
                    <WidgetsIcon/>
                    <h3>View All</h3>
                </div>
            </div>}
            {miniGames && <div className="multigame-section-right">
                 <div className="multigame-section-right-card">
                    <div className="multigame-section-right-card-content">
                        <h3>Mini Game 1</h3>
                        <p>Guess The Number</p>
                        <p>Green/Red/Purple To Win</p>
                    </div>
                    <div className="multigame-section-right-card-img">
                        <img src={mg5} alt="" />
                    </div>
                </div>
                <div className="multigame-section-right-card">
                    <div className="multigame-section-right-card-content">
                        <h3>Mini game 2</h3>
                        <p>Guess The Number</p>
                        <p>Green/Red/Purple To Win</p>
                    </div>
                    <div className="multigame-section-right-card-img">
                        <img src={mg6} alt="" />
                    </div>
                </div>
                <div className="multigame-section-right-card">
                    <div className="multigame-section-right-card-content">
                        <h3>Mini Game 3</h3>
                        <p>Guess The Number</p>
                        <p>Green/Red/Purple To Win</p>
                    </div>
                    <div className="multigame-section-right-card-img">
                        <img src={mg7} alt="" />
                    </div>
                </div>
                <div className="multigame-section-right-card">
                    <div className="multigame-section-right-card-content">
                        <h3>Mini Game 4</h3>
                        <p>Guess The Number</p>
                        <p>Green/Red/Purple To Win</p>
                    </div>
                    <div className="multigame-section-right-card-img">
                        <img src={mg8} alt="" />
                    </div>
                </div>
                <div className='view-all-btn'>
                    <WidgetsIcon/>
                    <h3>View All</h3>
                </div>
            </div>}
            {popularGames && <div className="multigame-section-right">
                 <div className="multigame-section-right-card">
                    <div className="multigame-section-right-card-content">
                        <h3>Popular 1</h3>
                        <p>Guess The Number</p>
                        <p>Green/Red/Purple To Win</p>
                    </div>
                    <div className="multigame-section-right-card-img">
                        <img src={mg9} alt="" />
                    </div>
                </div>
                <div className="multigame-section-right-card">
                    <div className="multigame-section-right-card-content">
                        <h3>Popular2</h3>
                        <p>Guess The Number</p>
                        <p>Green/Red/Purple To Win</p>
                    </div>
                    <div className="multigame-section-right-card-img">
                        <img src={mg10} alt="" />
                    </div>
                </div>
                <div className="multigame-section-right-card">
                    <div className="multigame-section-right-card-content">
                        <h3>Popular 3</h3>
                        <p>Guess The Number</p>
                        <p>Green/Red/Purple To Win</p>
                    </div>
                    <div className="multigame-section-right-card-img">
                        <img src={mg1} alt="" />
                    </div>
                </div>
                <div className="multigame-section-right-card">
                    <div className="multigame-section-right-card-content">
                        <h3>Popular 4</h3>
                        <p>Guess The Number</p>
                        <p>Green/Red/Purple To Win</p>
                    </div>
                    <div className="multigame-section-right-card-img">
                        <img src={mg2} alt="" />
                    </div>
                </div>
                <div className='view-all-btn'>
                    <WidgetsIcon/>
                    <h3>View All</h3>
                </div>
            </div>}
            {slotGames && <div className="multigame-section-right">
                 <div className="multigame-section-right-card">
                    <div className="multigame-section-right-card-content">
                        <h3>Slot game 1</h3>
                        <p>Guess The Number</p>
                        <p>Green/Red/Purple To Win</p>
                    </div>
                    <div className="multigame-section-right-card-img">
                        <img src={mg3} alt="" />
                    </div>
                </div>
                <div className="multigame-section-right-card">
                    <div className="multigame-section-right-card-content">
                        <h3>Slot game 2</h3>
                        <p>Guess The Number</p>
                        <p>Green/Red/Purple To Win</p>
                    </div>
                    <div className="multigame-section-right-card-img">
                        <img src={mg4} alt="" />
                    </div>
                </div>
                <div className="multigame-section-right-card">
                    <div className="multigame-section-right-card-content">
                        <h3>Slot game 3</h3>
                        <p>Guess The Number</p>
                        <p>Green/Red/Purple To Win</p>
                    </div>
                    <div className="multigame-section-right-card-img">
                        <img src={mg5} alt="" />
                    </div>
                </div>
                <div className="multigame-section-right-card">
                    <div className="multigame-section-right-card-content">
                        <h3>Slot game 4</h3>
                        <p>Guess The Number</p>
                        <p>Green/Red/Purple To Win</p>
                    </div>
                    <div className="multigame-section-right-card-img">
                        <img src={mg6} alt="" />
                    </div>
                </div>
                <div className='view-all-btn'>
                    <WidgetsIcon/>
                    <h3>View All</h3>
                </div>
            </div>}
            {fishingGames && <div className="multigame-section-right">
                 <div className="multigame-section-right-card">
                    <div className="multigame-section-right-card-content">
                        <h3>Fishing 1</h3>
                        <p>Guess The Number</p>
                        <p>Green/Red/Purple To Win</p>
                    </div>
                    <div className="multigame-section-right-card-img">
                        <img src={mg7} alt="" />
                    </div>
                </div>
                <div className="multigame-section-right-card">
                    <div className="multigame-section-right-card-content">
                        <h3>Fishing 2</h3>
                        <p>Guess The Number</p>
                        <p>Green/Red/Purple To Win</p>
                    </div>
                    <div className="multigame-section-right-card-img">
                        <img src={mg8} alt="" />
                    </div>
                </div>
                <div className="multigame-section-right-card">
                    <div className="multigame-section-right-card-content">
                        <h3>Fishing 3</h3>
                        <p>Guess The Number</p>
                        <p>Green/Red/Purple To Win</p>
                    </div>
                    <div className="multigame-section-right-card-img">
                        <img src={mg9} alt="" />
                    </div>
                </div>
                <div className="multigame-section-right-card">
                    <div className="multigame-section-right-card-content">
                        <h3>Fishing 4</h3>
                        <p>Guess The Number</p>
                        <p>Green/Red/Purple To Win</p>
                    </div>
                    <div className="multigame-section-right-card-img">
                        <img src={mg10} alt="" />
                    </div>
                </div>
                <div className='view-all-btn'>
                    <WidgetsIcon/>
                    <h3>View All</h3>
                </div>
            </div>}
        </div>
        <WinningInformationSection/>
        <WinnerToday/>
       </>
    )
}
