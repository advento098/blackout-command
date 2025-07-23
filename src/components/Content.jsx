import "../styles/Content.css";
import button from "../assets/button.svg";
import characterModel from "../assets/character-model.svg";

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
        <img src={characterModel} alt="soldier-model" />
        <div>
          <div className="copyright">
            &copy; Blackout Inc.
            <span />
          </div>
          <div className="CTA-button">
            <div>
              <a href="/">
                <img src={button} />
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
