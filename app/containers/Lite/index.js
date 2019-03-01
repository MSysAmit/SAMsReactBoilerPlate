import React, { Component } from 'react';
import ApplandingLiteSignup from './homeScreenLiteSignup';
import Button from '@material-ui/core/Button';
import styled from 'styled-components';
import img from '../../../assets/media/samsentry-lite-background.png'

const StyledButton = styled(Button)`
  && {
    background-color: #607d8b;
    width: 16rem;
    color: #fff;
  }
  &&:hover {
    background-color: #455a64;
  }
`;
 const DivShadow = styled.div`
 padding: 3vw 3vw;
 box-shadow: 0 4px 8px 0 rgba(0, 0, 0, .12), 0 2px 4px 0 rgba(0, 0, 0, .08);
 margin: 5vw 6vw;
 `;

 const H3 = styled.h3`
 color: #606f7b;
 font-size: 2.3vw;
 font-weight: normal;
 text-align: center; 
 `;
 const P = styled.p`
 color: #606f7b;
 text-align: justify;
 font-size: 1.4vw;
 line-height: 1.2;
 margin-bottom: 3vw;
 `;
 const DivButton = styled.div`
 text-align: center;
 `;

 const DivImg = styled.div`
 background-image: url(${img});
 background-size: cover;
 position: absolute;
 `;
class Lite extends Component {
  state = {
    showLiteSignup: false,
  };

  appLadningSignupHandler = () => {
    this.setState({
      showLiteSignup: true,
    });
  };

  render() {
    return (
      <DivImg>
        <div className="liteMainDiv">
          {this.state.showLiteSignup ? (
            <ApplandingLiteSignup />
          ) : (
            <DivShadow className="boxShadowLite">
              <H3 className="signUpLite ">Welcome to SAMSentry Lite</H3>
              <P className="marginBottom3">
                The intention behind the questions we have set out is to
                understand where you are in relation to good ITAM practice. Once
                you have a clearer understanding you will be able to make a
                better judgement call on your next steps. With the increase of
                hosted applications, we have decided to incorporate best
                practice around cloud-based applications and services in terms
                of purchase and consumption. As such you will notice a few
                questions around cloud applications.
              </P>

              <P className="marginBottom3">
                Your score rating and recommendations will be generated at the
                end of the session along with some pointers on potential cost
                savings. It should be stated that Sentry Lite is provided to
                ensure you have some indicative remedies; the full Sentry
                product will allow you to drill down into much more detail and
                can be harnessed as a either a project management tool or a
                portal that facilities collaboration between internal teams or a
                SAM outsourcer; the choice is yours.
              </P>
              <P className="marginBottom3">
                From everyone at the Sentry Team we would like to wish you good
                luck on your SAM journey; and of course please contact us
                directly if you would like more help or guidance on the best
                discovery/licence management technologies or a list of the top
                SAM Suppliers in the UK, Europe and North America.
              </P>
              <DivButton className="taxtaligncenter">
                <StyledButton
                  variant="raised"
                  onClick={this.appLadningSignupHandler}
                  disabled={this.state.startDisabled}
                >
                  Start
                </StyledButton>
              </DivButton>
            </DivShadow>
          )}
        </div>
      </DivImg>
    );
  }
}

export default Lite;
