import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade';

const Wrap = styled.div`
    z-index:-1;
    width:100vw;
    height:100vh;
    background-size:cover; 
    background-repeat:no-repeat;
    background-image:${props=>`url("/images/${props.bgImage}")`};
    background-position:center;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    align-items:center;
`

const ItemText = styled.div`
    padding-top:15vh;
    text-align:center;
`

const Buttons = styled.div`

`


const ButtonGroup = styled.div`
    margin-bottom:30px;
    display:flex;
    @media (max-width:768px){
        flex-direction:column;
    }
`

const LeftButton = styled.div`
    background-color: rgba(23,26,32,0.8);
    height:40px;
    width:256px;
    color: white;
    display:flex;
    justify-content:center;
    align-items:center;
    border-radius:100px;
    opacity:0.85;
    text-transform:uppercase;
    font-size: 12px;
    cursor:pointer;
    margin:8px;
`
const RightButton = styled(LeftButton)``

const DownArrow = styled.img`
    height:30px;
    width:100%;
    margin-bottom:5px;
    animation: animateDown infinite 1.5s
`

//공부: background-size, background-position, top을 했으면 position relative였겠지만 padding-top으로 조정
//공부: styled 다른 style 참조, 왜 text는 padding top buttongroup은 marginbottom?
//공부: animation, keyframe
//공부: responsive
//공부: styled component로 props 넘기기

function Section({title,description,backgroundImg,leftBtnText,rightBtnText}) {
    return (
        <Wrap bgImage={backgroundImg}>
            <Fade bottom>
                <ItemText>
                    <h1>{title}</h1>
                    <p>{description}</p>
                </ItemText>
            </Fade>
            <Buttons>
                <Fade bottom>
                    <ButtonGroup>
                        <LeftButton>
                            {leftBtnText}
                        </LeftButton>
                        {rightBtnText && 
                            <RightButton>
                                {rightBtnText}
                            </RightButton>
                        }   
                    </ButtonGroup>
                </Fade>
                <DownArrow src="/images/down-arrow.svg"/>
            </Buttons>
        </Wrap>
    )
}

export default Section
