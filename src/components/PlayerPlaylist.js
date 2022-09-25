import React from 'react'
import './PlayerPlaylist.css'

const playlist = [
    {
        id: 1,
        title: 'The Best of Me',
        artist: 'David Gray',
        album: 'White Ladder',
        duration: '4:20',
    },
    {
        id: 2,
        title: 'The Best of Me',
        artist: 'David Gray',
        album: 'White Ladder',
        duration: '4:20',
    },
    {
        id: 3,
        title: 'The Best of Me',
        artist: 'David Gray',
        album: 'White Ladder',
        duration: '4:20',
    },
    {
        id: 4,
        title: 'The Best of Me',
        artist: 'David Gray',
        album: 'White Ladder',
        duration: '4:20',
    },
]

export default function PlayerPlaylist() {
  return (
    <div className='player-playlist-container'>
        <div className='player-playlist-header'>
            <div className='playlist-image-card'>
            </div>
            <div className='playlist-body'>
                <p>PLAYLIST</p>
                <h1>YouTube Mix</h1>
            </div>
        </div>

        <div className='playlist-list'>
            <div className='playlist-list-id'>
                #
            </div>
            <div className='playlist-list-title'>
                TITLE
            </div>
            <div className='playlist-list-album'>
                ALBUM
            </div>
            <div className='playlist-list-duration'>
                DURATION
            </div>
        </div>

        <div className='playlist-list-container'>

            {
                playlist.map((item) => {
                    return (
                        <div className='playlist-list'>
                            <div className='playlist-list-id'>
                                {item.id}
                            </div>
                            <div className='playlist-list-title'>
                                {item.title}
                            </div>
                            <div className='playlist-list-album'>
                                {item.album}
                            </div>
                            <div className='playlist-list-duration'>
                                {item.duration}
                            </div>
                        </div>
                    )
                })
            }
            {
                playlist.map((item) => {
                    return (
                        <div className='playlist-list'>
                            <div className='playlist-list-id'>
                                {item.id}
                            </div>
                            <div className='playlist-list-title'>
                                {item.title}
                            </div>
                            <div className='playlist-list-album'>
                                {item.album}
                            </div>
                            <div className='playlist-list-duration'>
                                {item.duration}
                            </div>
                        </div>
                    )
                })
            }
            {
                playlist.map((item) => {
                    return (
                        <div className='playlist-list'>
                            <div className='playlist-list-id'>
                                {item.id}
                            </div>
                            <div className='playlist-list-title'>
                                {item.title}
                            </div>
                            <div className='playlist-list-album'>
                                {item.album}
                            </div>
                            <div className='playlist-list-duration'>
                                {item.duration}
                            </div>
                        </div>
                    )
                })
            }

        </div>

    </div>
  )
}
