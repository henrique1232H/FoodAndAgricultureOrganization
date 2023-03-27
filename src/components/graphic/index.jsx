import "./style.css";

import graphicOne from "../../assets/svg/graphic/graphic-one.svg"
import graphicTwo from "../../assets/svg/graphic/graphic-two.svg";
import graphicThree from "../../assets/svg/graphic/graphic-three.svg";
import graphicFour from "../../assets/svg/graphic/graphic-four.svg";
import imgVersion from "../../assets/img/img-version-1.svg";

import styled from "styled-components";

import { Doughnut } from "react-chartjs-2";

const Section = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0 4rem;
`

const BlockText = styled.div`
    height: 80vh;
    width: 35%;
    margin-right: 10rem;
    box-shadow: 10px 10px 10px 10px #ccc;
    padding: 3rem;
`

const FlexGraphic = styled.div`
    display: flex;
    flex-direction: row;


`

const Flex = styled.div`
    display: flex;

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
            
            <FlexGraphic>

                <Flex>

                    <BlockText>
                     <h2>As atividades de produção animal e irrigação representam 77,7% do consumo de água no Brasil!!</h2>

                    <Linha />                    

                    <P className="yat">Estima-se que <span className="weight">41% da água</span> utilizada na <span className="weight">agricultura</span> seja para a produção de culturas destinadas a <span className="weight">produção animal</span> <a href="#">[1]</a>  </P>

                    </BlockText>
                    


                    <GraphicOne>

                        <h3>Total de água consumidas nas bacias hidrogra (Em 2019)</h3>    

        
                        <GraphicFlex className="GraphicFlex">
                        
                            <div>
                                <div>
                                    <P>irrigação: </P>
                                    <P>66,1%</P>
                                </div>

                                <div>
                                    <P>Mineração: </P>
                                    <P>0,9%</P>
                                </div>

                                <div>
                                    <P>Abastecimento Urbano: </P>
                                    <P>9,0</P>
                                </div>
                            </div>

                            <div>

                                <div className="circle">

                                    <div className="Text">

        
                            
                                    </div>

                                     
                                </div>
                            </div>

                            <div>
                                <div>
                                    <P>Abastecimento Animal: </P>
                                    <P>11,6%</P>
                                </div>

                                <div>
                                    <P>Termelétricas: </P>
                                    <P>0,3%</P>
                                </div>

                                <div>
                                    <P>Indústria: </P>
                                    <P>66,1%</P>
                                </div>

                                <div>
                                    <P>Abastecimento Rural: </P>
                                    <P>2,4%</P>
                                </div>
                            </div>


                        </GraphicFlex>
                        
                    </GraphicOne>                   
                </Flex>

            </FlexGraphic>
        </Section>
    )
}