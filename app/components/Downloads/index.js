import React, { Component } from 'react';
import DownloadGif from '../../../assets/media/loader-test.gif';
import SAMSentry from '../../../assets/SAMSentry.pdf';
import SAMSentryFlyer from '../../../assets/SAMSentryFlyer.pdf';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import P from './P';
import H2 from './H2';

const DivText = styled.div`
  display: inline-block;
  width: 44%;
  margin-left: 10%;
  margin-bottom: 8%;
`;
const Div = styled.div`
  display: inline-block;
  width: 40%;
  position: absolute;
`;
const Img = styled.img`
  width: 36%;
  margin-left: 25%;
  margin-top: 14%;
`;
const ImgFlyer = styled.img`
  width: 36%;
  margin-left: 25%;
`;
const MainDiv = styled.div`
  background: #fff;
  color: #606f7b;
  margin-top: 6%;
  margin-bottom: 4%;
`;

class Downloads extends Component {
  render() {
    return (
      <MainDiv>
        <div>
          <DivText>
            <div>
              <H2>
                <FormattedMessage {...messages.brochureHeader} />
              </H2>
              <P className="text-justify">
                <FormattedMessage {...messages.brochureFirstMsg} />
              </P>
              <P>
                <FormattedMessage {...messages.brochureSecondMsg} />{' '}
                <a href={SAMSentry} target="_blank">
                  <FormattedMessage {...messages.samsBrochureMsg} />
                </a>{' '}
                <FormattedMessage {...messages.brochureThirdMsg} />
              </P>
            </div>
          </DivText>
          <Div>
            <div>
              <a href={SAMSentry} target="_blank">
                <Img src={DownloadGif} />
              </a>
            </div>
          </Div>
        </div>
        <DivText>
          <div>
            <H2>
              <FormattedMessage {...messages.flyerHeader} />
            </H2>
            <P className="text-justify">
              <FormattedMessage {...messages.flyerMsg} />
            </P>
          </div>
        </DivText>
        <Div>
          <div>
            <a href={SAMSentryFlyer} target="_blank">
              <ImgFlyer className="flyerRow" src={DownloadGif} />
            </a>
          </div>
        </Div>
      </MainDiv>
    );
  }
}

export default Downloads;
