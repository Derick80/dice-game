import { nanoid } from 'nanoid';

import { Player } from './types';


export const createNewPlayer = (player?: Partial<Player>): Player => {
    const { userName = '' } = player || {}
    return {
        id: nanoid(),
        userName,
    }
}