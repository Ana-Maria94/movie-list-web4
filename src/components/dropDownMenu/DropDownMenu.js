import MenuIcon from '@material-ui/icons/Menu'
/*
import React, { Component } from 'react';

import { Button } from '@material-ui/core'
import styles from './DropDownMenu.module.css'


class DropDownMenu extends Component {
  constructor() {
    super();
    
    this.state = {
      showMenu: false,
    }
    
    this.showMenu = this.showMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
}
  
  showMenu(event) {
    event.preventDefault();
    
    this.setState({ showMenu: true }, () => {
        document.addEventListener('click', this.closeMenu);
      });
    }

    closeMenu(event) {
    
        if (!this.dropdownMenu.contains(event.target)) {
          
          this.setState({ showMenu: false }, () => {
            document.removeEventListener('click', this.closeMenu);
          });  
          
        }
      }

  render() {
    return (
      <div>
        <Button className={styles.DropDownMenu} onClick={this.showMenu}>
        <MenuIcon />
        </Button>
        
        {
          this.state.showMenu
            ? (
              <div 
              className="menu, carousel"
              ref={(element) => {
                this.dropdownMenu = element;
              }}
              >
                <a href="https://www.imdb.com/search/title/?genres=action&title_type=feature&explore=genres&pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=facfbd0c-6f3d-4c05-9348-22eebd58852e&pf_rd_r=3PH7A6SB91C73TNH3KP1&pf_rd_s=center-6&pf_rd_t=15051&pf_rd_i=genre&ref_=ft_gnr_mvpop_1">
                <Button> Action </Button>
                </a>
                <a href="https://www.imdb.com/search/title/?genres=adventure&title_type=feature&explore=genres&pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=facfbd0c-6f3d-4c05-9348-22eebd58852e&pf_rd_r=3PH7A6SB91C73TNH3KP1&pf_rd_s=center-6&pf_rd_t=15051&pf_rd_i=genre&ref_=ft_gnr_mvpop_2">
                <Button> Adventure </Button>
                </a>
                <a href="https://www.imdb.com/search/title/?genres=animation&title_type=feature&explore=genres&pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=facfbd0c-6f3d-4c05-9348-22eebd58852e&pf_rd_r=3PH7A6SB91C73TNH3KP1&pf_rd_s=center-6&pf_rd_t=15051&pf_rd_i=genre&ref_=ft_gnr_mvpop_3">
                <Button> Animation </Button>
                </a>
                <a href="https://www.imdb.com/search/title/?genres=biography&title_type=feature&explore=genres&pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=facfbd0c-6f3d-4c05-9348-22eebd58852e&pf_rd_r=3PH7A6SB91C73TNH3KP1&pf_rd_s=center-6&pf_rd_t=15051&pf_rd_i=genre&ref_=ft_gnr_mvpop_4">
                <Button> Biography </Button>
                </a>
                <a href="https://www.imdb.com/search/title/?genres=comedy&title_type=feature&explore=genres&pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=facfbd0c-6f3d-4c05-9348-22eebd58852e&pf_rd_r=3PH7A6SB91C73TNH3KP1&pf_rd_s=center-6&pf_rd_t=15051&pf_rd_i=genre&ref_=ft_gnr_mvpop_5">
                <Button> Comedy </Button>
                </a>
                <a href="https://www.imdb.com/search/title/?genres=crime&title_type=feature&explore=genres&pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=facfbd0c-6f3d-4c05-9348-22eebd58852e&pf_rd_r=3PH7A6SB91C73TNH3KP1&pf_rd_s=center-6&pf_rd_t=15051&pf_rd_i=genre&ref_=ft_gnr_mvpop_6">
                <Button> Crime </Button>
                </a>
                <a href="https://www.imdb.com/search/title/?genres=documentary&explore=genres&pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=facfbd0c-6f3d-4c05-9348-22eebd58852e&pf_rd_r=3PH7A6SB91C73TNH3KP1&pf_rd_s=center-6&pf_rd_t=15051&pf_rd_i=genre&ref_=ft_gnr_mvpop_7">
                <Button> Documentary </Button>
                </a>
                <a href="https://www.imdb.com/search/title/?genres=drama&title_type=feature&explore=genres&pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=facfbd0c-6f3d-4c05-9348-22eebd58852e&pf_rd_r=3PH7A6SB91C73TNH3KP1&pf_rd_s=center-6&pf_rd_t=15051&pf_rd_i=genre&ref_=ft_gnr_mvpop_8">
                <Button> Drama </Button>
                </a>
                <a href="https://www.imdb.com/search/title/?genres=family&title_type=feature&explore=genres&pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=facfbd0c-6f3d-4c05-9348-22eebd58852e&pf_rd_r=3PH7A6SB91C73TNH3KP1&pf_rd_s=center-6&pf_rd_t=15051&pf_rd_i=genre&ref_=ft_gnr_mvpop_9">
                <Button> Family </Button>
                </a>
                <a href="https://www.imdb.com/search/title/?genres=fantasy&title_type=feature&explore=genres&pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=facfbd0c-6f3d-4c05-9348-22eebd58852e&pf_rd_r=3PH7A6SB91C73TNH3KP1&pf_rd_s=center-6&pf_rd_t=15051&pf_rd_i=genre&ref_=ft_gnr_mvpop_10">
                <Button> Fantasy </Button>
                </a>
                <a href="https://www.imdb.com/search/title/?genres=film-noir&title_type=feature&explore=genres&pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=facfbd0c-6f3d-4c05-9348-22eebd58852e&pf_rd_r=3PH7A6SB91C73TNH3KP1&pf_rd_s=center-6&pf_rd_t=15051&pf_rd_i=genre&ref_=ft_gnr_mvpop_11">
                <Button> Film Noir </Button>
                </a>
                <a href="https://www.imdb.com/search/title/?genres=history&title_type=feature&explore=genres&pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=facfbd0c-6f3d-4c05-9348-22eebd58852e&pf_rd_r=3PH7A6SB91C73TNH3KP1&pf_rd_s=center-6&pf_rd_t=15051&pf_rd_i=genre&ref_=ft_gnr_mvpop_12">
                <Button> History </Button>
                </a>
                <a href="https://www.imdb.com/search/title/?genres=horror&title_type=feature&explore=genres&pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=facfbd0c-6f3d-4c05-9348-22eebd58852e&pf_rd_r=3PH7A6SB91C73TNH3KP1&pf_rd_s=center-6&pf_rd_t=15051&pf_rd_i=genre&ref_=ft_gnr_mvpop_13">
                <Button> Horror </Button>
                </a>
                <a href="https://www.imdb.com/search/title/?genres=music&title_type=feature&explore=genres&pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=facfbd0c-6f3d-4c05-9348-22eebd58852e&pf_rd_r=3PH7A6SB91C73TNH3KP1&pf_rd_s=center-6&pf_rd_t=15051&pf_rd_i=genre&ref_=ft_gnr_mvpop_14">
                <Button> Music </Button>
                </a>
                <a href="https://www.imdb.com/search/title/?genres=musical&title_type=feature&explore=genres&pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=facfbd0c-6f3d-4c05-9348-22eebd58852e&pf_rd_r=3PH7A6SB91C73TNH3KP1&pf_rd_s=center-6&pf_rd_t=15051&pf_rd_i=genre&ref_=ft_gnr_mvpop_15">
                <Button> Musical </Button>
                </a>
                <a href="https://www.imdb.com/search/title/?genres=mystery&title_type=feature&explore=genres&pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=facfbd0c-6f3d-4c05-9348-22eebd58852e&pf_rd_r=3PH7A6SB91C73TNH3KP1&pf_rd_s=center-6&pf_rd_t=15051&pf_rd_i=genre&ref_=ft_gnr_mvpop_16">
                <Button> Mistery </Button>
                </a>
                <a href="https://www.imdb.com/search/title/?genres=romance&title_type=feature&explore=genres&pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=facfbd0c-6f3d-4c05-9348-22eebd58852e&pf_rd_r=3PH7A6SB91C73TNH3KP1&pf_rd_s=center-6&pf_rd_t=15051&pf_rd_i=genre&ref_=ft_gnr_mvpop_17">
                <Button> Romance </Button>
                </a>
                <a href="https://www.imdb.com/search/title/?genres=sci-fi&title_type=feature&explore=genres&pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=facfbd0c-6f3d-4c05-9348-22eebd58852e&pf_rd_r=3PH7A6SB91C73TNH3KP1&pf_rd_s=center-6&pf_rd_t=15051&pf_rd_i=genre&ref_=ft_gnr_mvpop_18">
                <Button> Sci-Fi </Button>
                </a>
                <a href="https://www.imdb.com/search/title/?genres=short&explore=genres&pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=facfbd0c-6f3d-4c05-9348-22eebd58852e&pf_rd_r=3PH7A6SB91C73TNH3KP1&pf_rd_s=center-6&pf_rd_t=15051&pf_rd_i=genre&ref_=ft_gnr_mvpop_19">
                <Button> Short Film </Button>
                </a>
                <a href="https://www.imdb.com/search/title/?genres=sport&title_type=feature&explore=genres&pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=facfbd0c-6f3d-4c05-9348-22eebd58852e&pf_rd_r=3PH7A6SB91C73TNH3KP1&pf_rd_s=center-6&pf_rd_t=15051&pf_rd_i=genre&ref_=ft_gnr_mvpop_20">
                <Button> Sport </Button>
                </a>
                <a href="https://www.imdb.com/search/keyword/?keywords=superhero&title_type=movie&pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=facfbd0c-6f3d-4c05-9348-22eebd58852e&pf_rd_r=3PH7A6SB91C73TNH3KP1&pf_rd_s=center-6&pf_rd_t=15051&pf_rd_i=genre&ref_=ft_gnr_mvpop_21">
                <Button> Superhero </Button>
                </a>
                <a href="https://www.imdb.com/search/title/?genres=thriller&title_type=feature&explore=genres&pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=facfbd0c-6f3d-4c05-9348-22eebd58852e&pf_rd_r=3PH7A6SB91C73TNH3KP1&pf_rd_s=center-6&pf_rd_t=15051&pf_rd_i=genre&ref_=ft_gnr_mvpop_22">
                <Button> Thriller </Button>
                </a>
                <a href="https://www.imdb.com/search/title/?genres=war&title_type=feature&explore=genres&pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=facfbd0c-6f3d-4c05-9348-22eebd58852e&pf_rd_r=3PH7A6SB91C73TNH3KP1&pf_rd_s=center-6&pf_rd_t=15051&pf_rd_i=genre&ref_=ft_gnr_mvpop_23">
                <Button> War </Button>
                </a>
                <a href="https://www.imdb.com/search/title/?genres=western&title_type=feature&explore=genres&pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=facfbd0c-6f3d-4c05-9348-22eebd58852e&pf_rd_r=3PH7A6SB91C73TNH3KP1&pf_rd_s=center-6&pf_rd_t=15051&pf_rd_i=genre&ref_=ft_gnr_mvpop_24">
                <Button> Western </Button>
                </a>
              </div>
            )
            : (
              null
            )
        }
      </div>
    );
  }
}

export default DropDownMenu;

*/




