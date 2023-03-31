import "./style.css";

import ATB from "../../assets/parceiros/ATB.png";
import daad from "../../assets/parceiros/daad.png";
import emater from "../../assets/parceiros/emater.png";
import embrapa from "../../assets/parceiros/embrapa.jpg";
import universidade from "../../assets/parceiros/Universidade.png";
import montauri from "../../assets/parceiros/montauri.png";
import serafina from "../../assets/parceiros/Serra.jpeg";
import serra from "../../assets/parceiros/SerraBrasao.png";
import guarope from "../../assets/parceiros/Guapore.png";

import styled from "styled-components";

const Footer = styled.footer`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: auto;
`

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 3rem;
    background: linear-gradient(#0099ff, #00099F);
    padding: 4rem 5rem;

    @media screen and (max-width: 40rem) {
        grid-template-columns: 1fr;
    }
    
`

const P = styled.p`
    font-size: 1.5rem;
    color: #fff;
` 

const Block = styled.div`

`

const Final = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
`

const Img = styled.img`
    height: 11.8vh;
`

export default function SectionTen() {

    return (
        <Footer>

            
                <Grid>


                    <Block>
                        <P>Projeto desenvolvido entre os anos de 2019-2023 através do doutorado da Eng Ambiental Sofia Helena Zanella Carra:
                        Avaliação da Produtividade Hídrica da Produção Agrícola e Pecuária em uma Bacia Hidrográfica Experimental Localizada no Sul do Brasil
                        Bolsa de estudos do DAAD (Ref. 91693718)
                        Projeto desenvolvido em parceria entre:
                        Leibniz-Institut für Agrartechnik und Bioökonomie e.V. (ATB): Dr PD Katrin Drastig</P>
                    </Block>

                    <Block>
                        <P>Empresa Brasileira de Pesquisa Agropecuária (Embrapa Pecuária Sudeste): Dr Julio Cesar Pascale Palhares
                        Universidade de Caxias do Sul: Dr Vania Elisabete Schneider, Dr Taison Bortolin, Dr Cintia Paese Giacomello
                        EMATER-ASCAR/RS, Unidade Serafina Correa: Eng. Leandro Ebert
                        Prefeituras municipais de Serafina Correa, União da Serra, Montauri e Guaporé</P>
                    </Block>

                    <Block>
                        <h2>Outras referências sobre o tema no Brasil:</h2>

                        <P>Produção animal e recursos hídricos: uso da água nas dimensões quantitativa e qualitativa e cenários regulatórios e de consumo v.3 </P>



                        <P>Produção animal e recursos hídricos: tecnologias para manejo de resíduos e uso eficiente dos insumos v.2</P>
                        <a href="https://www.embrapa.br/busca-de-publicacoes/-/publicacao/1116498/producao-animal-e-recursos-hidricos-tecnologias-para-manejo-de-residuos-e-uso-eficiente-dos-insumos" target="_blank">https://www.embrapa.br/busca-de-publicacoes/-/publicacao/1116498/producao-animal-e-recursos-hidricos-tecnologias-para-manejo-de-residuos-e-uso-eficiente-dos-insumos</a>


                        <P>Produção Animal e Recursos Hídricos v.1</P>
                        <a href="https://www.embrapa.br/busca-de-publicacoes/-/publicacao/1048070/producao-animal-e-recursos-hidricos" target="_blank">https://www.embrapa.br/busca-de-publicacoes/-/publicacao/1048070/producao-animal-e-recursos-hidricos</a>

                    </Block>

                </Grid>

      
                    <h3>Parceiros</h3>
                    <Final>

                            
                        <Img src={daad} alt="" />
                        
                        <Img src={ATB} alt="" />
                        <Img src={universidade} alt="" />
                        <Img src={embrapa} alt="" />
                        <Img src={emater} alt="" />
                        <Img src={serafina} alt="" title="Prefeitura de Serafina Corrêa"/>

                        <Img src={serra} alt="" title="Prefeitura de União da serra"/>

                        <Img src={montauri} alt="" title="Prefeitura de Montauri" />

                        <Img src={guarope} alt="" title="Prefeitura de Guaporé" />
                    </Final>
        </Footer>
    )
}