/*
 * HomePage Messages
 *
 * This contains all the text for the HomePage component.
 */
import { defineMessages } from 'react-intl';

export const scope = 'boilerplate.utils';

export default defineMessages({
  email_label: {
    id: `${scope}.email_label`,
    defaultMessage: 'Email Address',
  },
  name_label: {
    id: `${scope}.name_label`,
    defaultMessage: 'Name',
  },
  org_label: {
    id: `${scope}.org_label`,
    defaultMessage: 'Organisation',
  },
  pass_label: {
    id: `${scope}.pass_label`,
    defaultMessage: 'Password',
  },
  signin: {
    id: `${scope}.signin`,
    defaultMessage: 'Sign in',
  },
  signup: {
    id: `${scope}.signup`,
    defaultMessage: 'Sign up',
  },
  samsuggestion: {
    id: `${scope}.samsuggestion`,
    defaultMessage: 'Already on SAMSentry?',
  },
  forgotPassword: {
    id: `${scope}.forgotPassword`,
    defaultMessage: 'Forgot password?',
  },
  samsuggestions: {
    id: `${scope}.samsuggestions`,
    defaultMessage: 'Not on SAMSentry yet?',
  },
  fieldErrorMsg: {
    id: `${scope}.fieldErrorMsg`,
    defaultMessage: 'This field is required'
  },
  continueMsg: {
    id: `${scope}.continueMsg`,
    defaultMessage: 'Continue with'
  }
});
