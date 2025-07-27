import { useState } from 'react';

export default function LikePanel() {

    const [myState, setMyState] = useState({
        likes: 0,
    })

    function onLike() {
        setMyState({likes: myState.likes + 1})
    }

    function onResetLikes() {
        setMyState({likes: 0})
    }

    return (
        <div>
            <h2>Like My Library</h2>
            <span>Likes: <b>{myState.likes}</b></span>&nbsp;
            <button onClick={() => onLike()}>Like</button>
            <button onClick={() => onResetLikes()}>Reset like count</button>
        </div>
    )
}