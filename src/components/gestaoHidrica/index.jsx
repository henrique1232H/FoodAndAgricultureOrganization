import styled from "styled-components";
import cow from "../../assets/svg/cow.svg";
import "./style.css"

const Div = styled.div`
    height: 100vh;
`

const DivText = styled.div`
    height: 100vh;
    background: #fff;
    width: 40%;
    border-top-right-radius:  40%;
    border-bottom-right-radius: 40%;
    box-shadow: 5px 5px 40px 1px #ccc;
    display: flex;
    flex-direction: column;
    padding-top: 10rem;


`

const H3 = styled.h3`
    height: 20vh;
    width: 50%;
    margin-left: 10rem;
    text-align: center;
    font-size: 2.5rem;
`


export default function Agua() {

    return (
        <Div className="aguaBackground">
            <DivText>

                

                <H3>Gestão hídrica na produção animal: uso mais eficiente dos recursos</H3>

                <p>•As grande maioria das fazendas de produção animal <span className="weight">NÃO</span> mensuram o consumo de água para a produção animal. </p>

                <p>• <span className="weight">NÃO</span> se gerencia o que <span className="weight">NÃO</span> se mede!!</p>

                <p>•Ao <span className="weight">medir</span> o consumo de água, o <span className="weight"> produtor compreende os valores</span>  e pode implementar <span className="weight">boas práticas</span> para usar os recursos hídricos de forma mais eficiente.</p>

                <p> •O  <span className="weight">desconhecimento da demanda hídrica</span> para as atividades pecuárias e eventos de escassez hídrica podem <span className="weight">comprometer a continuidade da atividade</span>, impactando economias e o abastecimento de alimentos.</p>

            </DivText>

            <div>
            </div>
        </Div>
    )
}