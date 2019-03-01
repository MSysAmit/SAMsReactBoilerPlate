
import React from "react";
import styled from 'styled-components'
import { FormattedMessage } from 'react-intl';
import messages from './messages';


const Footer = styled.footer`
margin: 0% 6.2%;
padding: 0.5vw 2vw;
background: #fff;
opacity: 0.9;
text-align: center;
margin-bottom: 2vw;
`;

const Span = styled.span`
color: #606f7b
`;

const Div = styled.div`
color: #606f7b;
margin: 2% 0;
font-size: 15px;
`;
const Atag = styled.a`
color: #263238;
text-decoration: none;
&:hover {
  color: #66bb6a;
}
`;
const Hr = styled.hr`
color: #dbe2e8;
margin: 0 5%;
`;

export default class HomeFooter extends React.Component {
  render() {
    return (
      <div>
        <Hr />
        <Footer>
          <small className="text-center">
            <Div>
              <Span>
                &copy;&nbsp;{new Date().getFullYear()}&nbsp;
              </Span>
              <Atag href="https://infraware.co.uk"><FormattedMessage {...messages.infraware} /></Atag>
            </Div>
            <Div>
            <FormattedMessage {...messages.footerMessage} />
            </Div>
          </small>
        </Footer>
      </div>
    );
  }
}