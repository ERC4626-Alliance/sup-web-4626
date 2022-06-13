import { useEffect, useState } from "react";

export default function Tweet({
  tweetID
}: TweetProps) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if ((window as any).twttr) {
      alert(1);
      (window as any).twttr.widgets.createTweet(tweetID, document.getElementById(tweetID), {
        align: "center", conversation: "none", dnt: true, theme: "dark"
      }).then(() => setIsLoading(false));
    }
  }, [tweetID]);

  return (<>
    <div className="w-full animate-fadeIn" id={tweetID}>
      {isLoading && <p>LOADING</p>}
    </div>
  </>);
};

interface TweetProps {
  tweetID: string,
}
