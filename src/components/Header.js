import React from 'react'
import styled from 'styled-components';
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close"

const Container = styled.div`
    min-height:60px;
    position:fixed;
    display:flex;
    align-items:center;
    justify-content:space-between;
    padding:0 20px;
    top:0;
    left:0;
    right:0;
    z-index:1;
`
const Menu = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    flex: 1;
    
    a{
        font-weight:600;
        text-transform:uppercase;
        padding: 0 10px;
        flex-wrap:no-wrap;
    }

    @media (max-width:768px){
        display:none;
    }
`

const RightMenu = styled.div`
    display:flex;
    align-items:center;
    a{
        font-weight:600;
        text-transform:uppercase;
        padding: 0 10px;
        flex-wrap:no-wrap;
    }
`

const CustomMenu = styled(MenuIcon)`
    cursor:pointer;
`

const BurgerNav = styled.div`
    position:fixed;
    top:0;
    bottom:0;
    right:0;
    background-color:white;
    // display:none;
    width:300px;
    list-style: none;
    padding:20px;
    display:flex;
    flex-direction:column;
    text-align:start;
    li{
        padding:15px 0;
        border-bottom: 1px solid rgba(0,0,0,0.2);
        a{
            font-weight:600;
        }
    }
`
const CloseWrapper = styled.div`
    display:flex;
    justify-content:flex-end;
`
const CustomClose = styled(CloseIcon)`
    cursor:pointer;
`

//공부: full width 만드는 법 width:100%안될때

export default function Header(){
    return(
        <Container>
            <a href="/">
                <img src="/images/logo.svg" alt=""></img>
            </a>
            <Menu>
                <p><a href="#">Model S</a></p>
                <p><a href="#">Model 3</a></p>
                <p><a href="#">Model X</a></p>
                <p><a href="#">Model Y</a></p>
            </Menu>
            <RightMenu>
                <a href="#">Shop</a>
                <a href="#">Tesla Account</a>
                <CustomMenu></CustomMenu>
            </RightMenu>
            <BurgerNav>
                <CloseWrapper>
                    <CustomClose></CustomClose>
                </CloseWrapper>
                
                <li><a href="#">Existing Inventory</a></li>
                <li><a href="#">Used Inventory</a></li>
                <li><a href="#">Trade-in</a></li>
                <li><a href="#">Cybertruck</a></li>
            </BurgerNav>
        </Container>
    )
}