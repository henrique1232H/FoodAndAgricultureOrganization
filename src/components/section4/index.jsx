import "./style.css"
import graphicFive from "../../assets/svg/graphic/graphic-five.svg"


export function SectionFour() {

    return (
        <div className="containerFour">
            <h2>Aplicação do manual da FAO “avaliação sobre uso da água na produção animal e na cadeia de suprimentos” em uma bacia hidrográfica de estudo no sul do Brasil</h2>

            <div className="flexGraphic ">

                    <div>

                        <figure className="change">
                            <img src={graphicFive} alt="" />
                        </figure>
                        

                        <p className="center ss">Área do estudo: Bacia hidrográfica Lajeado Tacongava (150 km2)
                        Localizada na Bacia Hidrográfica Taquari-Antas, região nordeste do estado do RS</p>

                    </div>

                    <div className="flexText2">

                        <div className="block">
                        <h2>Ano do estudo: 2018</h2>

                        <p>Questionários para coleta de dados aplicados entre os anos de 2018 e 2019 em 115 fazendas:</p>
    
                        <ul>
                            <li>37 fazendas com produção de SUÍNOS</li>
                            <li>41 fazendas com produção de AVES</li>
                            <li>67 fazendas com produção de LEITE</li>
                            <li>57 fazendas - sistema à pasto</li>
                            <li>07 fazendas -nsistema semi-confinado</li>
                            <li> 03 fazendas - sistema confinado</li>

                        </ul>

                        <p>Região com tradição em produção animal e agricultura familiar</p>

                        </div>
   
                    </div>
            </div>
        </div>
    )
}