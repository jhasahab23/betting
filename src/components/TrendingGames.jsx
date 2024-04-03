import React from 'react'
import game1 from "../images/game1.webp"
import game2 from "../images/game2.webp"
import game3 from "../images/game3.webp"
import game4 from "../images/game4.png"
import game5 from "../images/game5.webp"
import game6 from "../images/game6.webp"
export default function TrendingGames() {
  return (
    <div className="home-page-lottery-section">
    <div className="home-page-lottery-section-top">
      <h2>Trending Games</h2>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident voluptas nam dolorem perferendis! Similique ex ad, rerum et alias voluptatem quis! Reprehenderit, sint corporis vero tempore quasi modi harum error?</p>
    </div>
    <div className="home-page-lottery-section-bottom">
      <div className="game-card">
        <img src={game1} alt="" />
        <h3>Fishing Pool</h3>
      </div>
      <div className="game-card">
        <img src={game2} alt="" />
        <h3>Sports</h3>
      </div>
      <div className="game-card">
        <img src={game3} alt="" />
        <h3>Hot</h3>
      </div>
      <div className="game-card">
        <img src={game4} alt="" />
        <h3>Lotto</h3>
      </div>
      <div className="game-card">
        <img src={game5} alt="" />
        <h3>777 Slots</h3>
      </div>
      <div className="game-card">
        <img src={game6} alt="" />
        <h3>Pool</h3>
      </div>
      <div className="game-card">
        <img src={game1} alt="" />
        <h3>Fishing Pool</h3>
      </div>
      <div className="game-card">
        <img src={game2} alt="" />
        <h3>Sports</h3>
      </div>
    </div>
  </div>
  )
}
