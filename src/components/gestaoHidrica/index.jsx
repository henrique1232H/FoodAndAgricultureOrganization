import styled from "styled-components";
import "./style.css"

const Div = styled.div`
    height: 100vh;

    @media screen and (max-width: 50rem) {
        height: auto;
    }
`

const DivText = styled.div`
    width: 100%;
    min-width: 20%;
    max-width: 100%;
    height: 100vh;
    background: rgba(0,0,0, 0.7);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 1rem;

    @media screen and (max-width: 50rem) {
        width: 100%;
        height: auto;
    }

`

const H3 = styled.h3`
    height: 10vh;
    width: 60%;
    color: #fff;
    font-weight: 800;
    text-align: center;
    font-size: 3rem;

    @media screen and (max-width: 40rem) {
        height: auto;
        padding-bottom: 2rem;
    }
`

const Linha = styled.div`
    height: 0.2rem;
    margin-left: 2rem;
    width: 90%;
    background: #ccc;
    margin-bottom: 2rem;

    @media screen and (max-width: 50rem) {
        display: none;
    }
`

const Paragrafos = styled.div`
    padding-left: 2rem;
`

const P = styled.p`
    font-size: 2rem;
    color: #fff;
    padding-left: 6rem;
    width: 80%;

    @media screen and (max-width:40rem) {
        padding: 0;
        width: 100%;
    }
`


export default function Agua() {

    return (
        <Div className="aguaBackground">
            <DivText>

                

                <H3>Só podemos manejar o que conhecemos</H3>

                <Linha />

                <Paragrafos>


                <P>•Ao medir o consumo, o produtor irá saber onde é mais ou menos eficiente no uso da água e poderá implementar boas práticas hídricas.</P>

                <P>• O desconhecimento da demanda hídrica da atividade pode comprometer sua continuidade.</P>

                <P>•Ao <span className="weight">medir</span> o consumo de água, o <span className="weight"> produtor compreende os valores</span>  e pode implementar <span className="weight">boas práticas</span> para usar os recursos hídricos de forma mais eficiente.</P>

                <P> •O  <span className="weight">desconhecimento da demanda hídrica</span> para as atividades pecuárias e eventos de escassez hídrica podem <span className="weight">comprometer a continuidade da atividade</span>, impactando economias e o abastecimento de alimentos.</P>

                </Paragrafos>


            </DivText>
        </Div>
    )
}