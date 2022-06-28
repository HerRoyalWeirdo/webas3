//import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import Navigation from './components/Navigation';
import { createGradientItem } from './api';

import {Paper, Grid, Button, Typography, TextField, makeStyles} from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    marginTop: 80,
    margin: 20,
    flexGrow: 1
  },
  list: {
    marginTop: 20
  }
});

function App() {
  //return <Navigation title="Broken Rainbow app" />


  const classes = useStyles();
  const [gradDetail, setgradDetail] = useState('');
  const [gradients, setgrad] = useState([]);

  function handlegradDetailChange(event) {
    console.log(event.target.value);
    setgradDetail(event.target.value);
  }
  function handleSubmit(event) {
    event.preventDefault();
    createGradientItem(gradDetail).then(res => {
      console.log('Rainbow Pain details added to the database');
    });
    resetInputField();
  }
  function resetInputField() {
    setgradDetail('');
  }

  return (
    <>
      <Navigation title="Broken Rainbow app" />
      <Grid container className={classes.root} spacing={3}>
        <Grid item xs={12} md={6}>
          <Paper style={{ margin: 16, padding: 16 }}>
            <Grid container>
              <Grid xs={10} md={11} item style={{ paddingRight: 16 }}>
                <TextField
                  type="text"
                  name={gradDetail}
                  value={gradDetail}
                  placeholder="Add your Pain here"
                  fullWidth
                  onChange={handlegradDetailChange}/>
              </Grid>
              <Grid xs={2} md={1} item>
                <Button
                  fullWidth
                  color="secondary"
                  variant="outlined"
                  onClick={handleSubmit}>
                  Add
                </Button>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={12} md={5} className={classes.list}>
          <Typography>List of Pain</Typography>
        </Grid>
      </Grid>
        
          {/* <Typography variant="p">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Reprehenderit itaque iusto perferendis consectetur culpa
            accusantium! Dolor, nemo natus ducimus esse minus, ut laborum
            excepturi deserunt recusandae praesentium eligendi consectetur
            labore.
          </Typography> */}
       
    </>
  );

  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );
  
}

export default App;
