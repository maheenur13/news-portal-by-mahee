import logo from './logo.svg';
import './App.css';
import React, { createContext, useState } from "react";
import Header from './Components/Header/Header';
import NavBar from './Components/Header/NavBar/NavBar';
import AllNews from './Components/AllNews/AllNews';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import AddNews from './Components/Admin/AddNews/AddNews';
import { Alert } from '@material-ui/lab';
import AlertBar from './Components/Alert/AlertBar';
// import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';
import { Box } from '@mui/system';
import ContactForm from './Components/ContactForm/ContactForm';

export const userContext = createContext();
function App() {
  const [open, setOpen] = useState(true);
  const [category, setCategory] = useState('business')
  const [loggedInAdmin, setLoggedInAdmin] = useState([]);
  const [newAllNews,setNewAllNews] = useState([])
  return (
    <Router>
      <userContext.Provider value={{categoryValue:[category, setCategory], loggedInAdminInfo:[loggedInAdmin,setLoggedInAdmin],allNewsCollection:[newAllNews,setNewAllNews]}}>
        <div >
          <NavBar></NavBar>
         
          <Box className="my-2">
            <Collapse in={open}>
              <Alert
                variant="filled"
                severity="warning"
                action={
                  <IconButton
                    aria-label="close"
                    color="inherit"
                    size="small"
                    onClick={() => {
                      setOpen(false);
                    }}
                  >
                    <CloseIcon fontSize="inherit" />
                  </IconButton>
                }
                sx={{ mb: 2 }}
              >
                 <span >This Site is under Development. You may have some errors!</span>
              </Alert>
            </Collapse>

          </Box>

          <Switch>
            <Route exact path="/">
              <Header></Header>
              <AddNews></AddNews>
              <AllNews></AllNews>
              <ContactForm></ContactForm>
            </Route>
            <Route path="/test">
              <h1>hello</h1>
            </Route>
          </Switch>

        </div>
      </userContext.Provider>
    </Router>
  );
}

export default App;
