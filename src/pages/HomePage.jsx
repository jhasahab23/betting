import React from 'react'
import "../css/page css/HomePage.css"
import giftBox from "../images/gift-box.png"
import landingVideo from "../videos/landing-video-2.mp4"
import logo from "../images/logo.png"
import adultPoster from "../images/adult-banner.png"

import WinningInformationSection from '../components/WinningInformationSection'
import WinnerToday from '../components/WinnerToday'
import TrendingGames from '../components/TrendingGames'
export default function HomePage() {
  return (
    <div className='home-page'>

        <div className="home-page-landing-section">
          <video src={landingVideo} autoPlay muted loop></video>
          <div className="landing-section-content">
            <img src={logo} alt="" />
            <h3>Welcome To</h3>
            <h1><span>BALAJI</span>BET</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore excepturi impedit harum cupiditate doloribus distinctio eos, similique cumque provident molestiae sint numquam repellat a adipisci, sapiente iusto debitis quo quasi architecto quos consequuntur reiciendis. Fuga deleniti voluptatum quae sit voluptatibus.</p>
          </div>
        </div>

      <TrendingGames/>
        <div className="home-page-intro-section">
          <div className="home-page-intro-section-left">
            <h2>The Best Platform To Earn <span> Money!!</span></h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum esse corporis, expedita sed aut architecto quas a dicta explicabo, nobis quam ab dolore laboriosam veritatis. Repellat, ipsa consectetur dignissimos libero voluptatum laborum ipsum totam provident quibusdam quasi corrupti suscipit accusamus!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint maxime voluptatibus itaque ab impedit officia.</p>
          </div>
          <div className="home-page-intro-section-right">
            <img src={giftBox} alt="" />
          </div>
        </div>


        <WinningInformationSection/>

        <div className="insist-account-section">
          <img src={adultPoster} alt="" />
          <div className="insist-account-section-content">
            <h2>Go To <span>Account</span></h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, expedita adipisci! Voluptate beatae autem asperiores illum laudantium laborum ut, consequuntur sapiente saepe aspernatur magnam molestias quidem expedita numquam quas dolorum vitae illo accusamus sed, ratione debitis nam unde nihil provident! Quo facere deleniti, quis vitae earum quae repellat? Tenetur, expedita!</p>
            <a href="#" className="btn-a link-a">Account</a>
          </div>
        </div>

        <WinnerToday/>
        
    </div>
  )
}
