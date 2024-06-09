import './App.css'
export function TwitterFollowCard({userName, name, isFollowing}){
    return (
        <article className="tw-followCard">
        <header className="tw-followCard-header">
            <img className="tw-followCard-avatar" src={`https://unavatar.io/${userName}`} alt="El avatar de midudev" />
            <div className="tw-followCard-info">
                <strong className="tw-followCard-infoUserName">{name    }</strong>
                <span >@{userName}</span>
            </div>
        </header>
        <aside>
            <button className="tw-followCard-button">
                Seguir
            </button>
        </aside>
    </article>
    )
}