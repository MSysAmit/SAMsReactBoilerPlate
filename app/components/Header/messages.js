/*
 * HomePage Messages
 *
 * This contains all the text for the HomePage component.
 */
import { defineMessages } from 'react-intl';

export const scope = 'boilerplate.components.Header';

export default defineMessages({
  home: {
    id: `${scope}.home`,
    defaultMessage: 'Home',
  }
  ,
  globalview: {
    id: `${scope}.global-view`,
    defaultMessage: 'Global View',
  },
  features: {
    id: `${scope}.features`,
    defaultMessage: 'Features',
  },
  lite: {
    id: `${scope}.lite`,
    defaultMessage: 'Lite',
  },
  downloads: {
    id: `${scope}.downloads`,
    defaultMessage: 'Downloads',
  },
  contact: {
    id: `${scope}.contact`,
    defaultMessage: 'Contact',
  },
  signup: {
    id: `${scope}.signup`,
    defaultMessage: 'Sign up',
  },
  signin: {
    id: `${scope}.signin`,
    defaultMessage: 'Sign in',
  },
});
