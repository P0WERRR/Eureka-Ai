import React, { useContext, useEffect, useState } from 'react'
import { assets } from '../../assets/assets'
import './main.css'
import { Context } from '../../Context/Context';

const Main = () => {
  const [darkMode, setDarkMode] = useState(false);
  const body = document.querySelector('body');

  useEffect(() => {
    if (darkMode) {
      body.classList.add('dark-mode');
    } else {
      body.classList.remove('dark-mode');
    }
  }, [darkMode]);

  const {onSent,recentPrompt,showResult,loading,resultData,setInput,input} = useContext(Context);



  
  return (
    <div className='main'> {/* Main */}
      {/* nav */}
      <div className='nav'>
        <p className={darkMode ? 'dark-mode' : ''}>Eureka</p>
        <div className='icons'>
          <svg style={{width:'20px'}} onClick={() => setDarkMode(prev => !prev)} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M297.2 248.9C311.6 228.3 320 203.2 320 176c0-70.7-57.3-128-128-128S64 105.3 64 176c0 27.2 8.4 52.3 22.8 72.9c3.7 5.3 8.1 11.3 12.8 17.7c0 0 0 0 0 0c12.9 17.7 28.3 38.9 39.8 59.8c10.4 19 15.7 38.8 18.3 57.5L109 384c-2.2-12-5.9-23.7-11.8-34.5c-9.9-18-22.2-34.9-34.5-51.8c0 0 0 0 0 0s0 0 0 0c-5.2-7.1-10.4-14.2-15.4-21.4C27.6 247.9 16 213.3 16 176C16 78.8 94.8 0 192 0s176 78.8 176 176c0 37.3-11.6 71.9-31.4 100.3c-5 7.2-10.2 14.3-15.4 21.4c0 0 0 0 0 0s0 0 0 0c-12.3 16.8-24.6 33.7-34.5 51.8c-5.9 10.8-9.6 22.5-11.8 34.5l-48.6 0c2.6-18.7 7.9-38.6 18.3-57.5c11.5-20.9 26.9-42.1 39.8-59.8c0 0 0 0 0 0s0 0 0 0s0 0 0 0c4.7-6.4 9-12.4 12.7-17.7zM192 128c-26.5 0-48 21.5-48 48c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-44.2 35.8-80 80-80c8.8 0 16 7.2 16 16s-7.2 16-16 16zm0 384c-44.2 0-80-35.8-80-80l0-16 160 0 0 16c0 44.2-35.8 80-80 80z"/></svg>
          <img src={assets.user_icon} alt="" />
        </div>
      </div>
      {/* main-container */}
      <div className='main-container'>
        
        {!showResult
        ?<>
        <div className='greet'>
          <p><span className='dev'>Hello, Dev. </span></p>
          <p>How can I help you today?</p>
        </div>
        {/* cards */}
        <div className='cards'>
          <div className='card' onClick={()=>onSent("Suggest beautiful places to see an upcoming road trip")}>
            <p>Suggest beautiful places to see an upcoming road trip</p>
            <img src={assets.compass_icon} alt="" />
          </div>
          <div className='card' onClick={()=>onSent("Brefly summarize this concept: upon planning")}>
            <p>Brefly summarize this concept: upon planning</p>
            <img src={assets.bulb_icon} alt="" />
          </div>
          <div className='card' onClick={()=>onSent("BrainStorm team bonding activities for our work retreat")}>
            <p>BrainStorm team bonding activities for our work retreat</p>
            <img src={assets.message_icon} alt="" />
          </div>
          <div className='card' onClick={()=>onSent("Improve the readability of the following code")}>
            <p>Improve the readability of the following code</p>
            <img src={assets.code_icon} alt="" />
          </div>
        </div>
        </> : 
        <div className='result'>
            <div className='result-title'>
              <img src={assets.user_icon} alt="" />
              <p>{recentPrompt}</p>
            </div>
            <div className='result-data'>
              <img src={assets.gemini_icon} alt="" />
              {loading?
              <div className='loader'>
                <hr />
                <hr />
                <hr />
              </div>
              :
              <p dangerouslySetInnerHTML={{__html:resultData}}></p>}
              
              
            </div>
        </div>
        }


        

        <div className="main-bottom">
          <div className="search-box">
            <input onChange={(e)=>setInput(e.target.value)} value={input} type="text" placeholder='Enter a prompt here' />
            <div className='images'>
              <img src={assets.gallery_icon} alt="" />
              <img src={assets.mic_icon} alt="" />
              <img onClick={()=>onSent()} src={assets.send_icon} alt="" />
            </div>
          </div>
          <p className="bottom-info">
          Your personal assistant is here to help you with any queries or tasks. Just type your prompt and get started!

          </p>
        </div>
      </div>
    </div>
  )
}

export default Main