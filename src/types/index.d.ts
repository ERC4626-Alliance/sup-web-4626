
export declare type SupSingleAdopter = {
  src: string;
  title: string;
  url: {
    web?: string;
    app?: string;
    about?: string;
    twitter?: string;
    github?: string;
  };
  extra?: {
    unoptimized?: boolean;
  };
};

export declare type SupSingleVault = {
  vault_id?: number;
  name: string;
  contract_address: string;
  is_vault: boolean;
  protocol: string;
  chain: string;
  created_at: string;
}[];