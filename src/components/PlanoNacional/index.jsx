import styled from "styled-components"

import graphicThree from "../../assets/svg/graphic/graphic-three.svg"
import graphicFour from "../../assets/svg/graphic/graphic-four.svg"



const Section = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 0 4rem;
    
    @media screen and (max-width: 40rem){
        height: auto;
    }
`

const BlockText = styled.div`
    height: auto;
    display: flex;
    align-items: center;
    width: 100%;
    max-width: 40%;
    min-width: 30%;
    padding: 3rem;

    @media screen and (max-width: 40rem) {
        min-width: 100%;
    }

`



const FlexGraphic = styled.div`
    display: flex;
    flex-direction: row;


`

const Flex = styled.div`
    display: flex;
    justify-content: space-around;

    @media (max-width: 70rem)   {

        flex-direction: column;
    }

`

const Linha = styled.div`
    height: 0.2rem;
    width: 100%;
    background: #ccc;
    margin-bottom: 2rem;
`

const P = styled.p`
    font-size: 2rem;
`

const GraphicOne = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 80vh;
    gap: 4rem;
`

const BackgroundImg = styled.div`
    background: #fff;
    height: 100vh;
    width: 80%;
    padding: 3rem 4rem;
    display: block;
    margin: 0 auto;
    transition: 300ms all ease-in-out;
    
    :hover {
        
        box-shadow: 10px 10px 10px 10px #ccc;
    }
`

const GraphicFlex = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
`

const Img = styled.img`
    height: 100%;
    min-height: 10vh;
    max-height: 39vh;
    width: 100%;
    min-width: 10%;
    max-width: 90%;
`


export default function Plano() {

    return (
        <Section className="containerGraphic">
            
            <FlexGraphic>

                <Flex>

                    <BlockText>
                     <h2>O Plano Nacional de Segurança Hídrica [1] apresenta estimativas de risco de perda produtiva para os setores da indústria, pecuária e agricultura irrigada, relacionada a falta de oferta de água</h2>
                    </BlockText>
                    
                    <GraphicOne>

                        <BackgroundImg>
                            <Img src={graphicFour} />
                        </BackgroundImg>
                        
                        <BackgroundImg>
                            <Img src={graphicThree} />
                        </BackgroundImg>
                        
                    </GraphicOne>                   
                </Flex>

            </FlexGraphic>
        </Section>
    )
}