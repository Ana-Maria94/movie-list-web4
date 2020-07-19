import React from 'react'
import './Footer.css'
import Grid from '@material-ui/core/Grid'
import { Button } from '@material-ui/core'

const Footer = () => {
return ( 
    <div className="main-footer">
        <div className="container">
            <div className="row">
                <Grid className="main-footer" container spacing ={-12}>
            <div className="col">
            <Grid item xs={6}>
                <h4>Contact</h4>
                <ul className="list-unstyled">
                    <li>1234.556.889</li>
                    
                        <a href='https://www.google.ro/maps/place/Roman/@46.934858,26.9180194,17z/data=!3m1!4b1!4m5!3m4!1s0x40cabcc5ff4a9c75:0x9e348fbd1662684f!8m2!3d46.934858!4d26.9202081'>
                         <li>Roman, Romania</li>
                         </a>
                         <li>Frequent Questions</li>
                   
                </ul>
                </Grid>
            </div>
        
            <div className="col">
            <Grid item xs={6}>
            <h4>Stuff</h4>
                <ul className="list-unstyled">
                   
                        <a href='https://anpc.ro/'>
                         <li>ANPC</li>
                         </a>
                    <a href='https://nondisclosureagreement.com/wp-content/uploads/2018/03/Movie-Film-Non-Disclosure-Agreement-NDA.png'>
                    <li>Confidentiality Statements</li>
                    </a>
                    <a href='https://ro.wikipedia.org/wiki/Cookie'>
                    <li>Cookie Preferences</li>
                    </a>
                </ul>    
                </Grid>
            </div>
            
                </Grid> 
            </div>


            <hr />
                <div className="column">
                    <p className="copyRight"> copyright &copy; {new Date().getFullYear()}  | MOVIE LIST W4 | All rights reserved |Therms Of Service | Privacy</p>
                </div>
        
            </div>
    
        
        </div>
    
        )
    }
export default Footer;