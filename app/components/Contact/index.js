import React, {Component} from 'react';
import ContactGif from "../../../assets/media/Contactus.gif";
import SAMSentry from "../../../assets/SAMSentry.pdf";
import styled from "styled-components";
import messages from './messages';
import { FormattedMessage } from 'react-intl';
import UL from './Ul';
import P from './P';
import H2 from './H2';

const Div = styled.div`
  display: inline-block;
  width: 40%;
  position: absolute;
   img {
    width: 90%;
    margin-top: 12%;
   }
`;
const DivText = styled.div`
width: 44%;
display: inline-block;
margin-left: 10%;
`;

const MainDiv = styled.div`
  background: #fff;
  color: #606f7b;
  margin-top: 7%;
`;

class Contact extends Component {
  render() {
    return (
      <MainDiv>
        <div>
          <DivText>
            <div>
             <H2><FormattedMessage {...messages.contactHeader} /></H2>
             <P>
                <a href="https://infraware.co.uk"><FormattedMessage {...messages.infraware} /> </a> 
                <FormattedMessage {...messages.contactFirstMsg} />
              </P>
              <div>
                <UL>
                  <li><FormattedMessage {...messages.firstPointMsg} /></li>
                  <li><FormattedMessage {...messages.secondPointMsg} /></li>
                  <li><FormattedMessage {...messages.thirdPointMsg} /></li>
                </UL>
              </div>
              <P>
              <FormattedMessage {...messages.contactSecondMsg} />
              </P>
              <P>
              <FormattedMessage {...messages.contactThirdMsg} />
              </P>
              <P>
              <FormattedMessage {...messages.contactFourthMsg} />
                <a href="mailto:info@samsentry.com">&nbsp; info@samsentry.com</a> <FormattedMessage {...messages.ContactMsg} />{" "}
                <a href="#"><FormattedMessage {...messages.contactNumber} /></a>.
              </P>
            </div>
          </DivText>
          <Div>
            <div>
            <a href={SAMSentry} target="_blank">
               <img src={ContactGif} />
             </a>
            </div>
          </Div>
        </div>
      </MainDiv>
    );
  }
}

export default Contact;