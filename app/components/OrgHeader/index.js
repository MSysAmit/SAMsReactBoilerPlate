import React from 'react';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Divider from '@material-ui/core/Divider';
import ListSubheader from '@material-ui/core/ListSubheader';

import PersonIcon from '@material-ui/icons/Person';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import EmailIcon from '@material-ui/icons/Email';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import { withStyles } from '@material-ui/core/styles';

import HeaderMainNavigation from '../OrgHeaderNavigation';
import Logo from '../../../assets/media/ss-logo-mark-white.svg';
import styled from 'styled-components';

const StyledDiv = styled.div`
  display: flex;
  background: #263238;
  color: #dae1e7;
  position: fixed;
  top: 0;
  z-index: 99;
  width: 100%;
  height: 57px;
`;

const StyledHeaderDiv = styled.div`
  background: #37474f;
  position: fixed;
  height: 42px;
  top: 8.5%;
  z-index: 99;
  width: 100%;
  text-align: center;
  color: #fff;
  padding-top: 0.7%;
`;

const StyledSpanDiv = styled.div`
  color: #dae1e7;
  display: inline-grid;
  margin-left: 64px;
  font-size: 13px;
  line-height: 1.2;
  div {
    text-align: center;
  }
`;

const StyledIconButton = withStyles({
  root: {
    color: '#dae1e7',
    height: '27px',
  },
})(IconButton);

const StyledImg = styled.img`
  height: 56px;
  width: 39px;
  margin-left: 16px;
`;

