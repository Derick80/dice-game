export type Player = {
    id: string
    userName: string

}

export type Game = {
    usePlayers: [Player[], React.Dispatch<React.SetStateAction<Player[]>>];
};


export type RollResult = {
    pool: number
}

export type InitialDiceTypes = {
    id: number
    sides: number
    times: number
    type: string
    diceImage: string

}


// export type Round = {
//     results: Array<PlayerResult>;
// };
