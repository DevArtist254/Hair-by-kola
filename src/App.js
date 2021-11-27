import {Icon} from "@iconify/react"
import "./App.css"

function App() {
  return (
    <div>
      <nav className="nav">
           <a
              href="/"
              target="_blank"
              rel="noopener noreferrer"
              className="nav__logo"
            >
              Hair by kola
            </a>
        <ul className="nav__list">
          <li className="nav__item">
            <a
              href="/"
              target="_blank"
              rel="noopener noreferrer"
              className="nav__link"
            >
              Showcase
            </a>
          </li>
          <li className="nav__item">
            <a
              href="/"
              target="_blank"
              rel="noopener noreferrer"
              className="nav__link"
            >
              Login
            </a>
          </li>
          <li className="nav__item">
            <a
              href="/"
              target="_blank"
              rel="noopener noreferrer"
              className="nav__link"
              style={{fontSize: "70px" }}
            >
              <Icon
                icon="bi:cart-plus-fill"
                style={{color: "#2B002D", width: "8.9rem"}}
              />
            </a>
          </li>
        </ul>
      </nav>
      <header className="header">
        <div className="header__text">
          <div className="header__text--intro-text">
            <h1 className="header__text--text-1 header">Put a crown</h1>
            <h2 className="header__text--text-2 header">On your head</h2>
            <h3 className="header__text--text-3 header">Feel beautiful</h3>
            <h3 className="header__text--text-4 header">Look fabulous</h3>
          </div>

          <button className="header__text--btn btn-primary">
            <a className="header__text--link" href="/">
              Showcase
            </a>
          </button>
        </div>
        <div className="header__img">
        </div>
      </header>
    </div>
  )
}

export default App
