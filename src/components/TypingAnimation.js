import { useEffect, useRef } from "react";
import Typed from "typed.js";

const TypingAnimation = ({ data }) => {
  // Create Ref element.
  const el = useRef(null);
const stringList = [
  "I am a Developer Advocate",
  "I am DevRel",
  "I love IoT",
  "I love open-source",
  "I love to build useless IoT projects",
  "I teach people how to use technology",
  "I love dogs ... probably more than people",
];
  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: data
        ? data
        : stringList, // Strings to display
      typeSpeed: 150,
      backSpeed: 100,
      backDelay: 150,
      smartBackspace: false,
      loop: true,
      showCursor: false,
    });

    // Destropying
    return () => {
      typed.destroy();
    };
  }, []);
  return <p ref={el}></p>;
};
export default TypingAnimation;
