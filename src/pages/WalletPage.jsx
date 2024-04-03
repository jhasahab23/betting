import React from 'react'
import "../css/page css/WalletPage.css"
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import WalletIcon from '@mui/icons-material/Wallet';
import DescriptionIcon from '@mui/icons-material/Description';
import HistoryIcon from '@mui/icons-material/History';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import game1 from "../images/game1.png"
import game2 from "../images/game2.png"
import game3 from "../images/game3.png"
import game5 from "../images/game5.png"
import game6 from "../images/game6.png"
export default function WalletPage() {
    return (
        <>
            <div className="wallet-page-header">
                <h2>Wallet</h2>
                <div className="wallet-page-header-middle">
                    <AccountBalanceWalletIcon className='wallet-icon' />
                    <h3>₹ 0.00</h3>
                    <p>Total Balance</p>
                </div>
                <div className="wallet-page-header-bottom">
                    <div className="amount-card">
                        <h3>0</h3>
                        <p>Total Amount</p>
                    </div>
                    <div className="amount-card">
                        <h3>0</h3>
                        <p>Total Deposit Amount</p>
                    </div>
                </div>
            </div>

            <div className="wallet-page-second-section-parent">
                <div className="wallet-page-second-section-box">
                    <div className="wallet-page-second-section-box-top">
                        <div className="circular-progress-bar-card">
                            <div style={{ width: 100, height: 100 }} className='circular-progress-bar'>
                                <CircularProgressbar value={10} text={10} />
                            </div>
                            <h3>₹ 10.00</h3>
                            <p>Main Wallet</p>
                        </div>
                        <div className="circular-progress-bar-card">
                            <div style={{ width: 100, height: 100 }} className='circular-progress-bar'>
                                <CircularProgressbar value={40} text={40} />
                            </div>
                            <h3>₹ 40.00</h3>
                            <p>3rd Party Wallet</p>
                        </div>
                    </div>
                    <div className="wallet-page-second-section-box-middle">
                        <a href="#" className="btn-a">Main Wallet Transfer</a>
                    </div>
                    <div className="wallet-page-second-section-box-bottom">
                        <div className="wallet-page-second-section-box-bottom-card">
                            <div className="wallet-page-second-section-box-bottom-card-icon-box">
                                <AccountBalanceWalletIcon />
                            </div>
                            <p>Deposit</p>
                        </div>
                        <div className="wallet-page-second-section-box-bottom-card">
                            <div className="wallet-page-second-section-box-bottom-card-icon-box">
                                <WalletIcon />
                            </div>
                            <p>Withdraw</p>
                        </div>
                        <div className="wallet-page-second-section-box-bottom-card">
                            <div className="wallet-page-second-section-box-bottom-card-icon-box">
                                <DescriptionIcon />
                            </div>
                            <p>Deposit History</p>
                        </div>
                        <div className="wallet-page-second-section-box-bottom-card">
                            <div className="wallet-page-second-section-box-bottom-card-icon-box">
                                <HistoryIcon />
                            </div>
                            <p>Withdrawl History</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="wallet-page-third-section">
                <div className="wallet-page-third-section-card">
                    <h3>0.00</h3>
                    <p>Game Name</p>
                    <img src={game1} alt="" />
                </div>
                <div className="wallet-page-third-section-card">
                    <h3>0.00</h3>
                    <p>Game Name</p>
                    <img src={game2} alt="" />
                </div>
                <div className="wallet-page-third-section-card">
                    <h3>0.00</h3>
                    <p>Game Name</p>
                    <img src={game3} alt="" />
                </div>
                <div className="wallet-page-third-section-card">
                    <h3>0.00</h3>
                    <p>Game Name</p>
                    <img src={game5} alt="" />
                </div>
                <div className="wallet-page-third-section-card">
                    <h3>0.00</h3>
                    <p>Game Name</p>
                    <img src={game6} alt="" />
                </div>
                <div className="wallet-page-third-section-card">
                    <h3>0.00</h3>
                    <p>Game Name</p>
                    <img src={game1} alt="" />
                </div>
                <div className="wallet-page-third-section-card">
                    <h3>0.00</h3>
                    <p>Game Name</p>
                    <img src={game2} alt="" />
                </div>
                <div className="wallet-page-third-section-card">
                    <h3>0.00</h3>
                    <p>Game Name</p>
                    <img src={game3} alt="" />
                </div>
                <div className="wallet-page-third-section-card">
                    <h3>0.00</h3>
                    <p>Game Name</p>
                    <img src={game5} alt="" />
                </div>
                <div className="wallet-page-third-section-card">
                    <h3>0.00</h3>
                    <p>Game Name</p>
                    <img src={game6} alt="" />
                </div>
            </div>
        </>
    )
}
