import "./style.css"

import styled from "styled-components";

const Section = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1rem 2rem;

`

const FlexWater = styled.div`
    padding: 4rem 10rem;
    gap: 10rem;


    @media (max-width:70rem) {
        margin-top: 3rem;
        padding: 0;
    } 
    
`

const H3 = styled.h3`
    font-weight: 900;
    font-size: 2.5rem;
    line-height: 2.9rem;
    color: #24526B;

    @media (max-width:70rem) {
        width: 100%;
    }
`

const P = styled.p`
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
    font-size: 1.5rem;
    text-align: justify;
    color: #153C52;
`


const TextWater = styled.div`
    height: auto;
    padding-top: 5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    height: auto;

`

const H1 = styled.h1`
    width: 84%;
    color: #24526B;
    font-size: 4rem;
    font-weight: 400;

    @media (max-width:70rem) {

        align-items: center;
        font-size: 3rem;
        width: 90%;
    }
`

const Flex = styled.div`
    padding: 1rem;
`

const Text = styled.div`
     padding-top: 1rem;
`


export function Water() {

    return (

        <Section>


            <TextWater>

                <H1>Uso da água na produção animal na região hidrográfica do Guaíba: produtividade e escassez hídrica</H1>

            </TextWater>

            <FlexWater>

                <Flex>

                    <H3>Por que fazer a gestão hídrica na produção animal?</H3>

                    <Text>

                        <P>Até 2050, a FAO estima que a agropecuária precisará produzir 50% mais alimentos para atender à demanda global.<a href="https://www.fao.org/3/cb7654en/cb7654en.pdf" target="_blank">[1]</a>.</P>
                    
                        <P>Espera-se que o consumo de alimentos mais intensivos em água, como as proteínas animais, aumente 15% até 2031 [2].<a href="https://www.oecd-ilibrary.org/agriculture-and-food/oecd-fao-agricultural-outlook-2022-2031_f1b0b29c-en" target="_blank">[2]</a> .</P>

                        <P>Globalmente a produção agropecuária demanda 72% de toda a água consumida no mundo
                        <a href="https://www.unwater.org/sites/default/files/app/uploads/2021/08/SDG6_Indicator_Report_642_Progress-on-Level-of-Water-Stress_2021_ENGLISH_pages-1.pdf" target="_blank" rel="noopener noreferrer">[3]</a>
                        , sendo 41% disto consumido na produção de alimentos para os animais<a href="#" target="_blank" rel="noopener noreferrer">[4]</a> . Essa quantidade é ainda maior nos países em desenvolvimento onde a agropecuária representa grande parte da base da economia. </P>

                        <P>Eventos de escassez hídrica causados por secas intensas têm sido mais frequentes devido às mudanças climáticas.</P>

                        <P>A falta de gestão hídrica na produção animal pode gerar perdas de produção e prejuízos econômicos.</P>

                        <P>Devemos ter sistemas pecuários hidricamente eficientes.</P>
                    </Text>
                </Flex>


            </FlexWater>


        </Section>
    )
}