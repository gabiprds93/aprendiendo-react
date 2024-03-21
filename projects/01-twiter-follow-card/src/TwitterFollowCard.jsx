import { useState } from 'react'

export default function TwitterFollowCard({
  userName,
  children,
  initialIsFollowing,
}) {
  const [isFollowing, setIsFollowing] = useState(initialIsFollowing)

  const text = isFollowing ? 'Siguiendo' : 'Seguir'
  const buttonClass = isFollowing
    ? 'tw-followCard-button is-following'
    : 'tw-followCard-button'

  const handleClick = () => {
    setIsFollowing(!isFollowing)
  }

  return (
    <article className='tw-followCard'>
      <header className='tw-followCard-header'>
        <img
          alt='El avatar de midudev'
          className='tw-followCard-avatar'
          src={`https://unavatar.io/${userName}`}
        />

        <div className='tw-followCard-info'>
          <strong>{children}</strong>
          <span className='tw-followCard-infoUserName'>@{userName}</span>
        </div>
      </header>

      <aside>
        <button className={buttonClass} onClick={handleClick}>
          <span className='tw-followCard-text'>{text}</span>
          <span className='tw-followCard-stopFollow'>Dejar de seguir</span>
        </button>
      </aside>
    </article>
  )
}
