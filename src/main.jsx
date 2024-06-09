import React from 'react'
import ReactDOM from 'react-dom/client'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <section className='App'>
  <TwitterFollowCard userName ={'midudev'} name={'Miguel Angel Duran'} isFollowing={true}/>
  <TwitterFollowCard userName ={'picuu'} name={'Carlos Capo'} isFollowing={true}/>
  <TwitterFollowCard userName={'maxdroncode'} name={'Max Dron'} isFollowing={false} />
  <TwitterFollowCard userName={'ulisescastell'} name={'Ulisses Castell'} isFollowing={false} />
  </section>
      
)
