import React, { useState } from 'react'
import "./Topics.css"
import { DAW, frequencies, mastering, mixing, mixingconsole, vocalsprocessing, bgelement1 } from "../../assets"

const Topics = () => {
    const [currentImage, setCurrentImage] = useState(frequencies);



    return (
        <section id='topics' className='black'>
            <div className='wrapper'>
                <h2>What will you learn?</h2>
                <div className='content-container'>
                    <ul className='topics-list'>
                        <li onMouseEnter={() => setCurrentImage(frequencies)}>What are frequencies?</li>
                        <li onMouseEnter={() => setCurrentImage(DAW)}>Using DAW</li>
                        <li onMouseEnter={() => setCurrentImage(vocalsprocessing)}>Vocals Processing</li>
                        <li onMouseEnter={() => setCurrentImage(mixing)}>Mixing</li>
                        <li onMouseEnter={() => setCurrentImage(mixingconsole)}>Mixing Console</li>
                        <li onMouseEnter={() => setCurrentImage(mastering)}>Mastering</li>
                    </ul>
                    <div className='topic-image'>
                        <img src={currentImage} alt="" />
                    </div>
                </div>
                <img src={bgelement1} className='bg-element-1' />

            </div>

        </section>
    )
}

export default Topics