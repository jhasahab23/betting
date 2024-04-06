import React from 'react'
import "../css/page css/PromotionPage.css"
import { Link } from 'react-router-dom'
import WalletIcon from '@mui/icons-material/Wallet';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import EditCalendarIcon from '@mui/icons-material/EditCalendar';
import PaidIcon from '@mui/icons-material/Paid';
import DescriptionIcon from '@mui/icons-material/Description';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import Diversity1Icon from '@mui/icons-material/Diversity1';
export default function PromotionPage() {
    return (
        <div className='promotion-page'>

            <div className="promotion-page-header">
                <h2>0</h2>
                <h3>Yesterday's Total Comission</h3>
                <p>Upgrade the level to increase commission income</p>
                <div className="promotion-page-table">
                    <div className="promotion-page-table-left APT-content">
                        <div className="APT-content-heading">
                            <PeopleAltIcon className='heading-icon'/>
                            <h3>Direct subordinates</h3>
                        </div>
                        <div className="APT-content-data">
                            <h3>0</h3>
                            <p>Number of Register</p>
                        </div>
                        <div className="APT-content-data">
                            <h3>0</h3>
                            <p>Deposit number</p>
                        </div>
                        <div className="APT-content-data">
                            <h3>0</h3>
                            <p>Deposit amount</p>
                        </div>
                        <div className="APT-content-data">
                            <h3>0</h3>
                            <p>Number of people making first deposit</p>
                        </div>
                    </div>
                    <div className="promotion-page-table-right APT-content">
                        <div className="APT-content-heading">
                            <Diversity1Icon className='heading-icon'/>
                            <h3>Team subordinates</h3>
                        </div>
                        <div className="APT-content-data">
                            <h3>0</h3>
                            <p>Number of Register</p>
                        </div>
                        <div className="APT-content-data">
                            <h3>0</h3>
                            <p>Deposit number</p>
                        </div>
                        <div className="APT-content-data">
                            <h3>0</h3>
                            <p>Deposit amount</p>
                        </div>
                        <div className="APT-content-data">
                            <h3>0</h3>
                            <p>Number of people making first deposit</p>
                        </div>
                    </div>
                </div>
            </div>

            <button className="btn-a">INVITATION LINK</button>

            <div className="promotion-page-third-section">
                <Link to="" className="promotion-page-third-section-card">
                    <div className="promotion-page-third-section-card-content">
                        <WalletIcon className='colored-icon' />
                        <p>Copy Invitation Code</p>
                    </div>
                    <div className="promotion-page-third-section-card-content">
                        <p>43634234235</p>
                        <ArrowForwardIosIcon />
                    </div>
                </Link>
                <Link to="" className="promotion-page-third-section-card">
                    <div className="promotion-page-third-section-card-content">
                        <EditCalendarIcon className='colored-icon' />
                        <p>Subordinate data</p>
                    </div>
                    <div className="promotion-page-third-section-card-content">
                        <ArrowForwardIosIcon />
                    </div>
                </Link>
                <Link to="" className="promotion-page-third-section-card">
                    <div className="promotion-page-third-section-card-content">
                        <PaidIcon className='colored-icon' />
                        <p>Commission detail</p>
                    </div>
                    <div className="promotion-page-third-section-card-content">
                        <ArrowForwardIosIcon />
                    </div>
                </Link>
                <Link to="" className="promotion-page-third-section-card">
                    <div className="promotion-page-third-section-card-content">
                        <DescriptionIcon className='colored-icon' />
                        <p>Invitation rules</p>
                    </div>
                    <div className="promotion-page-third-section-card-content">
                        <ArrowForwardIosIcon />
                    </div>
                </Link>
                <Link to="" className="promotion-page-third-section-card">
                    <div className="promotion-page-third-section-card-content">
                        <SupportAgentIcon className='colored-icon' />
                        <p>Agent line customer service</p>
                    </div>
                    <div className="promotion-page-third-section-card-content">
                        <ArrowForwardIosIcon />
                    </div>
                </Link>
            </div>

            <div className="promotion-page-forth-section">
                <div className="promotion-page-forth-section-first-row">
                    <WalletIcon />
                    <h3>Promotion Data</h3>
                </div>
                <div className="promotion-page-forth-section-second-row APFS-common-row">
                    <div className="APFS-common-row-left">
                        <h2>0</h2>
                        <p>This Week</p>
                    </div>
                    <div className="APFS-common-row-middle"></div>
                    <div className="APFS-common-row-right">
                        <h2>0</h2>
                        <p>Total Commission</p>
                    </div>
                </div>
                <div className="promotion-page-forth-section-third-row APFS-common-row">
                    <div className="APFS-common-row-left">
                        <h2>0</h2>
                        <p>direct subordinate</p>
                    </div>
                    <div className="APFS-common-row-middle"></div>
                    <div className="APFS-common-row-right">
                        <h2>0</h2>
                        <p>Total number of subordinates in the team</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
