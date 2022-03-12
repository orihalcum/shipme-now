import React, { useEffect, useState } from 'react';
import BrandLogo from '../../../components/atoms/brand-logo';
import { PropTypes } from 'prop-types'

const MENU = [
  { title: 'Kenapa Shipme?', link: '/#kenapa-shipme' },
  { title: 'Cara Memesan', link: '/#cara-memesan' },
  { title: 'Hubungi Kami', link: '/#hubungi-kami' },
]

const MainHeader = ({ transparent, hideNavMenu }) => {

  const [isTransparent, setIsTransparent] = useState(transparent)
  const [navMenu, setNavMenu] = useState(MENU)

  const handleScroll = () => setIsTransparent(document.scrollingElement.scrollTop <= 30)

  useEffect(() => {
    if(typeof document !== 'undefined' && document) {
      // Only for transparent from the beginning
      if(transparent) {
        document.addEventListener("scroll", handleScroll)
        return () => document.removeEventListener("scroll", handleScroll)
      }
    }
  })

  return (
    <div className={ `main-header ${isTransparent ? 'transparent' : ''}` }>
      <div className="container">
        <div className="main-header__logo">
          {/* <a href="/"> */}
          <a href="/" onClick={ e => hideNavMenu && e.preventDefault() }>
            <BrandLogo height="auto" />
          </a>
        </div>
        <div className="main-header__menu">
          {
            !hideNavMenu &&
            <ol className="hidden-xs hidden-sm">
              {
                navMenu.map((v, k) => (
                  <li key={k}>
                    <a href={v.link}>{v.title}</a>
                  </li>
                ))
              }
            </ol>
          }
        </div>
      </div>
    </div>
  );
};

export default MainHeader;

MainHeader.propTypes = {
  transparent: PropTypes.bool,
  hideNavMenu: PropTypes.bool,
}

MainHeader.defaultProps = {
  transparent: false,
  hideNavMenu: false,
}