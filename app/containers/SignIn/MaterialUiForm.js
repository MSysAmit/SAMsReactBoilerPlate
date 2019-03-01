import React from 'react';
import { Form, Field, reduxForm, reducer } from 'redux-form/immutable';
import TextField from '@material-ui/core/TextField';
import injectReducer from 'utils/injectReducer';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import validate from './validate';
import Button from '@material-ui/core/Button';
import styled from 'styled-components';
import saga from './saga';
import injectSaga from 'utils/injectSaga';
import { FormattedMessage } from 'react-intl';
import messages from '../../utils/messages';

const StyledButton = styled(Button)`
  && {
    background-color: #607d8b;
    color: #fff;
    margin: 5vh 0 6vh;
    padding: 9px;
    font-size: 1vw;
  }
  &&:hover {
    background-color: #455a64;
  }
`;

const renderTextField = ({
  input,
  label,
  onChange,
  meta: { touched, error },
  ...custom
}) => (
  <TextField
    label={label}
    helperText={touched && error}
    {...input}
    {...custom}
  />
);

const MaterialUiForm = props => {
  const { handleSubmit } = props;
  return (
    <Form onSubmit={handleSubmit}>
      <div>
        <Field
          name="email"
          component={renderTextField}
          label={<FormattedMessage {...messages.email_label} />}
        />
      </div>
      <div>
        <Field
          name="password"
          type="password"
          component={renderTextField}
          label={<FormattedMessage {...messages.pass_label} />}
        />
      </div>
      <StyledButton type={'submit'}>{<FormattedMessage {...messages.signin} />}</StyledButton>
    </Form>
  );
};

export function mapDispatchToProps(dispatch) {
  return {};
}

const mapStateToProps = createStructuredSelector({});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'form', reducer });
const withSaga = injectSaga({ key: 'form', saga });

const MuiForm = compose(
  withConnect,
  withReducer,
  withSaga,
)(MaterialUiForm);

export default reduxForm({
  form: 'MuiForm',
  validate,
})(MuiForm);
