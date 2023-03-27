import styled from "styled-components";
import cow from "../../assets/svg/cow.svg"

const Div = styled.div`
    height: 100vh;
    background: red;
`


export default function Agua() {

    return (
        <Div>
            <div className="flex-2">

                <h3>Gestão hídrica na produção animal: uso mais eficiente dos recursos</h3>

                <div className="flex-row" />

                <img src={cow} alt="vaca bebendo agua" title="vaca bebendo agua" className="ajust  aaccs" />
            </div>

            <div>

                <p>•As grande maioria das fazendas de produção animal <span className="weight">NÃO</span> mensuram o consumo de água para a produção animal. </p>

                <p>• <span className="weight">NÃO</span> se gerencia o que <span className="weight">NÃO</span> se mede!!</p>

                <p>•Ao <span className="weight">medir</span> o consumo de água, o <span className="weight"> produtor compreende os valores</span>  e pode implementar <span className="weight">boas práticas</span> para usar os recursos hídricos de forma mais eficiente.</p>

                <p> •O  <span className="weight">desconhecimento da demanda hídrica</span> para as atividades pecuárias e eventos de escassez hídrica podem <span className="weight">comprometer a continuidade da atividade</span>, impactando economias e o abastecimento de alimentos.</p>
            </div>
        </Div>
    )
}