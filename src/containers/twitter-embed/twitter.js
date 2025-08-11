import React, { Suspense, useContext } from "react";
import "./twitter.scss";
import Loading from "../loading/Loading";
import { TwitterTimelineEmbed } from "react-twitter-embed";
import { twitterDetails } from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";

const renderLoader = () => <Loading />;
const cantDisplayError =
  "<div class='centerContent'><h2>Can't load? Check privacy protection settings</h2></div>";

function timeOut() {
  setTimeout(function () {
    const el = document.getElementById("twitter");
    if (el && !el.innerHTML.includes("iframe")) {
      el.innerHTML = cantDisplayError;
    }
  }, 10000);
}

const widthScreen = window.screen.width;

export default function Twitter() {
  const { isDark } = useContext(StyleContext);

  if (!twitterDetails.display) return null;

  if (!twitterDetails.userName) {
    console.error("Twitter username for twitter section is missing");
    return null;
  }

  return (
    <Suspense fallback={renderLoader()}>
      <div className="tw-main-div" id="twitter">
        <div className="centerContent">
          <TwitterTimelineEmbed
            sourceType="profile"
            screenName={twitterDetails.userName} // e.g. "tech_mua"
            options={{ height: 400, width: widthScreen }}
            placeholder={renderLoader()}
            autoHeight={false}
            borderColor="#fff"
            key={isDark ? "1" : "2"}
            theme={isDark ? "dark" : "light"}
            noFooter
            onLoad={timeOut}
          />
        </div>
      </div>
    </Suspense>
  );
}
