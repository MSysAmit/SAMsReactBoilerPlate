import React from 'react';

import { withStyles } from '@material-ui/core/styles';

import TextField from '@material-ui/core/TextField';

import FilterListIcon from '@material-ui/icons/FilterList';

export default withStyles({
  shrink: {
    transform: 'translate(0, 10px) scale(0.75)',
    transformOrigin: 'top left',
  },
})(({ classes, label, changeFilter }) => (
  <TextField
    InputLabelProps={{
      style: { marginTop: '-16px', fontSize: '12px' },
      classes,
    }}
    InputProps={{
      style: { marginTop: 0 },
      endAdornment: <FilterListIcon color="primary" />,
    }}
    label={label}
    onChange={event => changeFilter(event.target.value)}
  />
));
