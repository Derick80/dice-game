import React, { useState, useEffect } from "react";
import { GameContext } from '../../utils/context/gameContext';
import { createNewPlayer } from '../../utils/Player';
//version local storage key to prevent stale data with app changes
const LOCAL_STORAGE_KEY = "game_v1.0.0";
export default function GameContainer () {
    const localGame = localStorage.getItem(LOCAL_STORAGE_KEY);
    const [players, setPlayers] = useState(
        localGame
            ? JSON.parse(localGame)
            : Array(2)
                .fill(null)
                .map(() => createNewPlayer())
    );

    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(players));
    }, [JSON.stringify(players)]); // eslint-disable-line react-hooks/exhaustive-deps
    return (
        <GameContext.Provider
            value={ {
                usePlayers: [players, setPlayers],
            } }
        >


        </GameContext.Provider>

    )
}
