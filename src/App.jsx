import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'
export function App(){

    return (
        <section className='App'>
            <TwitterFollowCard  userName ={'midudev'} name={'Miguel Angel Duran'} />
            <TwitterFollowCard  userName ={'picuu'} name={'Carlos Capo'} />
            <TwitterFollowCard  userName={'maxdroncode'} name={'Max Dron'}  />
            <TwitterFollowCard  userName={'ulisescastell'} name={'Ulisses Castell'}  />
            <TwitterFollowCard  userName={'david_garcia'} name={'David Garcia'}  />
        </section>
    )
}