import "./style.css"
import { BarCharts } from "../graphicsChart/VerticalBarChart"

import styled from "styled-components"

const Section = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

`

const Flex = styled.div`
    display: flex;
    justify-content: center;
    margin: 0 10rem;
    gap: 4rem;

    @media screen and (max-width: 40rem) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
    }
`

const Block = styled.div`
    width: 60%;
`

const P = styled.p`
    font-size: 1.5rem;
`

const Figure = styled.figure`
    height: 100%;
    min-height: 20vh;
    max-height: 80vh;
    width: 100%;
    min-width: 40%;
    max-width: 80%;

    @media screen and (max-width: 40rem) {
        width: 100%;
        max-width: 100%;
    }
`

export function EscassezHidrica() {

    return (
        <Section>
            
            <h1>Escassez hídrica</h1>

            <Figure>
                <BarCharts />

                <figcaption className="figCaptionFlex">
                    <p>
                        <a href="https://wulca-waterlca.org/aware/what-is-aware/">
                             Método AWARE (Available Water Remaining) [1]
                        </a>
                       </p>

                    <p>Método BWSI (Blue Water Scarcity Index)</p>
                </figcaption>
            </Figure>

            <Flex>
                <Block>
                    <P>Os resultados apresentados neste gráfico são referentes a um cenário com menor disponibilidade hídrica.
                    A produção de suínos apresenta o maior impacto em relação a escassez hídrica em comparação com a média global.
                    Para cada 1 t carcaça suína são consumidos 15,4 m3 de água</P>
                </Block>
               

                <Block>
                    <P>O resultado do método BWSI é binário: 0 (mínima) – 1 (máxima)
                    Na área de estudo foi identificada escassez hídrica baixa em todos os cenários avaliados, com contribuição média anual de 93% da atividade de produção animal na escassez hídrica.</P>
                </Block>
            </Flex>

        </Section>
    )
}