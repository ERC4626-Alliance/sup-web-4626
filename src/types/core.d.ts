export declare type SupDicChain = "Fantom" | "Polygon" | "Avalanche" | "Ethereum" | "BSC" | "Binance";

export declare type SupDicChainData = {
  chainId: number;
  name: SupDicChain;
  isL1: boolean;
  icon: string;
  superformEnabled: boolean;
  refuel: {
    sendingEnabled: boolean;
    receivingEnabled: boolean;
  };
  currency: {
    address: string;
    icon: string;
    name: string;
    symbol: string;
    decimals: number;
    minNativeCurrencyForGas: string;
  };
  explorers: string[];
  rpcs: string[];
  gasPrice?: {
    fast?: {
      gasPrice: BigNumber;
      estimatedSeconds: number;
    },
    normal?: {
      gasPrice: BigNumber;
      estimatedSeconds: number;
    },
    slow?: {
      gasPrice: BigNumber;
      estimatedSeconds: number;
    }
  }
}

/**
 * Fetch the list of currently supported chains with the meta/container/token & usage data
 *
 * @api {{GET}} /supported/chains
 */
export interface ResponseSupportedChains {
  chainId: Networkish[];
  name: Array<Networkish | SupWeb3NetworkNames>;
  isL1: boolean[];
  icon: string[];
  refuel: {
    sendingEnabled: boolean;
    receivingEnabled: boolean;
  }[];
  currency: SupWeb3Currency[];
  rpcs: string[][];
  explorers: string[][];
  superformEnabled: boolean[];
}
