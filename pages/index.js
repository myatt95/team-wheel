import React, {useState, useEffect} from 'react'
import Wheel from "../components/Wheel"
import Sound from "react-sound"


const people = ['Oliver', 'Fiona', 'Sana', 'Mike', 'Andy'];

const songs = ['donkey.mp3', "Jingle-Bells.mp3", "Santa.mp3", "Wham.mp3"];

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

export default function App() {

    const [status, setStatus] = useState(Sound.status.STOPPED);
    const [randomSong, setRandomSong] = useState(songs[getRandomIntInclusive(0, songs.length - 1)]);

    useEffect(() => {
        setRandomSong(songs[getRandomIntInclusive(0, songs.length - 1)])
    }, [status]);

    return (
        <div className="App">
            {typeof window !== "undefined" && (
                <Sound url={`${window.location.href}${randomSong}`} playStatus={status}/>
            )}
            <h1>Who's the chosen one? 🤞</h1>
            <Wheel items={people} onClick={() => setStatus(Sound.status.PLAYING)}/>
            <br/><br/>
            <button onClick={() => setStatus(Sound.status.STOPPED)}>stop</button>
        </div>
    );
}
