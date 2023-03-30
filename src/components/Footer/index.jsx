import "./style.css";

import ATB from "../../assets/parceiros/ATB.png";
import daad from "../../assets/parceiros/daad.png";
import emater from "../../assets/parceiros/emater.png";
import embrapa from "../../assets/parceiros/embrapa.jpg";
import universidade from "../../assets/parceiros/Universidade.png";
import montauri from "../../assets/parceiros/montauri.png";
import serafina from "../../assets/parceiros/SerafinaCorrea.jpg";
import serra from "../../assets/parceiros/SerraBrasao.png";
import guarope from "../../assets/parceiros/Guapore.png";

import styled from "styled-components";

const Footer = styled.footer`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export default function SectionTen() {

    return (
        <Footer>

            
                <div className="flexSectionTen">


                    <div className="fixed">
                        <p>Projeto desenvolvido entre os anos de 2019-2023 através do doutorado da Eng Ambiental Sofia Helena Zanella Carra:
                        Avaliação da Produtividade Hídrica da Produção Agrícola e Pecuária em uma Bacia Hidrográfica Experimental Localizada no Sul do Brasil
                        Bolsa de estudos do DAAD (Ref. 91693718)
                        Projeto desenvolvido em parceria entre:
                        Leibniz-Institut für Agrartechnik und Bioökonomie e.V. (ATB): Dr PD Katrin Drastig</p>
                    </div>

                    <div className="fixed">
                        <p>Empresa Brasileira de Pesquisa Agropecuária (Embrapa Pecuária Sudeste): Dr Julio Cesar Pascale Palhares
                        Universidade de Caxias do Sul: Dr Vania Elisabete Schneider, Dr Taison Bortolin, Dr Cintia Paese Giacomello
                        EMATER-ASCAR/RS, Unidade Serafina Correa: Eng. Leandro Ebert
                        Prefeituras municipais de Serafina Correa, União da Serra, Montauri e Guaporé</p>
                    </div>

                    <div className="test">
                        <h2>Outras referências sobre o tema no Brasil:</h2>

                        <p>Produção animal e recursos hídricos: uso da água nas dimensões quantitativa e qualitativa e cenários regulatórios e de consumo v.3 </p>



                        <p>Produção animal e recursos hídricos: tecnologias para manejo de resíduos e uso eficiente dos insumos v.2</p>
                        <a href="https://www.embrapa.br/busca-de-publicacoes/-/publicacao/1116498/producao-animal-e-recursos-hidricos-tecnologias-para-manejo-de-residuos-e-uso-eficiente-dos-insumos">https://www.embrapa.br/busca-de-publicacoes/-/publicacao/1116498/producao-animal-e-recursos-hidricos-tecnologias-para-manejo-de-residuos-e-uso-eficiente-dos-insumos</a>


                        <p>Produção Animal e Recursos Hídricos v.1</p>
                        <a href="https://www.embrapa.br/busca-de-publicacoes/-/publicacao/1048070/producao-animal-e-recursos-hidricos">https://www.embrapa.br/busca-de-publicacoes/-/publicacao/1048070/producao-animal-e-recursos-hidricos</a>

                    </div>

                </div>

      
                    <h3>Parceiros</h3>
                    <div className="final">

                            
                        <img src={daad} alt="" />
                        
                        <img src={ATB} alt="" />
                        <img src={universidade} alt="" />
                        <img src={embrapa} alt="" />
                        <img src={emater} alt="" />
                        <img src={serafina} alt="" title="Prefeitura de Serafina Corrêa"/>

                        <img src={serra} alt="" title="Prefeitura de União da serra"/>

                        <img src={montauri} alt="" title="Prefeitura de Montauri" />

                        <img src={guarope} alt="" title="Prefeitura de Guaporé" />
                    </div>
        </Footer>
    )
}