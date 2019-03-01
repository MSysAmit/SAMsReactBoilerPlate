import React, { Component } from 'react';
import { Data, Logo } from '../Logo/index';
import SamAuditLogo from '../../../assets/media/samsentry-audit-watch-hero.png';
import styled from 'styled-components';
import { Link } from 'react-router-dom';



const DivText = styled.div`
background: #455a64;
font-size: 2vw;
padding: 6vw 5.5vw;
color: #fff;
text-align: center;
`
const DivPara = styled.div`
padding: 6vw;
font-size: 1.5vw;
text-align: justify;
 p {
   line-height: 1.2;
   color: #606f7b;
 }
`;
const DivLogo = styled.div`
margin-bottom: 7%;
`;
const DivSign = styled.div`
margin: 0 6vw;
text-align: center;
font-size: 2.3vw;
color: #606f7b;

`;
const LinkStyle = styled(Link)`
  && {
    text-decoration: none;
    color: #333;
    font-size: 2.5vw;
  }
  &&:hover {
    color: #66bb6a;
  }
`;

class GlobalView extends Component {

  state = {
    LogoDatas: [
      { text: 'Stay up to date', image: require("../../../assets/media/stay-up-to-date.svg") },
      { text: 'Share audit experiences', image: require("../../../assets/media/share-experiences.svg") },
      { text: 'Learn new audit practices', image: require("../../../assets/media/learn-new-practices.svg") },
      { text: 'Keep informed', image: require("../../../assets/media/keep-informed.svg") },
      { text: 'Gain first-hand experience', image: require("../../../assets/media/gain-experience.svg") },
      { text: 'Understand different approaches', image: require("../../../assets/media/understand-different-approaches.svg") }
    ]
  }

  render() {


    let LogoDatas = null;
    LogoDatas = (
      <div>
        {this.state.LogoDatas.map((logodata, index) => {
          console.log("index values", index);
           if(index % 2 == 0){
            return <Logo
            text = {logodata.text}
            image={logodata.image}
            />
           }else{
            return <Data
            text = {logodata.text}
            image={logodata.image}
            />
           }
        })}
      </div>)


    return (
      <div className="container-fluid globalViewDiv">
        <div>
          <img src={SamAuditLogo} className="widthFull" />
        </div>
        <DivText className="row textRow">
          <p>Software Global View is a free platform where companies can log their latest publisher compliance audit anonymously.</p>
        </DivText>
        <div className="svg">
          <DivPara className="paraLast">     
              <p className="text-justify">
                All aspects of the audit can be registered for other organisations to view. Key information such as publisher behaviours,
                audit methods and outcomes are logged. The net result is organisations being able to create a more detailed and documented
                audit methodology that ensures correct usage of software and licence rights. Combined with a discovery tool and SAMSentry
                the data collated in Global View provides organisations with a comprehensive and robust foundation to efficiently manage software.
              </p>
          </DivPara>
          <DivLogo>
             {LogoDatas}
          </DivLogo>
        </div>
        <DivText className="row textRow">
          <p>
            Historically there has been very limited up to date and published information on software publisher audit activities.
           </p>
        </DivText>
        <div className="svg">
        <DivPara className="row paraLast">
          <p className="text-justify marginBottom3">
            The software industry has for many years employed the use of software audits to recoup lost fees; in most scenarios it’s a
            simple case of ensuring customers are aware of their usage and pay the appropriate fees. Whilst the SaaS industry is growing
            at a steady rate, software audit activity is still taking place but in different forms and varying methods. This in return has
            created a fairly vague approach to understanding audit methodologies.
          </p>
          <p className="text-justify">
            In many cases end users should be encouraged to work and collaborate with software publishers;
            Infraware employs a similar process using SAMSentry technology. However for those organisations that wish to
            achieve better understanding into ‘best practice’ audit techniques Infraware has created a free platform that
            provides some basic insight.
          </p>

        </DivPara>
        </div>
          <DivSign className="signUp">
          <LinkStyle to="/pass">Sign up  </LinkStyle>
              <span>today and find solutions to every SAM challenge.</span>
          </DivSign>
        <div className="svg">
        <DivPara className="row paraLast">
          <p className="text-justify">Free access gives you a limited number of 3 searches whilst subscription to SAMSentry Pro version provisions unlimited
            searches and use of our Blockchain Audit Methodology Service.
          </p>
        </DivPara>
        </div>
      </div>

    );
  }
}


export default GlobalView;