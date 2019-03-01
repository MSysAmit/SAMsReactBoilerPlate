import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import BusinessIcon from '@material-ui/icons/Business';
import CloudIcon from '@material-ui/icons/Cloud';
import ViewModuleIcon from '@material-ui/icons/ViewModule';
import LanguageIcon from '@material-ui/icons/Language';
import PeopleIcon from '@material-ui/icons/People';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import Link from './Link';

const styles = {
  root: {
    width: 1000,
  },
};

const StyledBottomNavigationAction = withStyles({
  root: {
    color: '#dae1e7',
    'margin-left': '23px',
  },
})(BottomNavigationAction);
const StyledBottomNavigation = withStyles({
  root: {
    background: '#263238',
    height: '57px',
    'margin-left': '25px',
    'padding-left': '53px',
  },
})(BottomNavigation);

class OrgHeader extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <div>
        <StyledBottomNavigation
          value={value}
          onChange={this.handleChange}
          showLabels
          className={classes.root}
        >
          <StyledBottomNavigationAction
            component={Link}
            to="/admin/orgs"
            label={<FormattedMessage {...messages.orgs} />}
            value="organisations"
            icon={<BusinessIcon />}
          />
          <StyledBottomNavigationAction
            component={Link}
            to="/admin/development"
            label={<FormattedMessage {...messages.dev} />}
            value="development"
            icon={<ViewModuleIcon />}
          />
          <StyledBottomNavigationAction
            component={Link}
            to="/admin/global-view"
            label={<FormattedMessage {...messages.globalView} />}
            value="globalView"
            icon={<LanguageIcon />}
          />
          <StyledBottomNavigationAction
            component={Link}
            to="/admin/cloud-drive"
            label={<FormattedMessage {...messages.cloud} />}
            value="cloudDrive"
            icon={<CloudIcon />}
          />
          <StyledBottomNavigationAction
            component={Link}
            to="/admin/users"
            label={<FormattedMessage {...messages.users} />}
            value="users"
            icon={<PeopleIcon />}
          />
        </StyledBottomNavigation>
      </div>
    );
  }
}

OrgHeader.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(OrgHeader);
