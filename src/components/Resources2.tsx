import { linksResources } from "../lib/data";
import TweetEmbed from "react-tweet-embed";
import Container from "./Container";
import AtomTitle from "./Atom/Title";

const Resources2 = () => {
  return (
    <div className="bg-gradient-to-r from-pink-700 to-pink-900 w-full text-center py-16">
      <AtomTitle alignText="center" inverted={true}>Tweets about EIP-4626</AtomTitle>
      <Container>
        <ul className="grid grid-cols-1 md:grid-col-2 lg:grid-cols-3 gap-8 mt-8">
          {linksResources.tweets!.map((item: { href: string; name: string; tweetId: string; }) => (<li key={item.name} className="singleTweet">
            <TweetEmbed tweetId={item.tweetId}/>
          </li>))}
        </ul>
      </Container>
    </div>
  );
};
export default Resources2;
