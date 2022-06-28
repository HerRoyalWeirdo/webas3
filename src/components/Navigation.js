import { React } from 'react';
// other import statements
import { AppBar, Toolbar, Typography } from '@material-ui/core';
export default function Navigation({ title }) {
    return (
      <AppBar>
        <Toolbar>
          <Typography variant="h4">{title}</Typography>
        </Toolbar>
      </AppBar>
    );
}