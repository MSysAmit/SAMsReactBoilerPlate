import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Paper from '@material-ui/core/Paper';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
// import Button from '@material-ui/core/Button';
import AppLandingHomeListItem from '../HomeListItems';
import LogoLanding from '../../../assets/media/landing-bannder-background.svg';
import Cosworth from '../../../assets/media/clients/Cosworth.svg';
import DforE from '../../../assets/media/clients/Department_for_Education.svg';
import Flowserve from '../../../assets/media/clients/Flowserve.svg';
import Homeserve from '../../../assets/media/clients/Homeserve.svg';
import Pilkington from '../../../assets/media/clients/Pilkington.svg';
import Trenitalia from '../../../assets/media/clients/Trenitalia.svg';
import DivGrDarLogo from '../../../assets/media/divider-grey-darker.svg';
import SamVideo from '../../../assets/media/samsentry-video.mp4';
import SamIceberg from '../../../assets/media/iceberg.svg';
import CircleLogo from '../../../assets/media/circle.svg';
import LinkIcon from '@material-ui/icons/Link';
import ImportantDevicesIcon from '@material-ui/icons/ImportantDevices';
import LoopIcon from '@material-ui/icons/Loop';
import CompareArrowsIcon from '@material-ui/icons/CompareArrows';
import FileCopyOutlinedIcon from '@material-ui/icons/FileCopyOutlined';
import LanguageIcon from '@material-ui/icons/Language';
import MyLocationIcon from '@material-ui/icons/MyLocation';
import CloudQueueIcon from '@material-ui/icons/CloudQueue';
import EuroSymbolIcon from '@material-ui/icons/EuroSymbol';
import VerticalAlignCenterIcon from '@material-ui/icons/VerticalAlignCenter';
import SvgIcon from '@material-ui/core/SvgIcon';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

const BitcoinIcon = props => (
  <SvgIcon {...props} viewBox="12 10 41 41">
    <path d="m46.103,27.444c0.637-4.258-2.605-6.547-7.038-8.074l1.438-5.768-3.511-0.875-1.4,5.616c-0.923-0.23-1.871-0.447-2.813-0.662l1.41-5.653-3.509-0.875-1.439,5.766c-0.764-0.174-1.514-0.346-2.242-0.527l0.004-0.018-4.842-1.209-0.934,3.75s2.605,0.597,2.55,0.634c1.422,0.355,1.679,1.296,1.636,2.042l-1.638,6.571c0.098,0.025,0.225,0.061,0.365,0.117-0.117-0.029-0.242-0.061-0.371-0.092l-2.296,9.205c-0.174,0.432-0.615,1.08-1.609,0.834,0.035,0.051-2.552-0.637-2.552-0.637l-1.743,4.019,4.569,1.139c0.85,0.213,1.683,0.436,2.503,0.646l-1.453,5.834,3.507,0.875,1.439-5.772c0.958,0.26,1.888,0.5,2.798,0.726l-1.434,5.745,3.511,0.875,1.453-5.823c5.987,1.133,10.489,0.676,12.384-4.739,1.527-4.36-0.076-6.875-3.226-8.515,2.294-0.529,4.022-2.038,4.483-5.155zm-8.022,11.249c-1.085,4.36-8.426,2.003-10.806,1.412l1.928-7.729c2.38,0.594,10.012,1.77,8.878,6.317zm1.086-11.312c-0.99,3.966-7.1,1.951-9.082,1.457l1.748-7.01c1.982,0.494,8.365,1.416,7.334,5.553z" />
  </SvgIcon>
);

const benefits = [
  {
    desc: <FormattedMessage {...messages.firstBenefit} />,
    icon: require('../../../assets/media/governance.svg'),
  },
  {
    desc: <FormattedMessage {...messages.secondBenefit} />,
    icon: require('../../../assets/media/analysis-alt.svg'),
  },
  {
    desc: <FormattedMessage {...messages.thirdBenefit} />,
    icon: require('../../../assets/media/context.svg'),
  },
  {
    desc: <FormattedMessage {...messages.fourthBenefit} />,
    icon: require('../../../assets/media/discussion.svg'),
  },
  {
    desc: <FormattedMessage {...messages.fifthBenefit} />,
    icon: require('../../../assets/media/review.svg'),
  },
  {
    desc: <FormattedMessage {...messages.sixthBenefit} />,
    icon: require('../../../assets/media/select-tech.svg'),
  },
  {
    desc: <FormattedMessage {...messages.seventhBenefit} />,
    icon: require('../../../assets/media/disconnect.svg'),
  },
  {
    desc: <FormattedMessage {...messages.eighthBenefit} />,
    icon: require('../../../assets/media/play.svg'),
  },
  {
    desc: <FormattedMessage {...messages.ninthBenefit} />,
    icon: require('../../../assets/media/audit-defence.svg'),
  },
  {
    desc: <FormattedMessage {...messages.tenthBenefit} />,
    icon: require('../../../assets/media/collaboration.svg'),
  },
  {
    desc: <FormattedMessage {...messages.eleventhBenefit} />,
    icon: require('../../../assets/media/employees.svg'),
  },
  {
    desc: <FormattedMessage {...messages.twelvethBenefit} />,
    icon: require('../../../assets/media/policies.svg'),
  },
];

