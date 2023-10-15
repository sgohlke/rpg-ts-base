import { PlayerAccount, PlayerData } from '../index.ts'

export interface PlayerDataStore {
   addPlayerAccount(playerAccount: PlayerAccount): Promise<string>
   createPlayer(player: PlayerData): Promise<string>
   doesPlayerExist(userName: string): Promise<boolean>
   getAccessTokenForPlayer(playerId: string): Promise<string | undefined>
   getPlayer(playerId: string | undefined): Promise<PlayerData | undefined>
   getPlayerAccount(playerId: string): Promise<PlayerAccount | undefined>
   getPlayerAccountForName(username: string): Promise<PlayerAccount | undefined>
   setPlayerAccessToken(playerId: string, accessToken: string): Promise<void>
}
