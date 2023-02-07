import Image from "next/image";
import { FaFileContract } from "react-icons/fa";

/**
 * @package @superform-xyz/sup-dapp-yield
 *
 * Inc.correct processing for possibly `false` or `undefined` values
 * @example ```html
 *  <span classNames={classNames("regular-class", isOpened && "class-opened")}/>
 * ```
 *
 *
 * @param {<string | boolean | undefined>[]} classes - array of classes to be added to the component
 * @return {string} - composed string of classes
 */
export function classNames(...classes: Array<string | boolean | undefined>) {
  return classes.filter(item => {
    if (typeof item === "boolean" || item === undefined) {
      return false;
    }
    return !["false", "undefined", ""].includes(item as string);
  }).join(" ");
}

/**
 * @package @superform-xyz/sup-dapp-yield
 *
 * @param {string} protocol - Superform's protocol name (e.g. "Superform" or "Superform/Yield")
 * @return {string} - protocol
 */
export function formatProtocolName(protocol: string) {
  return protocol.replace(/^Superform\//gu, "");
}

export function mapIcon(chain: string | number, showText = true) {
  let icon = "";
  let chainName = typeof chain === "string" ? chain.toLowerCase() : "";
  switch (`${chain}`.toLowerCase()) {
    default:
      return <></>;
    case "56":
    case "binance":
    case "bsc":
      chainName = "Binance";
      icon = "images/icons/bnb.svg";
      break;
    case "137":
    case "polygon":
      chainName = "Polygon";
      icon = "images/icons/polygon.svg";
      break;
    case "250":
    case "fantom":
      chainName = "Fantom";
      icon = "images/icons/fantom.svg";
      break;
    case "1":
    case "ethereum":
      chainName = "Ethereum";
      icon = "images/icons/eth.svg";
      break;
    case "43114":
    case "avalanche":
      chainName = "Avalanche";
      icon = "images/icons/avalanche.svg";
      break;
    case "42161":
    case "arbitrum":
      chainName = "Arbitrum";
      icon = "images/icons/arbitrum.svg";
      break;
    case "10":
    case "optimism":
      chainName = "Optimism";
      icon = "images/icons/optimism.svg";
      break;
  }
  return (
    <div className="flex items-center justify-start space-x-1">
      <Image unoptimized={true} width="20" height="20" src={icon} alt={chainName} className="mr-1 h-[16px] w-auto object-scale-down" />
      <span className={classNames(!showText && "hidden")}>{chainName}</span>
    </div>
  );
}

export function mapAddressWithScan(address: string, chain: string) {
  let href = undefined as undefined | string;
  switch (chain.toLowerCase()) {
    case "polygon":
      href = `https://polygonscan.com/address/${address}#readContract`;
      break;
    case "56":
    case "binance":
    case "bsc":
      href = `https://bscscan.com/address/${address}#readContract`;
      break;
    case "fantom":
      href = `https://ftmscan.com/address/${address}#readContract`;
      break;
    case "ethereum":
      href = `https://etherscan.io/address/${address}#readContract`;
      break;
    case "arbitrum":
      href = `https://arbiscan.io/address/${address}#readContract`;
      break;
    case "avalanche":
      href = `https://snowtrace.io/address/${address}#readContract`;
      break;
    case "optimism":
      href = `https://optimistic.etherscan.io/address/${address}#readContract`;
      break;
  }
  return href !== undefined ? (
    <a
      href={href}
      target="_blank"
      className="group inline-flex items-center whitespace-nowrap font-medium text-pink-500 underline decoration-from-font underline-offset-4 md:no-underline md:hover:text-pink-700 md:hover:underline"
      rel="noopener noreferrer"
    >
      <code className="select-none rounded-lg bg-transparent p-0 font-mono tracking-tighter text-pink-500 md:group-hover:text-pink-700">{address}</code>
      <FaFileContract className="ml-1.5 h-4 md:opacity-25 md:group-hover:opacity-100" />
    </a>
  ) : (
    address
  );
}