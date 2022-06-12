import Image from "next/image";

export function mapIcon(chain: string) {
  let icon = "";
  if (chain.toLowerCase().search("bnb") !== -1) {
    icon = "images/icons/bnb.svg";
  } else {
    switch (chain.toLowerCase()) {
      case "polygon":
        icon = "images/icons/polygon.svg";
        break;
      case "fantom":
        icon = "images/icons/fantom.svg";
        break;
      case "ethereum":
        icon = "images/icons/ethereum.svg";
        break;
      case "avalanche":
        icon = "images/icons/avalanche.svg";
        break;
    }
  }
  return (<div className="flex flex-auto p-0 m-0 items-center justify-start">
      <Image layout="raw" unoptimized={true} width="20" height="20" src={icon} alt={chain} className="h-6 mr-1 object-scale-down" />
      {chain[0].toUpperCase() + chain.slice(1)}
    </div>);
}

export function mapAddressWithScan(address: string, chain: string) {
  let href = undefined;
  if (chain.toLowerCase().search("bnb") !== -1) {
    href = `https://explorer.binance.org/address/${address}`;
  } else {
    switch (chain.toLowerCase()) {
      case "polygon":
        href = `https://polygonscan.com/address/${address}#code`;
        break;
      case "fantom":
        href = `https://ftmscan.com/address/${address}`;
        break;
      case "ethereum":
        href = `https://etherscan.io/address/${address}#code`;
        break;
      case "avalanche":
        href = `https://avascan.info/blockchain/c/address/${address}/contract`;
        break;
    }
  }
  return href !== undefined ? (<a href={href} target="_blank" className="link-cta text-sm whitespace-nowrap underline md:no-underline text-pink-700 md:hover:underline underline-offset-4" rel="noopener noreferrer">{address}</a>) : address;
}
