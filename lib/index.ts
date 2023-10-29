export interface Configuration {
  id?: string
  enableKickCache: boolean;
  kickCacheDays: number;
  kickCacheHours: number;
  name:string;
  kickCacheServerMessage: string;
  kickCacheUserMessage: string;
  defaultChannel: string;
  serverId: string;
  triggers: Array<Trigger>;
  users: Array<User>;
}

export interface User {
  id?: string,
  isSecret: boolean,
  userName: string,
  discordUserId: string
}

export interface Trigger {
  id?: string;
  name: string;
  messageDelete: boolean;
  sendRandomResponse: boolean;
  ignoreCooldown: boolean;
  triggerWords: Array<string>;
  reactEmotes: Array<string>;
  triggerResponses: Array<string>;
}

export interface Status {
  id: string;
  status: string;
  type?: unknown;
}