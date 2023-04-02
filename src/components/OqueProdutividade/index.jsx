import styled from "styled-components";

import cowABC from "../../assets/img/cowABC.jpg"
import noWater from "../../assets/img/noWater.avif";

import Iframe from "react-iframe";

const Section = styled.div`
    height: auto;
    display: flex;
    justify-content: space-between;
    padding: 0 3rem;
    gap: 3rem;

    @media screen and (max-width: 40rem) {
        flex-direction: column;
    }
`

const Card = styled.div`
    height: 100%;
    min-height: 10vh;
    max-height: 120vh;
    width: 60%;
    padding: 4rem;
    box-shadow: 10px 10px 10px 10px #ccc;
    display: flex;
    flex-direction: column;

    @media screen and (max-width: 40rem) {
        width: 100%;
    }

`
const Img = styled.img`
    height: 100%;
    min-height: 10vh;
    max-height: auto;
    width: 100%;
    min-width: 10%;
    max-width: 100%;
    display: block;
    margin: 0 auto 2rem auto;
`

const H3 = styled.h3`
    font-size: 3rem;
`

const P = styled.p`
    font-size: 2rem;
`

const BlockText = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`

export default function ProdutividadeHidrica() {
    return (
        <Section>
            <Card>

                <Img src={cowABC} />


                <BlockText>

                <H3>O que é Produtividade Hídrica?</H3>

                <P>Razão entre o produto (ex. carne, leite, ovos, etc.) e a quantidade de água consumida.
                O método considera água consumida como sendo:</P>

                <P>Água verde, aquela que é consumida na forma de alimentos para os animais, ex. pasto, milho, soja, etc. É calculada a partir da evapotranspiração das culturas vegetais</P>


                <P>Água azul, aquela consumida de fontes superficiais e subterrâneas para usos como: consumo dos animais, limpeza de instalações e equipamentos, irrigação, etc.</P>
                </BlockText>
            </Card>

            <Card>
                

                <BlockText>

                    <Img src={noWater} />

                    <H3>Impacto da produção animal na escassez hídrica</H3>

                    <P>A mesma quantidade de consumo de água em lugares diferentes não produz o mesmo impacto ambiental porque a disponibilidade hídrica e a vulnerabilidade ambiental não são homogêneas em todo mundo.</P>
                    <P>Logo, a avaliação de impacto sobre a escassez hídrica fornece informações adicionais para intepretar as contribuições potenciais para o impacto ambiental da produção animal.</P>
                </BlockText>
            </Card>
        </Section>
    )
}