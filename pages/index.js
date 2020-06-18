import React, {useState} from 'react'
import Wheel from "../components/Wheel"
import Sound from "react-sound"


const people = ['Oliver', 'Fiona', 'Sana', 'Mike', 'Kelly', 'Andy', 'JT'];

export default function App() {

    const [status, setStatus] = useState(Sound.status.STOPPED)

    return (
        <div className="App">
            {typeof window !== "undefined" && (
                <Sound url={`${window.location.href}Law-And-Order-Theme-Song.mp3`} playStatus={status}/>
            )}
            <h1>Who's the chosen one? 🤞</h1>
            <Wheel items={people} onClick={() => setStatus(Sound.status.PLAYING)}/>
            <br/><br/>
            <button onClick={() => setStatus(Sound.status.STOPPED)}>stop</button>
        </div>
    );
}
