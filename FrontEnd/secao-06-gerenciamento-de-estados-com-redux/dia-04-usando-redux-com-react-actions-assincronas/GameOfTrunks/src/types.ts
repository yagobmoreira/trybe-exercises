import { AnyAction } from "redux"
import { ThunkDispatch } from 'redux-thunk'

export type CharacterType = {
  name: string,
  gender: string,
  culture: string,
  born: string,
  died: string,
  titles: string[], 
  aliases: string[],
  allegiances: string[],
}

export type StateType = {
  isFetching: boolean,
  characters: CharacterType[],
  error: string,
}

export type Dispatch = ThunkDispatch<StateType, null, AnyAction>