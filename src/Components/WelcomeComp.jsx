import React from "react";
import { css } from "@emotion/css";
import BlueStar from "../Images/Blue_Star.png";
export default function WelcomeComp() {
  return (
    <>
      <div
        className={css`
          display: flex;
          flex-direction: column;
          justify-items: center;
          align-items: center;
        `}
      >
        <div
          className={css`
            display: flex;
            flex-direction: row;
            justify-items: flex-start;
            align-items: center;
            align-self: flex-start;
          `}
        >
          <div
            className={css`
              display: flex;
              flex-direction: row;
              justify-items: flex-start;
              align-items: center;
            `}
          >
            <div
              className={css`
                font-weight: 700;
                font-size: 18px;
                letter-spacing: 0.5px;
                color: #ffffff;
                opacity: 0.5;
                font-family: sans-serif;
                white-space: nowrap;
              `}
            >
              {" "}
              WELCOME TO COINCARD
            </div>
            <div
              className={css`
                opacity: 0.5;
                border-bottom: 1px solid #ffffff;
                width: 75px;
                height: 0px;
                display: flex;
                flex: 1;
                margin-left: 2%;
              `}
            />
          </div>

          <img
            alt=""
            src={BlueStar}
            className={css`
              width: 37.5px;
              height: 37.5px;
              margin-left: 25%;
            `}
          />
        </div>
        <div
          className={css`
            display: flex;
            flex-direction: row;
            justify-items: flex-start;
            align-items: center;
            flex: 1;
          `}
        >
          <div>
            <div
              className={css`
                font-size: 76px;
                color: white;
                font-family: sans-serif;
                letter-spacing: 0.5px;
              `}
            >
              <img
                alt=""
                src={BlueStar}
                className={css`
                  width: 25px;
                  height: 25px;
                  position: absolute;
                  left: 6.5%;
                  opacity: 0.5;
                `}
              />
              Get a <span style={{ color: "#4873FF" }}>VCC</span> in
            </div>
            <div
              className={css`
                font-size: 76px;
                color: white;
                font-family: sans-serif;
                letter-spacing: 0.5px;
              `}
            >
              Just <span style={{ color: "#4873FF" }}>5 Minutes</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
