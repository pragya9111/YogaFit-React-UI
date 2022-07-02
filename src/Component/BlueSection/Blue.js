import React from 'react'
import './Blue.css'

function Blue() {
    return (
        <div className='bluediv'>
            <div className='parts'>
                <div className='part'>
                    <h1>Contact Info</h1>
                    <p>888 Broadway
                        New York, NY, 18813
                        info@bhavana.com
                        123-123-1234</p>
                    <button>OPEN MAP</button>
                </div>
                <div className='part'>
                    <h1>Open Hours</h1>
                    <p>Monday 11am-7pm
                        Tuesday-Friday 11am-8pm
                        Saturday 10am-6pm
                        Sunday 11am-6pm</p>
                    <button>BOOK NOW</button>
                </div>
                <div className='part'>
                    <h1>Latest Posts</h1>
                    <ul>
                        <li>Yoga’s Power to Cure Depression</li>
                        <li>Yoga Mistakes To Avoid</li>
                        <li>6 Yoga Poses For Lower Back Pain</li>
                        <li>The Best Yoga Poses To Relieve Soreness</li>
                    </ul>
                    <button>VIEW MORE</button>
                </div>
            </div>
        </div>
    )
}

export default Blue