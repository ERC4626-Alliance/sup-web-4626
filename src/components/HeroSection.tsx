import React from "react";
// @ts-ignore
import superCharged from "@/assets/imgs/superCharged.png";
// @ts-ignore
import stars4626 from "@/assets/imgs/stars4626.png";
import Image from "next/image";

export default class HeroSection extends React.Component {
  render() {
    return (
      <div className=" relative overflow-hidden pt-16 pb-32">
        <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-pink-50"/>
        <div className="relative">
          <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8">
            <div className="mx-auto max-w-xl px-4 sm:px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0">
              <div>
                <div className="mt-6">
                  <h2 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                    <span className="-mb-1 block bg-gradient-to-r from-pink-500 to-pink-900 bg-clip-text pb-1 text-transparent">
                      WHAT IS ERC4626 ?
                    </span>{" "}
                  </h2>{" "}
                  <p className="mt-4 text-lg text-slate-700">
                    Tokenized Vaults have a lack of standardization leading to
                    diverse implementation details.Some various examples include
                    lending markets, aggregators, and intrinsically interest
                    bearing tokens.This makes integration difficult at the
                    aggregator or plugin layer for protocols which need to
                    conform to many standards, and forces each protocol to
                    implement their own adapters which are error prone and waste
                    development resources.A standard for tokenized Vaults will
                    lower the integration effort for yield - bearing vaults,
                    while creating more consistent and robust implementation
                    patterns.{" "}
                  </p>{" "}
                </div>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div className="mt-12 sm:mt-16 lg:mt-0">
              <div className="-mr-48 pl-4 sm:pl-6 md:-mr-16 lg:relative lg:m-0 lg:h-full lg:px-0">
                <Image
                  className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                  src={superCharged}
                  layout="raw"
                  alt="superCharged"
                />
              </div>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
        </div>
        {" "}
        <div className="mt-24">
          <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8">
            <div className="mx-auto max-w-xl px-4 sm:px-6 lg:col-start-2 lg:mx-0 lg:max-w-none lg:py-32 lg:px-0">
              <div>
                <div className="mt-6">
                  <h2 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                    <span className="-mb-1 block bg-gradient-to-r from-pink-500 to-pink-900 bg-clip-text pb-1 text-transparent">
                      ERC4626 ALL STARS{" "}
                    </span>{" "}
                  </h2>{" "}
                  <p className="mt-4 text-lg text-gray-500">
                    Some of the biggest🧠 in DeFi are behind ERC462.Ornare
                    iaculis bibendum malesuada faucibus lacinia
                    porttitor.Pulvinar laoreet sagittis viverra duis.In
                    venenatis sem arcu pretium pharetra at.Lectus viverra dui
                    tellus ornare pharetra.{" "}
                  </p>{" "}
                </div>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div className="mt-12 sm:mt-16 lg:col-start-1 lg:mt-0">
              <div className="-ml-48 pr-4 sm:pr-6 md:-ml-16 lg:relative lg:m-0 lg:h-full lg:px-0">
                <Image
                  className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none"
                  src={stars4626}
                  alt="stars4626"
                />
              </div>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
        </div>
        {" "}
      </div>
    );
  }
}
