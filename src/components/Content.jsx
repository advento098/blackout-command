import { useEffect, useRef, useState } from "react";
import "../styles/Content.css";
export default function Content() {
  return (
    <div>
      <div className="title-container">
        <h4>NO POWER. NO MERCY. JUST SURVIVAL.</h4>
        <h1>
          BLACKOUT <br />
          <span>COMMAND</span>
        </h1>
      </div>
      <div className="bottom-panel">
        <div className="vignette"></div>
        <img
          src="./blackout-command/src/assets/character-model.svg"
          alt="soldier-model"
        />
        <div>
          <div className="copyright">
            &copy; Blackout Inc.
            <span />
          </div>
          <div className="CTA-button">
            <div>
              <a href="/">
                <img src="./blackout-command/src/assets/button.svg" />
                <p>Download Now</p>
              </a>
            </div>
            <div>
              <p>Download on PC</p>
            </div>
          </div>
          <div className="search-bar">
            <div>
              <input type="text" placeholder="Search arsenal" />
              <span className="material-symbols-outlined">search</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