const sections = [
  {
    name: 'Responsibility, Management and Policies',
    icon: <LinkIcon />,
    subsections: [
      'Responsibility for SAM',
      'Risk Management',
      'Policies, Processes and Procedures',
      'SAM Awareness and Competence',
      'Performance and Ongoing Improvement',
      'Service Continuity',
    ],
  },
  {
    name: 'Inventory Management',
    icon: <ImportantDevicesIcon />,
    subsections: [
      'Asset Scope',
      'Tracking',
      'Control',
      'Data Storage',
      'Budget Management and Forecasting',
      'Discovery Data',
    ],
  },
  {
    name: 'Lifecycle Processes',
    icon: <LoopIcon />,
    subsections: [
      'Software Requirements',
      'Design',
      'Software Evaluation',
      'Request & Procurement',
      'Receipt',
      'Build',
      'Commission & Deployment',
      'Operation',
      'Decommission',
      'Retirement',
    ],
  },
  {
    name: 'Verification and Reconciliation',
    icon: <CompareArrowsIcon />,
    subsections: [
      'Licensing Compliance',
      'Licence Management',
      'Licence Optimisation',
      'Software as a Service',
      'Security Compliance',
    ],
  },
  {
    name: 'Contract Management Processes',
    icon: <FileCopyOutlinedIcon />,
    subsections: [
      'Contract Management',
      'Outsourcing Management',
      'Supplier Management',
    ],
  },
];

const commonFeatures = [
  {
    name: <FormattedMessage {...messages.firstCommonFeatures} />,
    icon: <CloudQueueIcon />,
  },
  {
    name: <FormattedMessage {...messages.secondCommonFeatures} />,
    icon: <EuroSymbolIcon />,
  },
  {
    name: <FormattedMessage {...messages.thirdCommonFeatures} />,
    icon: <VerticalAlignCenterIcon />,
  },
];

const clients = [Cosworth, DforE, Flowserve, Homeserve, Pilkington, Trenitalia];

// const MainDiv = styled.div`
// margin: 4% 6%;
// `;

// const ChildDiv = styled.div`
//   display: inline-block;
//   width: 49%;
//   // margin: 6%;
// `;
// const DivImg = styled.div`
//   display: inline-block;
//   width: 38%;
// `;

// const DivVideo = styled.div`
//   // margin: 7vw;
//   font-size: 20.5px;
//   line-height: 1.2;
//   width: 94%;
//   // margin-top: 52px;
// `;

// const Video = styled.video`
//   margin-top: 5%;
//   width: 95%;
// `;

// const Img = styled.img`
//   width: 36vw;
//   // margin: 5% -7%;
// `;

// const DivSam = styled.div`
//   font-size: 3.5vw;
//   // margin: 4% 0%;
//   color: #607d8b;
// `;

// const DivSamFirst = styled.div`
//   font-size: 1.5vw;
//   color: #607d8b;
//   line-height: 1.2;
// `;

const Button = styled.button`
  width: 20%;
  // margin-top: 5%;
  background: #607d8b;
  height: 2.5vw;
  border-radius: 5px;
  color: #fff;
`;

// const DivLogoMain = styled.div`
//   // margin: 6% 4%;
//   text-align: center;
// `;

// const DivLogo = styled.div`
//   width: 16%;
//   display: inline-block;
//   padding-right: 3%;

//   :last-child {
//     padding: 0;
//   }
// `;

// const DivSign = styled.div`
//   width: 92%;
//   font-size: 2.17vw;
//   margin: 6%;
//   text-align: center;
//   `;

// const DivBeifit = styled.div`
//   display: inline-block;
//   margin: 0 12vw;
//   font-size: 1.4vw;
// `;

// const DivInline = styled.div`
//   display: inline-block;
// `;

// const ImgBackground = styled.img`
//   height: 10vw;
//   width: 100%;
// `;

// const ImgBenefit = styled.img`
//   margin-left: 18vh;
//   padding: 0vw;
//   height: 7vw;
// `;
// const ImgSam = styled.img`
//   max-height: 38vw;
//   margin: 5vw;
// `;

// const DivLine = styled.div`
//   line-height: 1.2;
//   font-size: 2vw;
//   margin: 7vw;
// `;

