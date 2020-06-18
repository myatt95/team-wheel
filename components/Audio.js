import React, {useEffect, useMemo} from "react";


export const Audio = ({ url, playing = false, onEnded, onUnmount }) => {

    const audio = useMemo(() => new Audio(url), [url])

    useEffect(() => {
        audio.addEventListener('ended', () => onEnded());

        if (playing) {
            audio.play()
        }

        audio.reset()

        return () => {
            audio.removeEventListener('ended', () => onUnmount());
        }
    }, [audio, playing])

    return <></>

}

export default Audio
