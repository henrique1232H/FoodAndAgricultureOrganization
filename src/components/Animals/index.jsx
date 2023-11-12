import "./style.css";

import pig from "../../assets/svg/animals/pig-gc.jpg"
import cowWater from "../../assets/svg/animals/cowWaters.jpg"
import chickens from "../../assets/svg/animals/chicken.jpg"

import styled from "styled-components";

const Section = styled.section`
    height: auto;
    width: 100%;
    display: flex;
    justify-content: center;
    flex-wrap: nowrap;

`
const Flex = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

`

const H2 = styled.h2`
    text-align: center;
    font-weight: 800;
    margin: 0 4rem;
`

const FlexAnimals = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    margin: 4rem auto;
    padding:  0 4rem;

    @media screen and (max-width: 50rem)   {
            flex-direction:  column;
    }

`


const Card = styled.div`
    height: auto;
    width: 100%;
    min-width: 10vw;
    max-width: 60vw;
    background: #fff;
    border: none !important;
    padding: 4rem;
    transition: 300ms all ease-in-out;

    :hover {
        margin: 0 4rem;
        box-shadow: 0px 10px 14px 2px;
    }

    @media (max-width: 70rem) {
        :hover {
            margin: 10rem;
        }
    }


`

const Img = styled.img`
    display: block !important;
    margin: 0 auto 2rem auto !important ;
    height: 100vh;
    min-height: 20vh;
    max-height: 40vh;
    width: 100%;
    min-width: 10vw;
    max-width: 70vw;
    box-shadow: 4px 4px 24px 3px #ccc;

    @media (max-width:70rem) {
        min-height: 10vh;
        max-height: 30vh;
        min-width: 10vw;
        max-width: 100vw;
    }
`

const H3 = styled.h3`
    padding-bottom: 1rem;
    font-size: 2rem;
    color: #153C52;
    text-align: center;
`

const P = styled.p`
     font-size: 1.6rem;
    text-align: justify;
`

export default function Animals() {
 
    return (
        <Section>

            <Flex>

            <H2>Brasil se destaca como um dos maiores produtores de proteína animal no mundo e desempenha um papel fundamental na segurança alimentar global</H2>

            <FlexAnimals>

                <Card className="border">
                    <H3>Pecuaria de corte</H3>

                    <Img src={cowWater} alt="vaca"  className="vaca"/>

                    <P>2º maior rebanho global</P>
                    <P>2º maior produtor global</P>
                    <P>(2021: 9,714.25 1000 TEC) <a href="https://www.abiec.com.br/wp-content/uploads/Beef-Report-2022_atualizado_jun2022.pdf" target="_blank">[2]</a></P>
                </Card>
                

                <Card className="border-2">
                    <H3>Carne de porco</H3>

                    <Img src={pig} alt="" />

                    <P>Maior exportador global</P>
                    <P>4º maior produtor global</P>
                    <P>(2021: 99,901 mil ton)<a href="https://abpa-br.org/wp-content/uploads/2022/05/Relatorio-Anual-ABPA-2022-1.pdf" target="_blank">[1]</a></P>
                </Card>


                <Card>
                    <H3>Carne de frango</H3>

                    <Img src={chickens} alt="" />

                    <P>4º maior exportador global</P>
                    <P>4º maior produtor global</P>
                    <P>(2021: 108,949 mil ton)
                        <a href="https://abpa-br.org/wp-content/uploads/2022/05/Relatorio-Anual-ABPA-2022-1.pdf" target="_blank ">[1]</a>
                        </P>
                </Card>
            </FlexAnimals>
            </Flex>
        </Section>
    )
}