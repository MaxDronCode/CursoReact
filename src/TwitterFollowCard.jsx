import './App.css'
import { useState } from 'react'

export function TwitterFollowCard({userName, name, initialIsFollowing}){
    const [isFollowing, setIsFollowing] = useState(initialIsFollowing)
    const text = isFollowing ? 'Siguiendo' : 'Seguir'
    const buttonClassName = isFollowing
    ? 'tw-followCard-button is-following'
    : 'tw-followCard-button'
    const toggleFollow = () => {
        setIsFollowing(!isFollowing)
    }
    return (
        <article className="tw-followCard">
        <header className="tw-followCard-header">
            <img className="tw-followCard-avatar" src={`https://unavatar.io/${userName}`} alt="El avatar de midudev" />
            <div className="tw-followCard-info">
                <strong>{name}</strong>
                <span className='tw-followCard-infoUserName'>@{userName}</span>
            </div>
        </header>
        <aside>
            <button className={buttonClassName} onClick={toggleFollow}>
                {text}
            </button>
        </aside>
    </article>
    )
}