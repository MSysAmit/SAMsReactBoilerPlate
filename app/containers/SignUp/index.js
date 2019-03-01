import React from 'react';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import styled from 'styled-components'

import messages from '../../utils/messages';

const StyledTextField = styled(TextField)`

label {
  font-size: 1.15vw;
}
input {
  padding-bottom: 15px;
}
div {
  margin-bottom: 2%;
}
`;
const Div = styled.div`
text-align: center;
    width: 23vw;
    margin: 5% 40% 5%;
    `;
const StyledButton = styled(Button)`
  && {
    background-color: #607d8b;
    color: #fff;
    margin: 3vh 0 5vh;
    padding: 9px;
    font-size: 1vw;
  }
  &&:hover {
    background-color: #455a64;
  }
`;

const Small = styled.small`
color: #606f7b;
font-size: 0.9vw;
`;
const LinkStyle = styled(Link)`
  && {
    text-decoration: none;
color: #333;
  }
  &&:hover {
    color: #66bb6a;
  }
`;
const Label = styled.label`
font-size: 1.15vw;
`;

class SignUp extends React.Component {
  state = {
    signupDialogOpen: false
  };
  render() {
    return (
      <div onKeyUp={this.handleKeyUp}>
        <Div>
          <StyledTextField
            fullWidth
            margin="normal"
            label={<FormattedMessage {...messages.email_label} />}
            value={this.state.email}
            error={Boolean(this.state.emailError)}
            helperText={this.state.emailError}
            onChange={event =>
              this.setState({
                email: event.target.value.toLowerCase().trim(),
                emailError: event.target.value.trim() ? '' : <FormattedMessage {...messages.fieldErrorMsg} />
              })
            }
          />
          <StyledTextField
            fullWidth
            margin="normal"
            label={<FormattedMessage {...messages.name_label} />}
            value={this.state.name}
            error={Boolean(this.state.nameError)}
            helperText={this.state.nameError}
            onChange={event =>
              this.setState({
                name: event.target.value,
                nameError: event.target.value ? '' : <FormattedMessage {...messages.fieldErrorMsg} />
              })
            }
          />
          <StyledTextField
            fullWidth
            margin="normal"
            label={<FormattedMessage {...messages.org_label} />}
            value={this.state.org}
            error={Boolean(this.state.orgError)}
            helperText={this.state.orgError}
            onChange={event =>
              this.setState({
                org: event.target.value,
                orgError: event.target.value ? '' : <FormattedMessage {...messages.fieldErrorMsg} />
              })
            }
          />
          <StyledButton
            variant="raised"
            fullWidth
            disabled={this.state.signupButtonDisabled}
            onClick={this.signup}
          >
           <FormattedMessage {...messages.signup} />
          </StyledButton>

          <Small>
          <FormattedMessage {...messages.samsuggestion} /> <LinkStyle to="/signin"><FormattedMessage {...messages.signin} /></LinkStyle>
          </Small>
        </Div>

        <Dialog
          open={this.state.signupDialogOpen}
          onClose={() => this.setState({ signupDialogOpen: false })}
        >
          <DialogContent>
            <div>Thank you!</div>
            <div>
              Your request will be passed to one of our expert advisors who will be in contact as
              soon as possible.
            </div>
          </DialogContent>
          <DialogActions>
            <Button color="primary" onClick={() => this.setState({ signupDialogOpen: false })}>
              OK
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default SignUp;