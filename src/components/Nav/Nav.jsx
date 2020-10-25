import React, { useContext, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { ThemeContext } from '../../ThemeContext';
import { toElement as scrollToElement } from '../../utils/scroll';

import './style.scss';

const Nav = (props) => {
  const theme = useContext(ThemeContext);
  let nav = useRef();
  const [isSticky, setIsSticky] = useState(false);

  // componentDidMount() {
  //   window.addEventListener('scroll', handleScroll);
  // }

  // componentWillUnmount() {
  //   window.removeEventListener('scroll', handleScroll);
  // }

  const handleScroll = () => {
    if (window.pageYOffset > nav.offsetTop) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  }

  const scrollToPage = (pageSelector) => {
    const nextPage = document.querySelector(pageSelector);
    scrollToElement(nextPage);
  }
  const { currentTheme: { colorPrimary, bgPrimary, navAlpha }, switchTheme } = theme;
  
  const stickyClass = isSticky ? 'sticky' : '';
  const stickyStyles = isSticky
    ? { backgroundColor: navAlpha, color: colorPrimary }
    : { backgroundColor: bgPrimary, color: colorPrimary };
  return (
    <nav
      className={stickyClass}
      // ref={(elem) => {
      //   this.nav = elem;
      // }}
      style={stickyStyles}
    >
      <div className="magic-wand bounce-xy" onClick={(e) => switchTheme()}>
        <button className="fas fa-magic fa-lg" href="#" />
        <div className="magic-text">Color Me</div>
      </div>
      <style jsx="true">
        {`
          .menu__item:hover {
            border-bottom: 2px solid ${colorPrimary};
          }
        `}
      </style>
      <div className="menu">
        <div
          className="menu__item active"
          onClick={(e) => scrollToPage('.intro-wrapper')}
        >
          About
        </div>
        <div
          className="menu__item"
          onClick={(e) => scrollToPage('.portfolio-page')}
        >
          Portfolio
        </div>
      </div>
    </nav>
  );
}

Nav.propType = {
  currentTheme: PropTypes.any,
  switchTheme: PropTypes.func
};

export default Nav;



// class Nav extends React.Component {
//   constructor(props) {
//     super(props);
//     this.handleScroll = this.handleScroll.bind(this);
//     this.state = {
//       isSticky: false
//     };
//   }

//   componentDidMount() {
//     window.addEventListener('scroll', this.handleScroll);
//   }

//   componentWillUnmount() {
//     window.removeEventListener('scroll', this.handleScroll);
//   }

//   handleScroll() {
//     if (window.pageYOffset > this.nav.offsetTop) {
//       this.setState({
//         isSticky: true
//       });
//     } else {
//       this.setState({
//         isSticky: false
//       });
//     }
//   }

//   scrollToPage(pageSelector) {
//     const nextPage = document.querySelector(pageSelector);
//     scrollToElement(nextPage);
//   }

//   render() {
//     this.nav = 123
//     console.log("Class Nav ", this.nav)
//     const {
//       theme: { colorPrimary, bgPrimary, navAlpha },
//       switchTheme
//     } = this.context;

//     const stickyClass = this.isSticky ? 'sticky' : '';
//     const stickyStyles = this.isSticky
//       ? { backgroundColor: navAlpha, color: colorPrimary }
//       : { backgroundColor: bgPrimary, color: colorPrimary };
//     return (
//       <nav
//         className={stickyClass}
//         ref={(elem) => {
//           this.nav = elem;
//         }}
//         style={stickyStyles}
//       >
//         <div className="magic-wand bounce-xy" onClick={(e) => switchTheme()}>
//           <button className="fas fa-magic fa-lg" href="#" />
//           <div className="magic-text">Color Me</div>
//         </div>
//         <style jsx="true">
//           {`
//             .menu__item:hover {
//               border-bottom: 2px solid ${colorPrimary};
//             }
//           `}
//         </style>
//         <div className="menu">
//           <div
//             className="menu__item active"
//             onClick={(e) => this.scrollToPage('.intro-wrapper')}
//           >
//             About
//           </div>
//           <div
//             className="menu__item"
//             onClick={(e) => this.scrollToPage('.portfolio-page')}
//           >
//             Portfolio
//           </div>
//         </div>
//       </nav>
//     );
//   }
// }

// Nav.contextTypes = {
//   theme: PropTypes.any,
//   switchTheme: PropTypes.func
// };

// export default Nav;