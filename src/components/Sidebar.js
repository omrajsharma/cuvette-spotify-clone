import React from 'react'
import './Sidebar.css'
import { ReactComponent as HomeIcon } from '../assets/icons/homeIcon.svg'
import { ReactComponent as SearchIcon } from '../assets/icons/searchIcon.svg'
import { ReactComponent as LibraryIcon } from '../assets/icons/libraryIcon.svg'

const yourPlaylist = [
    {
        id: 1,
        name: 'Discover Weekly',
    },
    {
        id: 2,
        name: 'Release Radar',
    },
    {
        id: 3,
        name: 'Your Top Songs',
    },
    {
        id: 4,
        name: 'Your Top Artists',
    },
    {
        id: 5,
        name: 'Recently Played',
    },
    {
        id: 6,
        name: 'Liked Songs',
    },
]

export default function Sidebar() {
  return (
    <div className='side-bar-container'>
        <div className='side-bar-items'>
            <HomeIcon width={'18px'} strokeWidth={'2px'} />
            Home
        </div>
        <div className='side-bar-items'>
            <SearchIcon width={'18px'} strokeWidth={'2px'} />
            Search
        </div>
        <div className='side-bar-items'>
            <LibraryIcon width={'18px'} strokeWidth={'2px'} />
            Your Library
        </div>
        <div className='side-options'>
            {
                yourPlaylist.map((item) => {
                    return (
                        <div className='side-bar-items' key={item.id}>
                            {item.name}
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}
