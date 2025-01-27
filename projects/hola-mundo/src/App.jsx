import { useState } from 'react'
import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App () {
    const [name, setName] = useState('tauner')

    console.log('render with name: ', name)

    return (
        <section className="App">
        <TwitterFollowCard userName={name}>
        Latrell Hewitt Pinzon
        </TwitterFollowCard>

        <TwitterFollowCard 
        userName="ley">
        Leyla Pinzon Jimenez
        </TwitterFollowCard>

        <TwitterFollowCard
        userName="charlie">
        Carlos Hewitt Campos
        </TwitterFollowCard>

        <button onClick={() => setName('naomyhew')}>
        Cambio nombre
        </button>
    </section>
    )
}


