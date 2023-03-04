import "./style.css"
import graphicFive from "../../assets/svg/graphic/graphic-five.svg"


export function SectionFour() {

    return (
        <div className="containerFour">
            <h2>Aplicação do manual da FAO “avaliação sobre uso da água na produção animal e na cadeia de suprimentos” em uma bacia hidrográfica de estudo no sul do Brasil</h2>

            <div className="flexGraphics ">

                    <div>

                        <figure className="change">
                            <img src={graphicFive} alt="" />
                        </figure>
                        

                        <p className="center">Área do estudo: Bacia hidrográfica Lajeado Tacongava (150 km2)
                        Localizada na Bacia Hidrográfica Taquari-Antas, região nordeste do estado do RS</p>

                    </div>

                    <div className="flexText2">
                        <p>Ano do estudo: 2018</p>

                        <p>Questionários para coleta de dados aplicados entre os anos de 2018 e 2019 em 115 fazendas:</p>
    
                        <ul>
                            <li>37 fazendas com produção de SUÍNOS</li>
                            <li>41 fazendas com produção de AVES</li>
                            <li>67 fazendas com produção de LEITE</li>
                        </ul>

                        <ul>
                            <li>57 fazendas - sistema à pasto</li>
                            <li>07 fazendas -nsistema semi-confinado</li>
                            <li> 03 fazendas - sistema confinado</li>
                        </ul>


                        <p>Região com tradição em produção animal e agricultura familiar</p>
   
                    </div>
            </div>
        </div>
    )
}