// const DivLineFirst = styled.div`
//   font-size: 1.5vw;
//   line-height: 1.4;
//   margin: 0 7vw;
// `;

// const DivNinMsg = styled.div`
// font-size: 1.875rem;
//     width: 100%;
//     color: #fff;
//     text-align: center;
//     padding-top: 8rem;
//     padding-bottom: 8rem;
//     background-color: #455a64;
// `;

// const DivtlthMsg = styled.div`
// font-size: 1.875rem;
//     width: 100%;
//     color: #455a64;
//     text-align: center;
//     padding-top: 8rem;
//     padding-bottom: 8rem;
// `;

// const DivText = styled.div`
// font-size: 1.25rem;
// line-height: 1.15;
// line-break: unset;
// margin: 2.5rem 5.5rem;
// border-width: 0;
// border-style: solid;
// color: #606f7b;
// `;
const DivMain = styled.div`
  margin: 0 5% 12%;
`;
const DivText = styled.div`
  width: 58%;
  display: inline-block;
  color: #606f7b;
  margin-left: 2%;
  padding: 10vw 2vw;

  h1 {
    font-size: 3.5vw;
    font-weight: normal;
  }
  p {
    line-height: 1.2;
  }
`;
const DivLogo = styled.div`
  width: 39%;
  display: inline-block;

  img {
    position: absolute;
    top: 29%;
    width: 36%;
  }
`;
const DivImg = styled.div`
  text-align: center;
  margin-bottom: 10%;
  div {
    display: inline-block;
    width: 14%;
    padding-right: 2%;

    :last-child {
      padding: 0;
    }
  }
`;
const DivBack = styled.div`
  img {
    height: 10vw;
    width: 100%;
  }
`;
const DivVideo = styled.div`
  background: #455a64;
  p {
    padding: 6% 6% 0;
    margin: 0;
    border-top: 1px solid #dae1e7;
    color: #fff;
    font-size: 1.5vw;
    line-height: 1.2;
  }
  video {
    width: 100%;
    padding: 4% 6% 10%;
  }
`;
const DivSign = styled.div`
  margin: 8% 6%;
  text-align: center;
  p {
    font-size: 2.2vw;
    color: #606f7b;
    a {
      text-decoration: none;
      color: #333;
    }
    a:hover {
      color: green;
    }
  }
`;
const DivIcon = styled.div`
  div:nth-child(odd) {
    margin-bottom: 10%;
    margin: 6%;
    p {
      display: inline-block;
      text-align: center;
      font-size: 1.6vw;
      width: 58%;
      color: #606f7b;
    }
    img {
      float: right;
      width: 7%;
      position: absolute;
      right: 32vw;
    }
  }
  div:nth-child(even) {
    margin-bottom: 10%;
    margin: 6%;
    p {
      display: inline-block;
      text-align: center;
      font-size: 1.6vw;
      width: 100%;
      padding-left: 33%;
      color: #606f7b;
    }
    img {
      width: 8%;
      position: absolute;
      left: 14vw;
    }
  }
`;
const DivHeader = styled.div`
  background: #455a64;
  padding: 6%;
  font-size: 2vw;
  text-align: center;
  color: #fff;
  margin: 10% 0;
`;
const DivTextBack = styled.div`
  p {
    margin: 2% 6% 2%;
    font-size: 1.5vw;
    line-height: 1.2;
    color: #606f7b;
  }
  div {
    text-align: center;
    margin: 5% 0;

    img {
      width: 30%;
    }
  }
`;
const DivLock = styled.div`
  text-align: center;
  color: #606f7b;
  font-size: 2.3vw;
  margin: 8%;
`;
const DivHeadAccord = styled.div`
  margin: 0 0% 0 6%;
`;
const DivAccord = styled.div`
width: 45%;
box-shadow: 0px 1px 5px 0px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 3px 1px -2px rgba(0,0,0,0.12);
display: inline-block;
margin: 0 1.7%;
>div>div{
  height: 100vh;
}
}
div {
  text-align: left;
  color: #606f7b;
   h1 {
    padding: 7%;
    text-align: center;
    color: #606f7b;

   }
   div {
     li {
       svg {
        font-size: 2.5vw;
        margin: 0 5% 0 10%;
       }
     }
     div {
       div {
           svg {
            font-size: 2.5vw;
            margin: 0 5% 0 10%;
           }
         
       }
     }
   }
}
:nth-child(2) {
  position: absolute;
  width: 39.6%;
   div {
     h1 {
       padding: 7.4%;
     }
   }
}
`;

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openedIdx: null,
      toggle: false,
    };
  }
  handleIdxChange(idx) {
    console.log('Changing idx', idx);
    this.setState({
      openedIdx: idx,
      toggle: !this.state.toggle,
    });
  }
  render() {
    const { history } = this.props;

    return (
      <div>
        <DivMain>
          <DivText>
            <h1>
              <FormattedMessage {...messages.samMsg} />
            </h1>
            <p>
              <FormattedMessage {...messages.samFirstMsg} />
            </p>

            <div>
              <Button
                variant="raised"
                onClick={() => {
                  history.push('/signup');
                  window.scrollTo(0, 0);
                }}
              >
                <FormattedMessage {...messages.signUp} />
              </Button>
            </div>
          </DivText>
          <DivLogo>
            <img src={LogoLanding} />
          </DivLogo>
        </DivMain>

        <DivImg>
          {clients.map((client, idx) => (
            <div key={idx}>
              <img src={client} />
            </div>
          ))}
        </DivImg>
        <DivBack>
          <img src={DivGrDarLogo} />
        </DivBack>

        <DivVideo>
          <p>
            <FormattedMessage {...messages.samSecondMsg} />
          </p>
          <video id="samsentry-video" controls="controls">
            <source src={SamVideo} type="video/mp4" />
          </video>
        </DivVideo>

        <DivSign>
          <p>
            <Link to="/signup">
              <FormattedMessage {...messages.signUp} />
            </Link>{' '}
            <FormattedMessage {...messages.samThirdMsg} />
          </p>
        </DivSign>
        <DivIcon>
          {benefits.map((benefit, idx) => (
            <div key={idx}>
              <p>{benefit.desc}</p>
              <img src={benefit.icon} />
            </div>
          ))}
        </DivIcon>

        <DivHeader>
          <p>
            <FormattedMessage {...messages.samFourthMsg} />
          </p>
        </DivHeader>

        <DivTextBack>
          <p>
            <FormattedMessage {...messages.samFifthMsg} />
          </p>
          <div>
            <img src={SamIceberg} />
          </div>
          <p>
            <FormattedMessage {...messages.samSixthMsg} />
          </p>
          <p>
            <FormattedMessage {...messages.samSeventhMsg} />
          </p>
          <p>
            <FormattedMessage {...messages.samEighthMsg} />
          </p>
        </DivTextBack>
        <DivHeader>
          <p>
            <FormattedMessage {...messages.samNinethMsg} />
          </p>
        </DivHeader>
        <DivTextBack>
          <p>
            <FormattedMessage {...messages.samTenthMsg} />
          </p>
          <div>
            <img src={CircleLogo} />
          </div>
          <p>
            <FormattedMessage {...messages.samEleventhMsg} />
          </p>
        </DivTextBack>
        <DivLock>
          <FormattedMessage {...messages.samTwelvthMsg} />
        </DivLock>

        <DivHeadAccord>
          <DivAccord>
            <Paper>
              <Typography variant="headline">
                <FormattedMessage {...messages.samStandardMsg} />
              </Typography>
              <div>
                {commonFeatures.map((feature, idx) => (
                  <ListItem key={idx}>
                    {feature.icon}
                    <ListItemText primary={feature.name} disableTypography />
                  </ListItem>
                ))}
                {sections.map((section, idx) => (
                  <AppLandingHomeListItem
                    key={idx}
                    idx={idx}
                    toggle={this.state.toggle}
                    openedIdx={this.state.openedIdx}
                    onChange={this.handleIdxChange.bind(this)}
                    mainItemText={section.name}
                    mainItemIcon={section.icon}
                    nestedItems={section.subsections}
                  />
                ))}
              </div>
            </Paper>
          </DivAccord>
          <DivAccord>
            <Paper>
              <Typography variant="headline">
                <FormattedMessage {...messages.samProMsg} />
              </Typography>
              <div>
                {commonFeatures.map((feature, idx) => (
                  <ListItem key={idx}>
                    {feature.icon}
                    <ListItemText primary={feature.name} disableTypography />
                  </ListItem>
                ))}
                {sections.map((section, idx) => (
                  <AppLandingHomeListItem
                    key={idx}
                    idx={idx}
                    toggle={this.state.toggle}
                    openedIdx={this.state.openedIdx}
                    onChange={this.handleIdxChange.bind(this)}
                    mainItemText={section.name}
                    mainItemIcon={section.icon}
                    nestedItems={section.subsections}
                  />
                ))}
                <ListItem>
                  <LanguageIcon />
                  <ListItemText
                    primary="Software Global View"
                    disableTypography
                  />
                </ListItem>
                <ListItem>
                  <MyLocationIcon />
                  <ListItemText primary="Licence Workbench" disableTypography />
                </ListItem>
                <ListItem>
                  <BitcoinIcon />
                  <ListItemText
                    primary="Audit Methodology Proof of Existence"
                    disableTypography
                  />
                </ListItem>
              </div>
            </Paper>
          </DivAccord>
        </DivHeadAccord>
      </div>
    );
  }
}
