import React, { Fragment } from 'react';
import { FormattedMessage } from 'react-intl';
import messages from '../../utils/messages';
import styled from 'styled-components';
import officeLogo from '../../../assets/media/office365-logo.png';
import gsuiteLogo from '../../../assets/media/gsuite-logo.png';
import { changeEmail, changePassword, logedInRequest } from './actions';
import { createStructuredSelector } from 'reselect';
import { makeSelectEmail, makeSelectPassword } from './selectors';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import { connect } from 'react-redux';
import { compose } from 'redux';
import reducer from './reducer';
import saga from './saga';
import MaterialUiForm from './MaterialUiForm';
import Div from './Div';
import Small from './Small';
import Button from './Button';
import Link from './Link';

// import Span from './Span';
import Img from './Img';

const Span = styled.span`
  color: dimgrey;
  font-size: 1vw;
`;
const ImgGSuit = styled.img`
  margin-bottom: 6%;
  width: 28%;
  margin-left: 5%;
`;

const DivOr = styled.div`
  margin: 5%;
  color: dimgrey;
  font-size: 1.1vw;
`;
const DivForget = styled.div`
  margin-bottom: 5%;
`;
class SignIn extends React.Component {
  render() {
    return (
      <Fragment>
        <div>
          <Div>
            <Button fullWidth onClick={() => this.goTo('/azure')}>
              <Span>
                <FormattedMessage {...messages.continueMsg} />
              </Span>
              <Img src={officeLogo} />
            </Button>

            <Button fullWidth onClick={() => this.goTo('/google')}>
              <Span>
                <FormattedMessage {...messages.continueMsg} />
              </Span>
              <ImgGSuit src={gsuiteLogo} />
            </Button>
            <DivOr>OR</DivOr>
            <MaterialUiForm onSubmit={this.props.onSubmitForm} />
            <DivForget>
              <Link to="/pass">
                <small>
                  <FormattedMessage {...messages.forgotPassword} />
                </small>
              </Link>
            </DivForget>

            <Small>
              <FormattedMessage {...messages.samsuggestions} />{' '}
              <Link to="/signup">
                <FormattedMessage {...messages.signup} />
              </Link>
            </Small>
          </Div>
        </div>
      </Fragment>
    );
  }
}

export function mapDispatchToProps(dispatch) {
  return {
    onChangeEmail: evt => dispatch(changeEmail(evt.target.value)),
    onChangePassword: evt => dispatch(changePassword(evt.target.value)),
    onSubmitForm: evt => {
      console.log('Submitting signin', evt);
      const email = evt._root.entries[0][1];
      const password = evt._root.entries[1][1];
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      dispatch(logedInRequest(email, password));
    },
  };
}

const mapStateToProps = createStructuredSelector({
  email: makeSelectEmail(),
  password: makeSelectPassword(),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'signin', reducer });
const withSaga = injectSaga({ key: 'signin', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(SignIn);
