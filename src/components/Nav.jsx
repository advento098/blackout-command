import { useEffect, useRef, useState } from "react";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const sideDrawer = useRef(null);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (sideDrawer.current && !sideDrawer.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("pointerdown", handleOutsideClick);
    return () => {
      document.removeEventListener("pointerdown", handleOutsideClick);
    };
  }, []);
  return (
    <div>
      <nav>
        <div className="burger-container" onClick={toggleMenu}>
          <span className="material-symbols-outlined burger-icon" id="burger">
            menu
          </span>
        </div>

        <div className="left-nav">
          <ul>
            <li className="brand">BLACKOUT INC.</li>
            <li>
              {" "}
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">About</a>
            </li>
          </ul>
        </div>

        <div className="hexagon-border">
          <div className="hexagon-fill">
            <img src="./blackout-command/src/assets/controller-logo.svg" />
          </div>
        </div>

        <div className="right-nav">
          <ul>
            <li>
              <a href="#">Inventory</a>
            </li>
            <li>
              <a href="/">Shop</a>
            </li>
            <li className="game-info">
              Game Info
              <span className="material-symbols-outlined">arrow_drop_down</span>
              <div className="options">
                <button>
                  <a href="/">Weapons</a>
                </button>
                <button>
                  <a href="/">Disguise</a>
                </button>
                <button>
                  <a href="/">Customization</a>
                </button>
              </div>
            </li>
          </ul>
        </div>
      </nav>

      <div
        id="side-drawer"
        ref={sideDrawer}
        className={`${isOpen ? "active" : ""}`}
      >
        <div className="brand-header">
          <h1>
            Blackout <span>Inc.</span>
          </h1>
        </div>
        <ul>
          <li>
            <a href="/" onClick={toggleMenu}>
              About
            </a>
          </li>
          <li>
            <a href="/" onClick={toggleMenu}>
              Inventory
            </a>
          </li>
          <li>
            <a href="/" onClick={toggleMenu}>
              Shop
            </a>
          </li>
          <li>
            <a href="/" onClick={toggleMenu}>
              Weapons
            </a>
          </li>
          <li>
            <a href="/" onClick={toggleMenu}>
              Disguise
            </a>
          </li>
          <li>
            <a href="/" onClick={toggleMenu}>
              Customization
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
