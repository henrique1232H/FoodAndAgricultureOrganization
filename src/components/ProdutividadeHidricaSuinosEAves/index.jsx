import "./style.css"

import triangule from "../../assets/svg/triangule.svg"
import styled from "styled-components"

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

export default function SectionSeven() {

    return (
        <Section>

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
        </Section>
    )
}