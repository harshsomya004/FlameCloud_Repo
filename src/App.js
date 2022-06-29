import "./styles.css";
import { css } from "@emotion/css";
import NavBar from "./Components/NavBar";
import WelcomeComp from "./Components/WelcomeComp";

export default function App() {
  return (
    <>
      <NavBar />
      <div
        className={css`
          display: flex;
          flex-direction: row;
          justify-items: center;
          align-items: center;
          margin-top: 10%;
          margin-left: 8%;
        `}
      >
        <WelcomeComp />
      </div>
    </>
  );
}