import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';

const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    '&:focus': {
      backgroundColor: theme.palette.primary.main,
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);

export default function CustomizedMenus() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        aria-controls="customized-menu"
        aria-haspopup="true"
        variant="contained"
        color="primary"
        onClick={handleClick}
      >
        <MenuIcon />
      </Button>
      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
       <StyledMenuItem>
                <a href="https://www.imdb.com/search/title/?genres=action&title_type=feature&explore=genres&pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=facfbd0c-6f3d-4c05-9348-22eebd58852e&pf_rd_r=3PH7A6SB91C73TNH3KP1&pf_rd_s=center-6&pf_rd_t=15051&pf_rd_i=genre&ref_=ft_gnr_mvpop_1">
                <Button> Action </Button>
                </a>
      </StyledMenuItem>
      <StyledMenuItem>
                <a href="https://www.imdb.com/search/title/?genres=adventure&title_type=feature&explore=genres&pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=facfbd0c-6f3d-4c05-9348-22eebd58852e&pf_rd_r=3PH7A6SB91C73TNH3KP1&pf_rd_s=center-6&pf_rd_t=15051&pf_rd_i=genre&ref_=ft_gnr_mvpop_2">
                <Button> Adventure </Button>
                </a>
       </StyledMenuItem>  
       <StyledMenuItem>     
                <a href="https://www.imdb.com/search/title/?genres=animation&title_type=feature&explore=genres&pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=facfbd0c-6f3d-4c05-9348-22eebd58852e&pf_rd_r=3PH7A6SB91C73TNH3KP1&pf_rd_s=center-6&pf_rd_t=15051&pf_rd_i=genre&ref_=ft_gnr_mvpop_3">
                <Button> Animation </Button>
                </a>
        </StyledMenuItem>
        <StyledMenuItem>    
                <a href="https://www.imdb.com/search/title/?genres=biography&title_type=feature&explore=genres&pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=facfbd0c-6f3d-4c05-9348-22eebd58852e&pf_rd_r=3PH7A6SB91C73TNH3KP1&pf_rd_s=center-6&pf_rd_t=15051&pf_rd_i=genre&ref_=ft_gnr_mvpop_4">
                <Button> Biography </Button>
                </a>
        </StyledMenuItem>  
        <StyledMenuItem>  
                <a href="https://www.imdb.com/search/title/?genres=comedy&title_type=feature&explore=genres&pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=facfbd0c-6f3d-4c05-9348-22eebd58852e&pf_rd_r=3PH7A6SB91C73TNH3KP1&pf_rd_s=center-6&pf_rd_t=15051&pf_rd_i=genre&ref_=ft_gnr_mvpop_5">
                <Button> Comedy </Button>
                </a>
        </StyledMenuItem> 
        <StyledMenuItem>   
                <a href="https://www.imdb.com/search/title/?genres=crime&title_type=feature&explore=genres&pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=facfbd0c-6f3d-4c05-9348-22eebd58852e&pf_rd_r=3PH7A6SB91C73TNH3KP1&pf_rd_s=center-6&pf_rd_t=15051&pf_rd_i=genre&ref_=ft_gnr_mvpop_6">
                <Button> Crime </Button>
                </a>
        </StyledMenuItem>  
        <StyledMenuItem>  
                <a href="https://www.imdb.com/search/title/?genres=documentary&explore=genres&pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=facfbd0c-6f3d-4c05-9348-22eebd58852e&pf_rd_r=3PH7A6SB91C73TNH3KP1&pf_rd_s=center-6&pf_rd_t=15051&pf_rd_i=genre&ref_=ft_gnr_mvpop_7">
                <Button> Documentary </Button>
                </a>
        </StyledMenuItem> 
        <StyledMenuItem>   
                <a href="https://www.imdb.com/search/title/?genres=drama&title_type=feature&explore=genres&pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=facfbd0c-6f3d-4c05-9348-22eebd58852e&pf_rd_r=3PH7A6SB91C73TNH3KP1&pf_rd_s=center-6&pf_rd_t=15051&pf_rd_i=genre&ref_=ft_gnr_mvpop_8">
                <Button> Drama </Button>
                </a>
        </StyledMenuItem> 
        <StyledMenuItem>   
                <a href="https://www.imdb.com/search/title/?genres=family&title_type=feature&explore=genres&pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=facfbd0c-6f3d-4c05-9348-22eebd58852e&pf_rd_r=3PH7A6SB91C73TNH3KP1&pf_rd_s=center-6&pf_rd_t=15051&pf_rd_i=genre&ref_=ft_gnr_mvpop_9">
                <Button> Family </Button>
                </a>
        </StyledMenuItem>  
        <StyledMenuItem>  
                <a href="https://www.imdb.com/search/title/?genres=fantasy&title_type=feature&explore=genres&pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=facfbd0c-6f3d-4c05-9348-22eebd58852e&pf_rd_r=3PH7A6SB91C73TNH3KP1&pf_rd_s=center-6&pf_rd_t=15051&pf_rd_i=genre&ref_=ft_gnr_mvpop_10">
                <Button> Fantasy </Button>
                </a>
        </StyledMenuItem>  
        <StyledMenuItem>  
                <a href="https://www.imdb.com/search/title/?genres=film-noir&title_type=feature&explore=genres&pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=facfbd0c-6f3d-4c05-9348-22eebd58852e&pf_rd_r=3PH7A6SB91C73TNH3KP1&pf_rd_s=center-6&pf_rd_t=15051&pf_rd_i=genre&ref_=ft_gnr_mvpop_11">
                <Button> Film Noir </Button>
                </a>
        </StyledMenuItem>  
        <StyledMenuItem>  
                <a href="https://www.imdb.com/search/title/?genres=history&title_type=feature&explore=genres&pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=facfbd0c-6f3d-4c05-9348-22eebd58852e&pf_rd_r=3PH7A6SB91C73TNH3KP1&pf_rd_s=center-6&pf_rd_t=15051&pf_rd_i=genre&ref_=ft_gnr_mvpop_12">
                <Button> History </Button>
                </a>
        </StyledMenuItem>  
        <StyledMenuItem>  
                <a href="https://www.imdb.com/search/title/?genres=horror&title_type=feature&explore=genres&pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=facfbd0c-6f3d-4c05-9348-22eebd58852e&pf_rd_r=3PH7A6SB91C73TNH3KP1&pf_rd_s=center-6&pf_rd_t=15051&pf_rd_i=genre&ref_=ft_gnr_mvpop_13">
                <Button> Horror </Button>
                </a>
        </StyledMenuItem>  
        <StyledMenuItem>  
                <a href="https://www.imdb.com/search/title/?genres=music&title_type=feature&explore=genres&pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=facfbd0c-6f3d-4c05-9348-22eebd58852e&pf_rd_r=3PH7A6SB91C73TNH3KP1&pf_rd_s=center-6&pf_rd_t=15051&pf_rd_i=genre&ref_=ft_gnr_mvpop_14">
                <Button> Music </Button>
                </a>
        </StyledMenuItem> 
        <StyledMenuItem>   
                <a href="https://www.imdb.com/search/title/?genres=musical&title_type=feature&explore=genres&pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=facfbd0c-6f3d-4c05-9348-22eebd58852e&pf_rd_r=3PH7A6SB91C73TNH3KP1&pf_rd_s=center-6&pf_rd_t=15051&pf_rd_i=genre&ref_=ft_gnr_mvpop_15">
                <Button> Musical </Button>
                </a>
        </StyledMenuItem>  
        <StyledMenuItem>  
                <a href="https://www.imdb.com/search/title/?genres=mystery&title_type=feature&explore=genres&pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=facfbd0c-6f3d-4c05-9348-22eebd58852e&pf_rd_r=3PH7A6SB91C73TNH3KP1&pf_rd_s=center-6&pf_rd_t=15051&pf_rd_i=genre&ref_=ft_gnr_mvpop_16">
                <Button> Mistery </Button>
                </a>
        </StyledMenuItem>  
        <StyledMenuItem>  
                <a href="https://www.imdb.com/search/title/?genres=romance&title_type=feature&explore=genres&pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=facfbd0c-6f3d-4c05-9348-22eebd58852e&pf_rd_r=3PH7A6SB91C73TNH3KP1&pf_rd_s=center-6&pf_rd_t=15051&pf_rd_i=genre&ref_=ft_gnr_mvpop_17">
                <Button> Romance </Button>
                </a>
        </StyledMenuItem>  
        <StyledMenuItem>  
                <a href="https://www.imdb.com/search/title/?genres=sci-fi&title_type=feature&explore=genres&pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=facfbd0c-6f3d-4c05-9348-22eebd58852e&pf_rd_r=3PH7A6SB91C73TNH3KP1&pf_rd_s=center-6&pf_rd_t=15051&pf_rd_i=genre&ref_=ft_gnr_mvpop_18">
                <Button> Sci-Fi </Button>
                </a>
        </StyledMenuItem>  
        <StyledMenuItem>  
                <a href="https://www.imdb.com/search/title/?genres=short&explore=genres&pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=facfbd0c-6f3d-4c05-9348-22eebd58852e&pf_rd_r=3PH7A6SB91C73TNH3KP1&pf_rd_s=center-6&pf_rd_t=15051&pf_rd_i=genre&ref_=ft_gnr_mvpop_19">
                <Button> Short Film </Button>
                </a>
        </StyledMenuItem>  
        <StyledMenuItem>  
                <a href="https://www.imdb.com/search/title/?genres=sport&title_type=feature&explore=genres&pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=facfbd0c-6f3d-4c05-9348-22eebd58852e&pf_rd_r=3PH7A6SB91C73TNH3KP1&pf_rd_s=center-6&pf_rd_t=15051&pf_rd_i=genre&ref_=ft_gnr_mvpop_20">
                <Button> Sport </Button>
                </a>
        </StyledMenuItem>  
        <StyledMenuItem>  
                <a href="https://www.imdb.com/search/keyword/?keywords=superhero&title_type=movie&pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=facfbd0c-6f3d-4c05-9348-22eebd58852e&pf_rd_r=3PH7A6SB91C73TNH3KP1&pf_rd_s=center-6&pf_rd_t=15051&pf_rd_i=genre&ref_=ft_gnr_mvpop_21">
                <Button> Superhero </Button>
                </a>
        </StyledMenuItem>  
        <StyledMenuItem>  
                <a href="https://www.imdb.com/search/title/?genres=thriller&title_type=feature&explore=genres&pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=facfbd0c-6f3d-4c05-9348-22eebd58852e&pf_rd_r=3PH7A6SB91C73TNH3KP1&pf_rd_s=center-6&pf_rd_t=15051&pf_rd_i=genre&ref_=ft_gnr_mvpop_22">
                <Button> Thriller </Button>
                </a>
        </StyledMenuItem>  
        <StyledMenuItem>  
                <a href="https://www.imdb.com/search/title/?genres=war&title_type=feature&explore=genres&pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=facfbd0c-6f3d-4c05-9348-22eebd58852e&pf_rd_r=3PH7A6SB91C73TNH3KP1&pf_rd_s=center-6&pf_rd_t=15051&pf_rd_i=genre&ref_=ft_gnr_mvpop_23">
                <Button> War </Button>
                </a>
        </StyledMenuItem>  
        <StyledMenuItem>  
                <a href="https://www.imdb.com/search/title/?genres=western&title_type=feature&explore=genres&pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=facfbd0c-6f3d-4c05-9348-22eebd58852e&pf_rd_r=3PH7A6SB91C73TNH3KP1&pf_rd_s=center-6&pf_rd_t=15051&pf_rd_i=genre&ref_=ft_gnr_mvpop_24">
                <Button> Western </Button>
                </a>
        </StyledMenuItem>  
        
       
      </StyledMenu>
    </div>
  );
}
