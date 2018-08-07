import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import '../styles/landing.css';
import avatar from '../assets/images/avatar.png';

class Landing extends Component {
    render() {
        return (
            <div className='landing'>
                <Grid className='landing-grid'>
                    <Cell col={12}>
                        <img src= {avatar} alt='avatar-pic'/>
                        <div className='banner-text'>
                            <h1>Full Stack Web Developer</h1>
                            <hr />
                            <p> HTML/CSS | Javascript | C++ | React | Node.js | Express | MySQL </p>
                            <div className="links">
                                {/*LinkedIn*/}
                                <a href="https://www.linkedin.com/in/bryan-albano80/" rel="noopener noreferrer" target="_blank">
                                    <i class="fa fa-linkedin-square" aria-hidden="true"></i>
                                </a>
                                {/*Github*/}
                                <a href="https://github.com/balbano80" rel="noopener noreferrer" target="_blank">
                                    <i class="fa fa-github-square" aria-hidden="true"></i>
                                </a>
                            </div>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
};

export default Landing;