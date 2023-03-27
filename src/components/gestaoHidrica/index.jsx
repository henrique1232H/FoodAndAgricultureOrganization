import styled from "styled-components";
import "./style.css"

const Div = styled.div`
    height: 100vh;
`

const DivText = styled.div`
    height: 100vh;
    background: #fff;
    width: 30%;
    border-top-right-radius:  20%;
    border-bottom-right-radius: 20%;
    box-shadow: 5px 5px 10px 1px #ccc;
    display: flex;
    flex-direction: column;
    padding-top: 10rem;

`

const H3 = styled.h3`
    height: 14vh;
    width: 60%;
    margin-left: 7rem;
    text-align: center;
    font-size: 3rem;
`

const Linha = styled.div`
    height: 0.2rem;
    margin-left: 2rem;
    width: 90%;
    background: #ccc;
    margin-bottom: 2rem;
`

const Paragrafos = styled.div`
    padding-left: 2rem;
`

const P = styled.p`
    font-size: 1.4rem;
`

const Subtitle = styled.h3`
    margin-bottom: 3rem;
`

export default function Agua() {

    return (
        <Div className="aguaBackground">
            <DivText>

                

                <H3>Gestão hídrica na produção animal</H3>

                <Linha />

                <Subtitle>Uso mais eficiente dos recursos</Subtitle>

                <Paragrafos>


                <P>•As grande maioria das fazendas de produção animal <span className="weight">NÃO</span> mensuram o consumo de água para a produção animal. </P>

                <P>• <span className="weight">NÃO</span> se gerencia o que <span className="weight">NÃO</span> se mede!!</P>

                <P>•Ao <span className="weight">medir</span> o consumo de água, o <span className="weight"> produtor compreende os valores</span>  e pode implementar <span className="weight">boas práticas</span> para usar os recursos hídricos de forma mais eficiente.</P>

                <P> •O  <span className="weight">desconhecimento da demanda hídrica</span> para as atividades pecuárias e eventos de escassez hídrica podem <span className="weight">comprometer a continuidade da atividade</span>, impactando economias e o abastecimento de alimentos.</P>

                </Paragrafos>


            </DivText>

            <div>
            </div>
        </Div>
    )
}