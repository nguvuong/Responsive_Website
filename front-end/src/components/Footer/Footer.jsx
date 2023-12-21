import React from 'react'
import "./Footer.css"
import { facebook, youtube, twitter } from '../../assets'

const Footer = () => {
    return (
        <footer className='black'>
            <div className='wrapper'>
                <div className='content-container'>
                    <div className='links'>
                        <a href="#" className='logo'>
                            Sound<span className='red'>DZign</span>
                        </a>
                        <div className='social-icons'>
                            <a href="">
                                <img src={facebook} alt="" />
                            </a>
                            <a href="">
                                <img src={youtube} alt="" />
                            </a>
                            <a href="">
                                <img src={twitter} alt="" />
                            </a>
                        </div>
                        <div className='copyright'>
                            This website is designed by Vuong & GTCoding  © 2023
                        </div>
                    </div>
                    <div className='links'>
                        <h3>Quick Links</h3>
                        <ul>
                            <li>
                                <a href="#">Blog</a>
                            </li>
                            <li>
                                <a href="#">Privacy Policy</a>
                            </li>
                        </ul>
                    </div>
                    <div className='links'>
                        <h3>Contact Us</h3>
                        <ul>
                            <li>
                                <a href="#">nguyenvuongquoc8@gmail.com</a>
                            </li>
                            <li>
                                <a href="#">+1 999 999 9999</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer