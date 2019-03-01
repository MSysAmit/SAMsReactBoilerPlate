import React from 'react';
import { FormattedMessage } from 'react-intl';
import NavBar from './NavBar';
import messages from './messages';
import IconLogo from '../../../assets/media/ss-logo-mark.svg';
import SamLogo from '../../../assets/media/ss-logo-text.svg';
import styled from 'styled-components';
import Link from './Link';

/* eslint-disable react/prefer-stateless-function */

const Img = styled.img`
  width: 5vw;
`;
const ImgSamLogo = styled.img`
  width: 12vw;
`;
const Div = styled.div`
  position: sticky;
  top: 0;
  text-align: center;
  border: 1px solid transparent;
  background: #fff;
  z-index: 99;
  position: -webkit-sticky;
`;

class Header extends React.Component {
  render() {
    return (
      <Div>
        <NavBar>
          <Link to="/">
            <Img src={IconLogo} />
          </Link>
          <Link to="/">
            <ImgSamLogo src={SamLogo} />
          </Link>
          <Link to="/">
            <FormattedMessage {...messages.home} />
          </Link>
          <Link to="/global-view">
            <FormattedMessage {...messages.globalview} />
          </Link>
          <Link to="/features">
            <FormattedMessage {...messages.features} />
          </Link>
          <Link to="/lite">
            <FormattedMessage {...messages.lite} />
          </Link>
          <Link to="/downloads">
            <FormattedMessage {...messages.downloads} />
          </Link>
          <Link to="/contact">
            <FormattedMessage {...messages.contact} />
          </Link>
          <Link to="/signup">
            <FormattedMessage {...messages.signup} />
          </Link>
          <Link to="/signin">
            <FormattedMessage {...messages.signin} />
          </Link>
        </NavBar>
      </Div>
    );
  }
}

export default Header;
