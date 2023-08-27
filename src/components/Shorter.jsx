import { useContext } from "react";
import { ShorterContext } from "../hooks/useStateContext";
import ShorterInput from "./ShorterInput";
import LinkResult from "./LinkResult";
// import { stateContext } from "../hooks/useStateContext";

export default function Shorter() {
  // const { context, setContext } = useContext(stateContext);
  // const [urls, setUrls] = useState([context]);

  const { links } = useContext(ShorterContext);

  return (
    <section className="max-w-6xl p-10 mx-auto" id="shorter-section">
      <ShorterInput />
      <div>
        {links.map((link, index) => (
          <LinkResult link={link} key={index}></LinkResult>
        ))}
      </div>
    </section>
  );
}
