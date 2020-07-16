import React, { Component } from 'react';
import MenuIcon from '@material-ui/icons/Menu'
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
          Show menu
        </Button>
        
        {
          this.state.showMenu
            ? (
              <div 
              className="menu"
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