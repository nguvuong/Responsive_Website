import React from 'react'
import "./Header.css"

const Header = () => {
    return (
        <header>
            <div className='wrapper'>

                {/* cta: call to action */}
                <div className='cta'>

                    <p className='course-name'>Sound Design Masterclass</p>
                    <h1>Learn The Art of Sound Design</h1>
                    <a href='#' className='demo-btn'>
                        Demo Lesson
                    </a>
                </div>



            </div>

        </header>
    )
}

export default Header