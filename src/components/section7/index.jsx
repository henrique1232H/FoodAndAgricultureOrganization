import "./style.css"

import triangule from "../../assets/svg/triangule.svg"

export function SectionSeven() {

    return (
        <section className="ContainerSectionSeven">

            <h1>Produtividade Hídrica Suínos e Aves</h1>

            <h2 className="centers">4 cenários avaliados avaliar o efeito da implementação de melhores práticas agrícolas:</h2>
           

            <div className="SevenText">

                <div>
                    <p>Cenário 1. Rendimento médio anual das culturas (cenário atual)</p>

                    <p>Cenário 2. Redução de 50% da evaporação do solo</p>

                    <p>Cenário 3. Maior rendimento da produtividade das culturas</p>

                    <p>Cenário 4. Redução de 50% da evaporação do solo sobre o 3° cenário</p>

                    <p className="spac">Link para o estudo: <a href="https://www.mdpi.com/2073-4441/12/11/3014">https://www.mdpi.com/2073-4441/12/11/3014</a> </p>

                </div>


                <div className="spacing">
                    <img src={triangule} alt="" />
                </div>

                <div>
                    <p>Rotações de cultura analisadas:</p>

                    <p>Soja - <span className="strong">SAFRA*</span> - azevém</p>

                    <p>Soja - <span className="strong">SAFRA*</span> - pousio</p>

                    <p>Soja - <span className="strong">SAFRINHA**</span> - pousio</p>

                    <p>Milho (Safra* - verão / SAFRINHA** - inverno)</p>


                    <div className="inputs">

                        <div>
                            <p>Mato Grosso</p>
                        </div>

                        <div>
                            <p>Paraná</p>
                        </div>

                        <div>
                            <p>Rio Grande do Sul</p>
                        </div>
                    </div>
                </div>


            </div>
        </section>
    )
}