import { Player, PlayerAccount } from '../index.ts'

export interface PlayerDataStore {
   addPlayerAccount(playerAccount: PlayerAccount): Promise<void>
   createPlayer(player: Player): Promise<string>
   doesPlayerExist(userName: string): Promise<boolean>
   getAccessTokenForPlayer(playerId: string): Promise<string | undefined>
   getPlayer(playerId: string | undefined): Promise<Player | undefined>
   getPlayerAccount(playerId: string): Promise<PlayerAccount | undefined>
   getPlayerAccountForName(username: string): Promise<PlayerAccount | undefined>
   setPlayerAccessToken(playerId: string, accessToken: string): Promise<void>
}
