import "./style.css";

import styled from "styled-components";

import GraphicOnes from "../../assets/svg/graphic/graphic-one.svg"
import Doughnuts from "../graphicsChart/Doughnuts";



const Section = styled.div`
    height: auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

`

const BlockText = styled.div`
    height: 100%;
    min-height: 10vh;
    max-height: auto;
    width: 100%;
    min-width: 30%;
    max-width: 40%;
    box-shadow: 10px 10px 10px 10px #ccc;
    padding: 3rem;

    @media screen and (max-width: 50rem) {
        max-width: 80%;
        height: auto;
    }


`



const Flex = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 15rem;

    @media screen and (max-width: 50rem)     {
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
`

const GraphicFlex = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
`

const Img = styled.img`
    height: 100%
    min-height: 20vh;
    max-height: 50vh;
    width: 100%;
    min-width: 20%;
    max-width: 90%;

    @media screen and (max-width: 50rem) {
        display: block;
        margin: 0 auto;
        max-width: 60%
    }

    `

export function Graphic() {

    
    
    return ( 
        <Section>
            


                <Flex>

                    <BlockText>
                     <h2>As atividades de produção animal e irrigação representam 77,7% do consumo de água no Brasil!!</h2>

                    <Linha />                    

                    <P>Estima-se que <span className="weight">41% da água</span> utilizada na <span className="weight">agricultura</span> seja para a produção de culturas destinadas a <span className="weight">produção animal</span> <a href="#">[1]</a>  </P>

                    </BlockText>
                    


                    <GraphicOne>

        
                        <GraphicFlex className="GraphicFlex">
                        
                            <Img src={GraphicOnes} />

                        </GraphicFlex>
                        
                    </GraphicOne>                   
                </Flex>

        </Section>
    )
}