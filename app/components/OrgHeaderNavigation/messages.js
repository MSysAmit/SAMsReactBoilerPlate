/*
 * Organisation header Messages
 *
 * This contains all the text for the Organisation header component.
 */
import { defineMessages } from 'react-intl';

export const scope = 'boilerplate.components.OrgHeader';

export default defineMessages({
  orgs: {
    id: `${scope}.orgs`,
    defaultMessage: 'Organisations',
  },
  dev: {
    id: `${scope}.dev`,
    defaultMessage: 'Development',
  },
  globalView: {
    id: `${scope}.globalView`,
    defaultMessage: 'Global View',
  },
  cloud: {
    id: `${scope}.cloud`,
    defaultMessage: 'Cloud Drive',
  },
  users: {
    id: `${scope}.users`,
    defaultMessage: 'Users',
  },
});
