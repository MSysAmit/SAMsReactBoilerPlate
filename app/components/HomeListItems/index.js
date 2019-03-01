import React from 'react';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';

import SvgIcon from '@material-ui/core/SvgIcon';

import { connect } from 'react-redux';
import { compose } from 'redux';
import injectReducer from 'utils/injectReducer';
import reducer from './reducer';

//import ExpandLessIcon from '@material-ui/icons/ExpandLessIcon';

const ExpandLessIcon = props => (
  <SvgIcon {...props}>
    <path d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z" />
  </SvgIcon>
);

//import ExpandMoreIcon from '@material-ui/icons/ExpandMoreIcon';

const ExpandMoreIcon = props => (
  <SvgIcon {...props}>
    <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z" />
  </SvgIcon>
);

// class AppLandingHomeListItem extends React.Component {
//   render() {
//     console.log('openIdx in render', this.props);
//     return (
//       <div>
//         <ListItem
//           onClick={() => {
//             console.log('Changing:', this.props);
//             this.props.onChange(this.props.idx);
//           }}
//         >
//           {this.props.mainItemIcon}
//           <ListItemText primary={this.props.mainItemText} disableTypography />
//           {/* {(this.props.openedIdx === this.props.idx) ? <ExpandLessIcon /> : <ExpandMoreIcon />} */}
//           {this.props.openedIdx === this.props.idx && this.props.toggle ? (
//             <ExpandLessIcon />
//           ) : (
//             <ExpandMoreIcon />
//           )}
//           {/* {this.props.toggle ? <ExpandLessIcon /> : <ExpandMoreIcon />} */}
//         </ListItem>
//         <Collapse
//           in={this.props.openedIdx == this.props.idx && this.props.toggle}
//           timeout="auto"
//           unmountOnExit
//         >
//           <List>
//             {this.props.nestedItems.map((item, idx) => (
//               <ListItem key={idx}>
//                 <ListItemText inset primary={item} disableTypography />
//               </ListItem>
//             ))}
//           </List>
//         </Collapse>
//       </div>
//     );
//   }
// }


class AppLandingHomeListItem extends React.Component {
  state = { open: false };

  handleClick = () => {
    this.setState({ open: !this.state.open });
  };

  render() {
    return (
      <div>
        <ListItem button onClick={this.handleClick}>
          {this.props.mainItemIcon}
          <ListItemText primary={this.props.mainItemText} disableTypography />
          {this.state.open ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </ListItem>
        <Collapse in={this.state.open} timeout="auto" unmountOnExit>
          <List component="div">
            {
              this.props.nestedItems.map((item, idx) =>
                <ListItem key={idx} dense>
                  <ListItemText inset className="ml-3" primary={item} disableTypography />
                </ListItem>
              )
            }
          </List>
        </Collapse>
      </div>
    );
  }
}

export function mapDispatchToProps(dispatch) {
  return {
    onExpand: evt => dispatch(expandRequest(props.idx)),
    onCollapse: evt => dispatch(collapseRequest(props.idx)),
  };
}

export function mapStateToProps(state){
  return {
    openedIdx: state.openedIdx,
  }
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'homelistreducer', reducer });

// export default compose(
//   withReducer,
//   withConnect,
// )(AppLandingHomeListItem);

export default AppLandingHomeListItem;