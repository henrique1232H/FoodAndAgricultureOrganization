import "./style.css";
import styled from "styled-components";

const Text = styled.div`
     display: flex;
    justify-content: center;

`

const ImgDiv = styled.div`
    
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`

const H1Heading = styled.h1`
    color: #fff;
    height: auto;
    text-align: center;
    align-items: center;
    width: 30%;
    font-size: 5rem;
    text-shadow: 0px 4px 4px #000000;
    line-height: 5.872rem;

    @media (max-width: 50rem) {
        width: 100%;
        min-width: 10vw;
        max-width: 70%;
        font-size: 4rem;
}

`

export function Heading() {

    return (

        <ImgDiv className="img">
            

        <Text>

            <H1Heading>Uso da água na produção animal Produtividade Hídrica e Escassez Hídrica</H1Heading>

        </Text>

        </ImgDiv>

    )
}