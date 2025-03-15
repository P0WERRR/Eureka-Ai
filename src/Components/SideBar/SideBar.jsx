import React, { useContext, useState } from 'react'
import { assets } from '../../assets/assets'
import './SideBar.css'
import { Context } from '../../Context/Context';

const SideBar = () => {
  const [extended, setExtended] = useState(false);
  const { onSent, prevPrompts, setRecentPrompt, newChat } = useContext(Context)

  const loadPrompt = async (prompt) => {
    setRecentPrompt(prompt)
    await onSent(prompt)
  }

  return (
    <>
      <div className='sidebar'>
        <div className='top'>
          <img className='menu' onClick={() => setExtended(prev => !prev)} src={assets.menu_icon} alt="" />
          <div onClick={() => newChat()} className='new-chat'>
            <img className='icon' src={assets.plus_icon} alt="" />
            {extended ? <p>New Chat</p> : null}
          </div>

          {extended ?
            <div className='recent'>
              <p className='recent-title' style={{ color: '#282828' }}>Recent</p>
              {prevPrompts.map((item, index) => {
                return (
                  <div key={index} onClick={() => loadPrompt(item)} className='recent-entry'>
                    <img className='icon' src={assets.message_icon} alt="" />
                    <p>{item.slice(0, 18)}...</p>
                  </div>
                )
              })}
            </div> : null}
        </div>

        {/* Bottom */}
        <div className='bottom'>
          {/* bottom-item */}
          <div className='bottom-item recent-entry'>
            <img className='icon' src={assets.question_icon} alt="" />
            {extended ? <p>Help</p> : null}
          </div>
          {/* bottom-item */}
          <div className='bottom-item recent-entry'>
            <img className='icon' src={assets.history_icon} alt="" />
            {extended ? <p>Activity</p> : null}
          </div>
          {/* bottom-item */}
          <div className='bottom-item recent-entry'>
            <img className='icon' src={assets.setting_icon} alt="" />
            {extended ? <p>Settings</p> : null}
          </div>
        </div>
      </div>
    </>
  )
}

export default SideBar