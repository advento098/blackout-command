import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  return (
    <>
      <div className="main-container">
        <nav>
          <div>
            <ul>
              <li className="brand">BLACKOUT INC.</li>
              <li>Home</li>
              <li>About</li>
            </ul>
          </div>
          <div className="hexagon-border">
            <div className="hexagon-fill"></div>
          </div>
          <div>
            <ul>
              <li>Inventory</li>
              <li>Shop</li>
              <li className="game-info">
                Game Info
                <span class="material-symbols-outlined">arrow_drop_down</span>
                <div className="options">
                  <button>Weapons</button>
                  <button>Disguise</button>
                  <button>Customization</button>
                </div>
              </li>
            </ul>
          </div>
        </nav>
        <section>
          <div className="title-container">
            <h4>NO POWER. NO MERCY. JUST SURVIVAL.</h4>
            <h1>
              BLACKOUT <br />
              <span>COMMAND</span>
            </h1>
          </div>
          <div className="bottom-panel">
            <div className="vignette"></div>
            <img src="./src/assets/character-model.svg" alt="soldier-model" />
            <div>
              <div className="copyright">&copy; Blackout Inc.</div>
              <div className="CTA-button"></div>
              <div className="search-bar"></div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default App;
