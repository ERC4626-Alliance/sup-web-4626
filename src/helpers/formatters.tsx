import Image from "next/image";
import { FaFileContract } from "react-icons/fa";

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
  return (
    <div className="m-0 flex flex-auto items-center justify-start p-0">
      <Image
        layout="raw"
        unoptimized={true}
        width="20"
        height="20"
        src={icon}
        alt={chain}
        className="mr-1 h-6 object-scale-down"
      />
      {chain[0].toUpperCase() + chain.slice(1)}
    </div>
  );
}

export function mapAddressWithScan(address: string, chain: string) {
  let href = undefined as undefined | string;
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
        href = `https://snowtrace.io/token/${address}#readContract`;
        break;
    }
  }
  return href !== undefined ? (
    <a
      href={href}
      target="_blank"
      className="group inline-flex items-center whitespace-nowrap font-medium text-pink-500 underline decoration-from-font underline-offset-4 md:no-underline md:hover:text-pink-700 md:hover:underline"
      rel="noopener noreferrer"
    >
      <code className="select-none rounded-lg bg-transparent p-0 font-mono tracking-tighter text-pink-500 md:group-hover:text-pink-700">
        {address}
      </code>
      <FaFileContract className="ml-1.5 h-4 md:opacity-25 md:group-hover:opacity-100" />
    </a>
  ) : (
    address
  );
}
