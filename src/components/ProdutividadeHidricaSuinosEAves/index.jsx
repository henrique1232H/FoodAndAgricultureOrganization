import "./style.css"

import triangule from "../../assets/svg/triangule.svg"
import styled from "styled-components"

import porcos from "../../assets/img/porcos.jpg"
import avicultura from "../../assets/img/avicultura.jpg"
import TabelaOne from "./Tabelas/TabelaOne"
import TabelaTwo from "./Tabelas/TabelaTwo"

const Section = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    height: auto;
    width: 100%;
    flex-direction: column;
`

const H2 = styled.h2`
     padding-top: 6rem;
    width: 60%;
    height: 10vh;
    text-align: center;
`

const BlockText = styled.div`
    margin-top: 7rem;
    display: flex;
    gap: 4rem;
    flex-wrap: wrap;
`
const P = styled.p`
    font-size: 1.6rem;
    line-height: 1.9rem;
`

const Shadow = styled.div`
    box-shadow: 0px 10px 10px 1px #ccc;
`

const Flex = styled.div`
    margin-top: 2rem;
    display: flex;
    justify-content: space-around;

     @media screen and (max-width: 40rem) {
        flex-direction: column;
    }
`

const Card = styled.div`
    box-shadow: 0px 10px 10px 2px #ccc;
    height: auto;
    width: 45%;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
   

`

const Img = styled.img`
    height: 50vh;
    width: 100%;
`

const H2Card = styled.h2`
    font-size: 2.5rem;
`

const H3 = styled.h3`
    font-size: 2rem;
`

const H4 = styled.h4`
    text-align: center;
`




export default function SectionSeven() {

    return (
        <Section>

            <Shadow>

            <h1>Produtividade Hídrica Suínos e Aves</h1>

            <H2>4 cenários avaliados avaliar o efeito da implementação de melhores práticas agrícolas:</H2>

            <BlockText>

                <div>
                    <P>Cenário 1. Rendimento médio anual das culturas (cenário atual)</P>

                    <P>Cenário 2. Redução de 50% da evaporação do solo</P>

                    <P>Cenário 3. Maior rendimento da produtividade das culturas</P>

                    <P>Cenário 4. Redução de 50% da evaporação do solo sobre o 3° cenário</P>

                    <P className="spac">Link para o estudo: <a href="https://www.mdpi.com/2073-4441/12/11/3014">https://www.mdpi.com/2073-4441/12/11/3014</a> </P>

                </div>


                <div className="spacing">
                    <img src={triangule} alt="" />
                </div>

                <div>
                    <P>Rotações de cultura analisadas:</P>

                    <P>Soja - <span className="strong">SAFRA*</span> - azevém</P>

                    <P>Soja - <span className="strong">SAFRA*</span> - pousio</P>

                    <P>Soja - <span className="strong">SAFRINHA**</span> - pousio</P>

                    <P>Milho (Safra* - verão / SAFRINHA** - inverno)</P>


                    <div className="inputs">

                        <div>
                            <P>Mato Grosso</P>
                        </div>

                        <div>
                            <P>Paraná</P>
                        </div>

                        <div>
                            <P>Rio Grande do Sul</P>
                        </div>
                    </div>
                </div>


            </BlockText>
            
            <Flex>

                <Card>  
                    <Img src={porcos} />

                    <div>
                        <H2Card>[kg carcaça/m3 de água]</H2Card>
                        <H4>suinocultura</H4>
                    </div>

                    <TabelaOne/>
                </Card>

                <Card>
                    <Img src={avicultura} />

                    <div>
                        <H2Card>[kg carcaça/m3 de água]</H2Card>
                        <H4>avicultura </H4>
                    </div>

                    <TabelaTwo />
                </Card>
            </Flex>
            </Shadow> 
        </Section>
    )
}