import { PlayerData, Unit } from '../index.ts'

export interface Player extends PlayerData {
   addUnit(unit: Unit): number
   getNumberOfUnits(): number
   getUnit(joinNumber: number): Unit | undefined
   getUnits(): ReadonlyArray<Unit>
}
