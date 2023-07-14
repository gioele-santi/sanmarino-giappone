import React from 'react'
import { Link } from 'gatsby'

import logo from '../img/logo_white.svg'
import facebook from '../img/social/facebook.svg'
import instagram from '../img/social/instagram.svg'
import twitter from '../img/social/twitter.svg'
import youtube from '../img/social/youtube.svg'

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer has-background-black has-text-white-ter">
        <div className="content has-text-centered">
          <img
            src={logo}
            alt="Associazione San Marino Giapone"
            style={{ width: '14em', height: '6em' }}
          />
        </div>
        <div className="content has-text-centered has-background-black has-text-white-ter">
          <div className="container has-background-black has-text-white-ter">
            <div style={{ maxWidth: '100vw' }} className="columns">
              <div className="column is-4">
                <section className="menu">
                  <ul className="menu-list">
                    <li>
                      <Link to="/" className="navbar-item">
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/about">
                        Statuto
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/eventi">
                        Eventi
                      </Link>
                    </li>
                    {/* <li>
                      <Link className="navbar-item" to="/contact/examples">
                        Form Examples
                      </Link>
                    </li> */}
                    {/* <li>
                      <a
                        className="navbar-item"
                        href="/admin/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Admin
                      </a>
                    </li> */}
                  </ul>
                </section>
              </div>
              <div className="column is-4">
                <section>
                  <ul className="menu-list">
                    <li>
                      <Link className="navbar-item" to="/blog">
                        Notizie
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/benkyokai">
                        Gruppo di Studio
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/contact">
                        Contatti
                      </Link>
                    </li>
                    {/* <li>
                      <Link className="navbar-item" to="https://forms.gle/6g5YptTzVDRkbTiD6">
                        Iscriviti
                      </Link>
                    </li> */}
                  </ul>
                </section>
              </div>
              <div className="column is-4 social">
                <a title="facebook" href="https://facebook.com">
                  <img
                    src={facebook}
                    alt="Facebook"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>
                <a title="twitter" href="https://twitter.com/smarinogiappone">
                  <img
                    className="fas fa-lg"
                    src={twitter}
                    alt="Twitter"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>
                <a title="instagram" href="https://www.instagram.com/sanmarino_giappone/">
                  <img
                    src={instagram}
                    alt="Instagram"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>
                <a title="youtube" href="https://www.youtube.com/channel/UCz54EqZl-jKAJXQxm4dOwKQ">
                  <img
                    src={youtube}
                    alt="YouTube"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="content has-text-centered has-background-black has-text-white-ter has-text-weight-light">
          <p className='is-size-7'>Associazione San Marino - Giappone &#8226; COE SM24576 &#8226; Iscritta al Registro delle Associazioni al n°11</p>
          <p className='is-size-7'>c/o Via Giosue' Carducci 13, 47895  &#8226; Domagnano (RSM)</p>
        </div>
      </footer>
    )
  }
}

export default Footer
