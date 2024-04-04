// reference: https://dev.to/mindactuate/scroll-to-anchor-element-with-react-router-v6-38op
import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

function ScrollToAnchor() {
  const location = useLocation();
  const lastHash = useRef("");
  const intervalId = useRef(undefined);

  // listen to location change using useEffect with location as dependency
  // https://jasonwatmore.com/react-router-v6-listen-to-location-route-change-without-history-listen
  useEffect(() => {
    if (location.hash) {
      lastHash.current = location.hash.slice(1); // safe hash for further use after navigation
    }

    if (lastHash.current) {
      intervalId.current = setInterval(() => {
        const element = document.getElementById(lastHash.current);
        if (element) {
          element?.scrollIntoView({ behavior: "smooth", block: "start" });
          lastHash.current = "";

          clearInterval(intervalId.current);
          intervalId.current = undefined;
        }
      }, 500);
    }
  }, [location]);

  return null;
}

export default ScrollToAnchor;