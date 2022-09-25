import React from 'react'
import './Footer.css'
import { ReactComponent as PlayIcon } from '../assets/icons/playIcon.svg'
import { ReactComponent as PauseIcon } from '../assets/icons/pauseIcon.svg'
import { ReactComponent as PrevIcon } from '../assets/icons/prevIcon.svg'
import { ReactComponent as NextIcon } from '../assets/icons/nextIcon.svg'

export default function Footer() {
    const [isPlaying, setIsPlaying] = React.useState(false)
  return (
    <div className='footer-container'>
        <div className='player-controler'>
            <PrevIcon width={'32px'}/>
            {isPlaying ? <PauseIcon width={'32px'} onClick={() => setIsPlaying(false)}/> : <PlayIcon width={'32px'} onClick={() => setIsPlaying(true)}/>}
            <NextIcon width={'32px'}/>
        </div>
    </div>
  )
}
