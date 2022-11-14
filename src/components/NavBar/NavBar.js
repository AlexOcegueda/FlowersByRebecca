import React from 'react';
import './NavBarStyle.css';
//import { Nav, DropDownContainer, DropDownText, DropDownBtn, DropDownMenu, DropDownItem } from './NavBarStyle';

export default function NavBar(props) {
    
    return (
        
        <>
            <nav>
                    <div class="dropdown">
                        <div class="products">
                        <button className='menu'>Menu</button>
                            <ul>
                                <li><a href="#">Services</a></li>
                                <li><a href="#">About Me</a></li>
                            </ul>
                        </div>
                    </div>
            </nav>
       </>

    )

    
}

/* 

<Nav>
            <DropDownContainer class="dropdown">
                <DropDownText class="projects">
                    <DropDownBtn>Menu</DropDownBtn>
                    <DropDownMenu>
                        <DropDownItem>Services</DropDownItem>
                    </DropDownMenu>
                </DropDownText>
            </DropDownContainer>
        </Nav>
*/