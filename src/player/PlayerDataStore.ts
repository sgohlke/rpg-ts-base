import { GeneralError, PlayerAccount, PlayerData } from '../index.ts'

export interface PlayerDataStore {
   addPlayerAccount(
      playerAccount: PlayerAccount,
   ): Promise<string | GeneralError>
   createPlayer(player: PlayerData): Promise<string | GeneralError>
   doesPlayerExist(userName: string): Promise<boolean | GeneralError>
   getAccessTokenForPlayer(
      playerId: string,
   ): Promise<string | GeneralError | undefined>
   getPlayer(
      playerId: string | undefined,
   ): Promise<PlayerData | GeneralError | undefined>
   getPlayerAccount(
      playerId: string,
   ): Promise<PlayerAccount | GeneralError | undefined>
   getPlayerAccountForName(
      username: string,
   ): Promise<PlayerAccount | GeneralError | undefined>
   setPlayerAccessToken(
      playerId: string,
      accessToken: string,
   ): Promise<string | GeneralError>
}
