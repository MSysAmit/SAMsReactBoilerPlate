import React from 'react';

import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import Avatar from '@material-ui/core/Avatar';

import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import ModeEditIcon from '@material-ui/icons/Edit';

export default class OrgsTableRow extends React.PureComponent {
  render() {
    console.log('props in OrgsTableRow', this.props);
    let {
      modules,
      org,
      history,
      onEditOrgDialogOpen,
      onRemoveOrgDialogOpen,
    } = this.props;

    return (
      <TableRow
        hover
        className="link"
        onClick={() => history.push('/org/' + org._id)}
      >
        <TableCell padding="dense">{org.scope}</TableCell>
        <TableCell padding="dense">{org.name}</TableCell>
        <TableCell padding="dense" className="text-center">
          {typeof org.docsLatestCompletion !== 'undefined'
            ? org.docsLatestCompletion === 100
              ? '✓'
              : org.docsLatestCompletion + '%'
            : 'N/A'}
        </TableCell>
        <TableCell padding="dense" className="text-center">
          {typeof org.docsLatestCompliance !== 'undefined' ? (
            <div className="flex-row justify-center">
              <Avatar
                style={{
                  // backgroundColor: utils.getComplianceColor(
                  // backgroundColor: utils.getComplianceColor(
                  //   org.docsLatestCompliance,
                  // ),
                  color: 'whitesmoke',
                  fontSize: 'inherit',
                  width: 36,
                  height: 36,
                }}
              >
                {org.docsLatestCompliance === 100
                  ? '✓'
                  : org.docsLatestCompliance + '%'}
              </Avatar>
            </div>
          ) : (
            'N/A'
          )}
        </TableCell>
        {// (utils.user.isGlobalAdmin || utils.user.isScopePowerAdmin) &&
        modules.map((module, idx) => (
          <TableCell
            key={idx}
            padding="none"
            className="text-center"
            style={{ width: 60 }}
          >
            {org.modules && org.modules.includes(module) ? (
              <span style={{ color: window.colorGood }}>✓</span>
            ) : (
              <span style={{ color: window.colorBad }}>X</span>
            )}
          </TableCell>
        ))}
        {
          // (utils.user.isGlobalAdmin || utils.user.isScopePowerAdmin) &&
          <TableCell>
            <Tooltip title="Edit">
              <IconButton
                onClick={event => {
                  event.stopPropagation();
                  onEditOrgDialogOpen(org);
                }}
              >
                <ModeEditIcon color="primary" />
              </IconButton>
            </Tooltip>
            <Tooltip title="Remove">
              <IconButton
                onClick={event => {
                  event.stopPropagation();
                  onRemoveOrgDialogOpen(org);
                }}
              >
                <DeleteForeverIcon color="primary" />
              </IconButton>
            </Tooltip>
          </TableCell>
        }
      </TableRow>
    );
  }
}
