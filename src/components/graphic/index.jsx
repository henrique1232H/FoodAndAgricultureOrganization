import "./style.css";

import styled from "styled-components";
import Doughnuts from "../graphicsChart/Doughnuts";



const Section = styled.div`
    height: auto;
    display: flex;
    flex-direction: row;
    align-items: center;

`

const BlockText = styled.div`
    height: 100%;
    min-height: 10vh;
    max-height: 50vh;
    width: 100%;
    min-width: 30%;
    max-width: 40%;
    box-shadow: 10px 10px 10px 10px #ccc;
    padding: 3rem;

    @media screen and (max-width: 40rem) {
        margin-top: 10rem;
        max-width: 100%;
    }


`



const Flex = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;

    @media screen and (max-width: 40rem)     {
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

export function Graphic() {

    
    
    return ( 
        <Section className="containerGraphic">
            


                <Flex>

                    <BlockText>
                     <h2>As atividades de produção animal e irrigação representam 77,7% do consumo de água no Brasil!!</h2>

                    <Linha />                    

                    <P>Estima-se que <span className="weight">41% da água</span> utilizada na <span className="weight">agricultura</span> seja para a produção de culturas destinadas a <span className="weight">produção animal</span> <a href="#">[1]</a>  </P>

                    </BlockText>
                    


                    <GraphicOne>

                        <h3>Total de água consumidas nas bacias hidrogra (Em 2019)</h3>    

        
                        <GraphicFlex className="GraphicFlex">
                        
                            <Doughnuts />

                        </GraphicFlex>
                        
                    </GraphicOne>                   
                </Flex>

        </Section>
    )
}