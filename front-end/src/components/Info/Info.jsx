import React from 'react'
import "./Info.css"
import { studenticon, videoicon, bgelement2 } from '../../assets'

const Info = () => {

    // clasName with color to set the background of this section
    return (
        <section id='info' className='dark-grey'>

            {/* wrapper class to have the fix width */}
            <div className='wrapper'>

                {/* flex attribute is in this class,  so that the components inside this tag will one next to each other */}
                <div className='content-container'>
                    <div className='info-content'>
                        <img src={studenticon} alt="" />
                        <div className='amount'>23,000+</div>
                        <div className='type'>Students</div>
                    </div>

                    <div className='info-content'>
                        <img src={videoicon} alt="" />
                        <div className='amount'>26 Hrs</div>
                        <div className='type'>Video Content</div>
                    </div>


                </div>

                <img className='bg-element-2' src={bgelement2} alt="" />

            </div>

        </section>
    )
}

export default Info