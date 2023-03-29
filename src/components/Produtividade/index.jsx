import styled from "styled-components"

import Distribuicao from "../../assets/svg/graphic/graphic-two.svg"

const Section = styled.div`
    height: auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 0 4rem;
`

const BlockText = styled.div`
    height: auto;
    width: 100%;
    max-width: 40%;
    min-width: 30%;
    box-shadow: 10px 10px 10px 10px #ccc;
    padding: 3rem;
    background: yellow;

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
    background: #fff;
    width: 30%;
    box-shadow: 10px 10px 10px 10px #ccc;

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
    max-height: 59vh;
    width: 100%;
    min-width: 10%;
    max-width: 90%;
`

export default function Produtividades() {

    
    
    return ( 
        <Section className="containerGraphic">
            
            <FlexGraphic>

                <Flex>

                    <BlockText>
                     <h2>A cultura da abundância hídrica no Brasil</h2>

                    <Linha />                    

                    <P className="yat">O Brasil possui 12% da água doce do planeta, mas a sua distribuição é desigual</P>

                    <P>A região produtora de alimentos é a que mais sofre com estiagens</P>

                    <P>Secas intensas, como observadas em 2021, quando o clima seco no centro-sul do Brasil levou a uma escassez de 267 km³ cd água retida em rios, lagos e aquíferos, em comparação com a média sazonal dos últimos 20 anos, podem ser mais intensas e frequente devido às mudanças climáticas</ P>

                    </BlockText>
                    


                    <GraphicOne>

                        <Img src={Distribuicao} alt="" />
                      
                        
                    </GraphicOne>                   
                </Flex>

            </FlexGraphic>
        </Section>
    )
}