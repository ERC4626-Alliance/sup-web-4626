import AtomTitle from "@/components/Atom/Title";
import Container from "@/components/Container";
import { useEffect } from "react";

const Tweets = () => {
  return (
    <div className="w-full bg-gradient-to-r from-pink-700 to-pink-900 py-16 text-center">
      <AtomTitle alignText="center" inverted={true}>
        Tweets about EIP-4626
      </AtomTitle>
      <Container>
        <ul className="md:grid-col-2 mt-8 grid grid-cols-1 gap-8 lg:grid-cols-3">
          <li>
            <blockquote
              className="twitter-tweet  max-w-[70vw] md:max-w-none"
              data-dnt="true"
            >
              <p lang="en" dir="ltr">
                The ERC-4626 Tokenized Vault Standard is ready for final review
                😎
                <br />
                <br />
                Get your giga chad brains churning on how this standard will
                revolutionize DeFi 🧠
                <br />
                <br />
                Be sure to share any proposed changes on the thread:
                <a href="https://t.co/ArchwpUNn4">https://t.co/ArchwpUNn4</a>
                <br />
                <br />
                Here is a summary of the proposed design 👇
              </p>
              &mdash; Joey 💚’s ERC-4626 (@joey__santoro)
              <a href="https://twitter.com/joey__santoro/status/1481364987129917444?ref_src=twsrc%5Etfw">
                January 12, 2022
              </a>
            </blockquote>
          </li>
          <li>
            <blockquote
              className="twitter-tweet  max-w-[70vw] md:max-w-none"
              data-dnt="true"
            >
              <p lang="en" dir="ltr">
                You’ve heard of ERC-20s, ERC-721s and ERC-1155s
                <br />
                <br />
                Soon you shall know ERC-4626s
                <br />
                <br />
                The Tokenized Vault Standard (ERC-4626) is final. And the Great
                Vault Standardization begins now
                <br />
                <br />
                tl;dr 👇
              </p>
              &mdash; yearn (@iearnfinance)
              <a href="https://twitter.com/iearnfinance/status/1511444220850184197?ref_src=twsrc%5Etfw">
                April 5, 2022
              </a>
            </blockquote>
          </li>
          <li>
            <blockquote
              className="twitter-tweet max-w-[70vw] md:max-w-none"
              data-dnt="true"
            >
              <p lang="en" dir="ltr">
                ERC-4626 will be a huge game changer and 99% of
                <a href="https://twitter.com/hashtag/DeFi?src=hash&amp;ref_src=twsrc%5Etfw">
                  #DeFi
                </a>
                folks are sleeping on it. 🧐
                <br />
                <br />
                In short ERC-4626 is a Tokenized Vault Standard. <br />
                <br />
                Let&#39;s dive into it👇
              </p>
              &mdash; 0xSassun (@0xSassun)
              <a href="https://twitter.com/0xSassun/status/1522678605628719104?ref_src=twsrc%5Etfw">
                May 6, 2022
              </a>
            </blockquote>
          </li>
        </ul>
      </Container>
    </div>
  );
};
export default Tweets;
