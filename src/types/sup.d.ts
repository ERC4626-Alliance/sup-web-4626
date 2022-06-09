export declare interface SupApiExploreResponse {
  chain: string[];
  contract_address: string[];
  is_vault: boolean[];
  name: string[];
  protocol: string[];
  vault_id: number[];
  timestamp: string[];
}

export declare type SupVaultList = {
  vault_id?: number; name: string; contract_address: string; is_vault: boolean; protocol: string; chain: string; created_at: string | moment.Moment;
}[]
