import "./style.css"

import final from "../../assets/final.svg"

export function SectionTen() {

    return (
        <section className="containerSectionTen">

            <div className="ondas">

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
                        <a href="http://ainfo.cnptia.embrapa.br/digital/bitstream/item/228641/1/ProducaoAnimalRecursosHidricos-v2.pdf" className="funciona">http://ainfo.cnptia.embrapa.br/digital/bitstream/item/228641/1/ProducaoAnimalRecursosHidricos-v2.pdf.</a>


                        <p>Produção animal e recursos hídricos: tecnologias para manejo de resíduos e uso eficiente dos insumos v.2</p>
                        <a href="https://www.embrapa.br/busca-de-publicacoes/-/publicacao/1116498/producao-animal-e-recursos-hidricos-tecnologias-para-manejo-de-residuos-e-uso-eficiente-dos-insumos">https://www.embrapa.br/busca-de-publicacoes/-/publicacao/1116498/producao-animal-e-recursos-hidricos-tecnologias-para-manejo-de-residuos-e-uso-eficiente-dos-insumos</a>


                        <p>Produção Animal e Recursos Hídricos v.1</p>
                        <a href="https://www.embrapa.br/busca-de-publicacoes/-/publicacao/1048070/producao-animal-e-recursos-hidricos">https://www.embrapa.br/busca-de-publicacoes/-/publicacao/1048070/producao-animal-e-recursos-hidricos</a>

                    </div>

                </div>

            </div>
                    <div className="final">
                        <img src={final} alt="" />
                    </div>
        </section>
    )
}