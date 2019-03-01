import React, { Component } from 'react';
import { debounce, orderBy } from 'lodash';
import {
  fetchOrgs,
  createOrg,
  updateOrg,
  removeOrg,
  editOrgDialogOpenMethod,
  editOrgScopeErrorMethod,
} from './actions';
import { connect, dispatch } from 'react-redux';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TablePagination from '@material-ui/core/TablePagination';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Checkbox from '@material-ui/core/Checkbox';
import { withStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';
import OrgHeader from '../../components/OrgHeader';
import OrgsTableRow from './OrgsTableRow';
import TablePaginationActions from '../../components/TablePaginationActions';
import TableHeadFilter from '../../components/TableHeadFilter';
import injectReducer from 'utils/injectReducer';
import reducer from './reducer';
import { compose } from 'redux';
import styled from 'styled-components';
import { createStructuredSelector } from 'reselect';
import {
  makeSelectOrgs,
  makeSelectLoading,
  makeSelectError,
  makeSelectEditOrgDialogOpen,
} from './selectors';

const StyledPlusButton = withStyles({
  root: {
    position: 'fixed',
    right: '30px',
    bottom: '30px',
    'z-index': 1,
    backgroundColor: '#455a64',
  },
})(Button);

const StyledHeaderDiv = styled.div`
  margin: 5%;
  color: dimgrey;
  font-size: 1.1vw;
`;
const DivHead = styled.div`
  box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.12);
  width: 90%;
  margin: auto;
  min-height: 100vh;
  margin-bottom: 1%;
  div {
    box-shadow: none !important;
  }
`;
const modules = [
  'Organisation & Structure',
  'SAM',
  'SAM Lite',
  'Cloud',
  'Audit Watch',
  'Audit Watch Trial',
  'Cloud Drive',
  'Licence Reviews',
];

class Orgs extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <OrgHeader title="Organisations" />
        <DivHead>
          <Paper>
            {' '}
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell padding="dense">
                    <TableHeadFilter label="Scope" />
                  </TableCell>
                  <TableCell padding="dense">
                    <TableHeadFilter label="Name" />
                  </TableCell>
                  <TableCell padding="dense">Completion</TableCell>
                  <TableCell padding="dense">Alignment</TableCell>

                  {modules.map((module, idx) => (
                    <TableCell key={idx} padding="none" style={{ width: 60 }}>
                      {(() => {
                        switch (module) {
                          case 'SAM':
                            return 'SAM Full';
                          case 'Cloud':
                            return 'Cloud Opt';
                          case 'Organisation & Structure':
                            return 'Org & Str';
                          case 'Audit Watch':
                            return 'GV';
                          case 'Audit Watch Trial':
                            return 'GV Trial';
                          case 'Cloud Drive':
                            return 'CD';
                          case 'Licence Reviews':
                            return 'LW';
                          default:
                            return module;
                        }
                      })()}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody />
            </Table>
            {
              <StyledPlusButton
                variant="fab"
                color="primary"
                onClick={() => this.props.editOrgDialogOpenMethod(true)}
              >
                <AddIcon />
              </StyledPlusButton>
            }
          </Paper>
        </DivHead>
        <Dialog open={this.props.editOrgDialogOpen}>
          <DialogContent className="flex-col">
            <TextField
              select
              margin="normal"
              label="Scope"
              // value={this.props.editOrgName}
              // error={Boolean(this.props.editOrgScopeError)}
              // helperText={this.props.editOrgScopeError}
              // onChange={e => onChange(e.target.value)}
              // onChange={event =>
              //   this.setState({
              //     editOrgName: event.target.value,
              //     editOrgNameError: event.target.value
              //       ? ''
              //       : 'This field is required',
              //   })
              // }
            >
              {['ORIGIN', 'CAPITA ITS', 'TRUSTMARQUE'].map((scope, idx) => (
                <MenuItem key={idx} value={scope}>
                  {scope}
                </MenuItem>
              ))}
            </TextField>
            <TextField margin="normal" label="Name" />
            <div className="flex-row flex-wrap mt-4">
              {modules.map((module, idx) => (
                <div key={idx} className="w-1/2 flex-row items-center">
                  <Checkbox color="primary" />
                  <div>
                    {(() => {
                      switch (module) {
                        case 'SAM':
                          return 'SAM Full';
                        case 'Cloud':
                          return 'Cloud Optimisation';
                        case 'Licence Reviews':
                          return 'Licence Workbench';
                        case 'Audit Watch':
                          return 'Global View';
                        case 'Audit Watch Trial':
                          return 'Global View Trial';
                        default:
                          return module;
                      }
                    })()}
                  </div>
                </div>
              ))}
            </div>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => this.props.editOrgDialogOpenMethod(false)}>
              Cancel
            </Button>
            <Button
              // onClick={() => {
              //   if (!this.props.editOrgScope) {
              //     this.props.editOrgScopeErrorMethod('This field is required');
              //     return;
              //   }
              // }}
              // onClick={() => {
              //   if (!this.props.editOrgScope) {
              //     this.setState({
              //       editOrgScopeError: 'This field is required',
              //     });
              //     return;
              //   }

              //   if (!this.props.editOrgName) {
              //     this.setState({ editOrgNameError: 'This field is required' });
              //     return;
              //   }

              //   if (
              //     orgs.find(
              //       org =>
              //         org._id !== this.state.editOrgID &&
              //         org.name.toLowerCase() ===
              //           this.state.editOrgName.toLowerCase(),
              //     )
              //   ) {
              //     this.setState({
              //       editOrgNameError:
              //         'Organization with this name already exists',
              //     });
              //     return;
              //   }

              //   this.onSaveOrg(this.state.editOrgID, {
              //     scope: this.state.editOrgScope,
              //     name: this.state.editOrgName,
              //     modules: this.state.editOrgModules,
              //   });
              // }}
            >
              Save
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onFetchOrgs: () => dispatch(fetchOrgs()),
    oncreateOrg: params => dispatch(createOrg(params)),
    editOrgDialogOpenMethod: val => dispatch(editOrgDialogOpenMethod(val)),
    onChange: value => {
      dispatch(changeAction(value));
    },
  };
};

const mapStateToProps = createStructuredSelector({
  orgs: makeSelectOrgs(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
  editOrgDialogOpen: makeSelectEditOrgDialogOpen(),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'orgs', reducer });

export default compose(
  withReducer,
  // withSaga,
  withConnect,
)(Orgs);
