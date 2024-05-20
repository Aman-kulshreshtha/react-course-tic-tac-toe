import { useState } from "react";

export default function Player({name, symbol}) {

    const [isEditing, setIsEditing] = useState(false);
    const [playerName, setPlayerName] = useState(name);

    function handleEditClick() {
        setIsEditing((isEditing)=>!isEditing);
    }

    function handleNameChange(input) {
        // console.log(element);
        setPlayerName(input.target.value);
    }

    // return player details
    return (<li>
        <span className="player">
           { (isEditing)?
           <input type="text" value={playerName} onChange={handleNameChange} />
           :
            <span className="player-name">
                {playerName}
            </span>
            }
          <span className="player-symbol">{symbol}</span>
          </span>
        <button onClick={handleEditClick} > {(isEditing)?"Save" : "Edit"}</button>
        </li>);
}