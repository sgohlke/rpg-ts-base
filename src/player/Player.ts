import { Unit } from '../index.ts'

export interface Player {
   playerId: string
   name: string
   addUnit(unit: Unit): number
   getNumberOfUnits(): number
   getUnit(joinNumber: number): Unit | undefined
   getUnits(): ReadonlyArray<Unit>
}
