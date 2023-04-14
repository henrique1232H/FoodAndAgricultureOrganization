import styled from "styled-components"
import Fao from "../../assets/img/img-version-1.svg"
import { CheckFat } from "@phosphor-icons/react"


const Section = styled.section`
    height: 100vh;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 3rem;

    @media screen and (max-width: 40rem) {
        height: auto;
    }
`

const Flex = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 14rem;

    @media screen and (max-width: 40rem) {
        flex-direction: column;
    }

`
const H3 = styled.h3`
    font-size: 2.5rem;
    padding-bottom: 4rem;
`

const Linha = styled.div`
    height: 0.2rem;
    width: 100%;
    background: #ccc;
    margin-bottom: 2rem;
`

const BlockText = styled.div`
    height: auto;
    width: 100%;
    max-width: 40%;
    min-width: 30%;
    padding: 3rem;

    @media screen and (max-width: 40rem) {
        width: 100%;
        min-width: 100%;
        height: auto;
    }

`

const P = styled.p`
    padding-top: 1.5rem;
    font-size: 1.9rem;
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
    padding: 1rem;

    @media screen and (max-width:40rem) {
        box-shadow: none;
        width: 100%;
    }

`


const Img = styled.img`
    height: 100%;
    min-height: 10vh;
    max-height: 60vh;
    width: 100%;
    min-width: 10%;
    max-width: 90%;
    display: block;
    margin: 0 auto;
`

const Figcaption = styled.figcaption`
    display: block;
    margin: 0 auto;
    width: 90%;
`


export default function FAO() {

    return (
        <Section>
            <Flex>
                <BlockText>
                    <H3>Orientações da FAO para avaliação do uso da água em sistemas de produção animal integrando a cadeia de suprimentos</H3>

                    <Linha />

                    <P>Com o objetivo de padronizar a avaliação sobre uso da água na produção animal, um grupo de 33 experts participou da elaboração de um guia orientativo</P>

                    <P>O manual da FAO, publicado em 2019, orienta:</P>
                    <P>
                    <CheckFat size={60} color="#161313" height={40}/>
                         Como fazer um inventário de usos da água, considerando os usos diretos e indiretos</P>

                    <P>
                    <CheckFat size={60} color="#161313"
                    height={40} />


                        Calcular, avaliar e divulgar a Produtividade Hídrica e a Escassez Hídrica</P>

                </BlockText>

                <GraphicOne>

                    <figure>
                         <Img src={Fao} />

                         <Figcaption>
                                <a href="https://fao.org/3/ca568en/ca5685en.pdf">https://fao.org/3/ca568en/ca5685en.pdf</a>
                         </ Figcaption>
                    </figure>
                   
                </GraphicOne>
            </Flex>
        </Section>
    )
}