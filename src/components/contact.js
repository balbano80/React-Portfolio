import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl'
import '../styles/contact.css';
import avatar from '../assets/images/avatar.png';

class Contact extends Component {
    render() {
        return (
            <div className="body">
                <Grid className="contact">
                    <Cell col={6}>
                        <h2>Bryan Albano</h2>
                        <img src={avatar} alt="avatar" />
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using
                        Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like
                        readable English.
                        </p>
                    </Cell>
                    <Cell col={6}>
                        <h2>Contact Me</h2>
                        <hr />
                        <div className="list">
                            <List>
                                <ListItem>
                                    <ListItemContent className="list-item">
                                        <i className="fa fa-mobile cell" aria-hidden="true"/>
                                        (408) 693-1193
                                    </ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent className="list-item">
                                        <i className="fa fa-phone-square home" aria-hidden="true"/>
                                        (925) 866-8933
                                    </ListItemContent>
                                </ListItem>  
                                <ListItem>
                                    <ListItemContent className="list-item">
                                        <i className="fa fa-envelope email" aria-hidden="true"/>
                                        albanobryan@yahoo.com
                                    </ListItemContent>
                                </ListItem>                              
                            </List>
                        </div>
                    </Cell>
                </Grid>

            </div>
        )
    }
}

export default Contact;