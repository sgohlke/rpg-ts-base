import { Unit } from '../index.ts'

export interface PlayerData {
   playerId: string
   name: string
   units: Array<Unit>
}
