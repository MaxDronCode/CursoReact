import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'
export function App(){

    return (
        <section className='App'>
            <TwitterFollowCard  initialIsFollowing={false} userName ={'midudev'} name={'Miguel Angel Duran'} />
            <TwitterFollowCard  initialIsFollowing={true} userName ={'picuu'} name={'Carlos Capo'} />
            <TwitterFollowCard  initialIsFollowing={false} userName={'maxdroncode'} name={'Max Dron'}  />
            <TwitterFollowCard  initialIsFollowing={true} userName={'ulisescastell'} name={'Ulisses Castell'}  />
            <TwitterFollowCard  initialIsFollowing={false} userName={'david_garcia'} name={'David Garcia'}  />
        </section>
    )
}