export default class HeaderMain extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      aboutDialogOpen: false,
      legalDialogOpen: false,
      profileDialogOpen: false,

      timeLeft: this.getTimeLeft(),
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      let timeLeft = this.getTimeLeft();
      // if (timeLeft === -1) {
      if (timeLeft === -2) {
        window.location = '/signin';
      } else {
        this.setState({ timeLeft: this.getTimeLeft() });
      }
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  getTimeLeft = () => {
    // let expDate = JSON.parse(atob(utils.token.split('.')[1])).exp;
    let expDate = 1948829720;

    let secondsLeft = Math.floor(expDate - Date.now() / 1000);
    if (secondsLeft <= 0) {
      return -1;
    }

    let minutesLeft = Math.floor(secondsLeft / 60);
    let hoursLeft = Math.floor(minutesLeft / 60);

    secondsLeft = secondsLeft % 60;
    minutesLeft = minutesLeft % 60;

    return (
      (hoursLeft < 10 ? '0' + hoursLeft : hoursLeft) +
      'h ' +
      (minutesLeft < 10 ? '0' + minutesLeft : minutesLeft) +
      'm ' +
      (secondsLeft < 10 ? '0' + secondsLeft : secondsLeft) +
      's'
    );
  };

  render() {
    return (
      <div>
        <StyledHeaderDiv>{this.props.title}</StyledHeaderDiv>
        <StyledDiv>
          <div>
            <StyledImg src={Logo} />
          </div>
          <div>
            <HeaderMainNavigation {...this.props} />
          </div>
          <div>
            <StyledSpanDiv>
              <span>{this.state.timeLeft}</span>
              <div>
                {/* {utils.user.name} */}
                Amit
              </div>
            </StyledSpanDiv>
            <StyledIconButton
              onClick={event =>
                this.setState({ anchorElPerson: event.currentTarget })
              }
            >
              <PersonIcon />
            </StyledIconButton>
            <Menu
              transformOrigin={{ horizontal: 'center', vertical: 'top' }}
              anchorOrigin={{ horizontal: 'center', vertical: 'bottom' }}
              getContentAnchorEl={null}
              anchorEl={this.state.anchorElPerson}
              onClose={() => this.setState({ anchorElPerson: null })}
              open={Boolean(this.state.anchorElPerson)}
            >
              <MenuItem
                onClick={() =>
                  this.setState({
                    anchorElPerson: null,
                    profileDialogOpen: true,
                  })
                }
              >
                Your Profile
              </MenuItem>
              <MenuItem
                onClick={() => {
                  if (this.props.allowedToNavigate()) {
                    window.location = '/signin';
                  }
                }}
              >
                Sign out
              </MenuItem>
            </Menu>
            <StyledIconButton
              onClick={event =>
                this.setState({ anchorElMoreVert: event.currentTarget })
              }
            >
              <MoreVertIcon nativeColor={window.colorTopNavSelected} />
            </StyledIconButton>
            <Menu
              transformOrigin={{ horizontal: 'center', vertical: 'top' }}
              anchorOrigin={{ horizontal: 'center', vertical: 'bottom' }}
              getContentAnchorEl={null}
              anchorEl={this.state.anchorElMoreVert}
              onClose={() => this.setState({ anchorElMoreVert: null })}
              open={Boolean(this.state.anchorElMoreVert)}
            >
              <MenuItem
                onClick={() =>
                  this.setState({
                    anchorElMoreVert: null,
                    aboutDialogOpen: true,
                  })
                }
              >
                About
              </MenuItem>
              <MenuItem
                onClick={() =>
                  this.setState({
                    anchorElMoreVert: null,
                    legalDialogOpen: true,
                  })
                }
              >
                Legal information
              </MenuItem>
              <Divider />
              <ListSubheader>Themes</ListSubheader>
              {['Default', 'Aqua', 'Floral', 'Blue Grey', 'Amber'].map(
                theme => (
                  <MenuItem
                    key={theme}
                    selected={window.theme === theme}
                    onClick={() => {
                      this.setState({ anchorElMoreVert: null });
                      //   utils.setColors(theme);
                      window.mainKey = Math.random();
                      this.props.history.replace(
                        this.props.history.location.pathname,
                      );
                    }}
                  >
                    {theme}
                  </MenuItem>
                ),
              )}
            </Menu>
          </div>
        </StyledDiv>
        <Dialog
          open={this.state.profileDialogOpen}
          onClose={() => {
            this.setState({ profileDialogOpen: false });
          }}
          fullWidth={true}
        >
          <DialogContent>
            <div>
              <div>
                <div>
                  <div>
                    <PersonIcon />
                  </div>
                  {/* <div>{utils.user.name}</div> */}
                  <div>Chethan</div>
                </div>
                <div>
                  <div className="w-1/4">
                    <EmailIcon color="primary" />
                  </div>
                  {/* <div className="w-3/4">{utils.user.email}</div> */}
                  <div>amit.kumar@msystechnologies.com</div>
                </div>
                <div>
                  <div>
                    <PersonAddIcon />
                  </div>
                  <div>
                    {/* {moment(utils.user.created_at).format('LLL')} */}
                  </div>
                </div>
              </div>
            </div>
          </DialogContent>
          <DialogActions>
            <Button
              onClick={() => {
                this.setState({ profileDialogOpen: false });
              }}
            >
              OK
            </Button>
          </DialogActions>
        </Dialog>
        <Dialog
          open={this.state.aboutDialogOpen}
          onClose={() => {
            this.setState({ aboutDialogOpen: false });
          }}
        >
          <DialogContent>
            <p>
              SAMSentry was designed and created by Infraware. We help our
              clients around the world connect, control and optimise their
              assets. For more information, visit our website{' '}
              <a href="https://www.infraware.co.uk" target="_blank">
                www.infraware.co.uk
              </a>
            </p>
          </DialogContent>
          <DialogActions>
            <Button
              onClick={() => {
                this.setState({ aboutDialogOpen: false });
              }}
            >
              OK
            </Button>
          </DialogActions>
        </Dialog>
        <Dialog
          open={this.state.legalDialogOpen}
          onClose={() => {
            this.setState({ legalDialogOpen: false });
          }}
        >
          <DialogContent>
            <p>
              All information and content on this site is the property of
              Infraware. The content is protected by copyright laws, trademark
              and design rights. The information on this site is confidential,
              privileged and only for the information of the intended recipient
              and may not be used, published or redistributed without the prior
              written consent of Infraware.
            </p>
          </DialogContent>
          <DialogActions>
            <Button
              onClick={() => {
                this.setState({ legalDialogOpen: false });
              }}
            >
              OK
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}
