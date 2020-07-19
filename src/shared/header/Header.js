import React from 'react';
import { AppBar,
   Toolbar,
    IconButton,
     Typography,
      Button 
    } from '@material-ui/core';
import { Link} from 'react-router-dom'
import MenuIcon from '@material-ui/icons/Menu';
import SettingsIcon from '@material-ui/icons/Settings';
import { Component } from 'react';
import DropDownMenu from '../../components/dropDownMenu/DropDownMenu';


const Header = (props) => {
return (
    <AppBar position="static">
      
  <Toolbar>
  <DropDownMenu />
    <IconButton edge="start" color="inherit" aria-label="menu">
  
      </IconButton>
    <Typography
      style={{
      flexGrow: 1,
    }}
    variant="h6">
        <span  role="img" aria-label="popcorn!">
               🍿 📽️ 🍿 🎞️ 🍿 🥤  
          </span>
          <Link to="/"> Movie List W4  </Link>  🥤 🎬 🎦 🎬 🎥 🎬
        </Typography>

        <span>
        <a href="https://www.imdb.com/news/movie/?ref_=nv_nw_mv">
         <Button>Movie News</Button>
         </a>
         </span>
         
        {props.user && <span>{props.user.userName}</span>}
     {props.user && (


       <span>
       <IconButton color="inherit">
         <Link to="/settings">
         <SettingsIcon />
         </Link>
         </IconButton>

       <Button onClick={props.onLogout} color="inherit">
       Logout
       </Button>
       </span>
     )}
  </Toolbar>
  </AppBar>
)
}


 export default Header;