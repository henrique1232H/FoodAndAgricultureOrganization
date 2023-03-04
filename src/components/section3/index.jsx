import "./style.css"

import cows from "../../assets/svg/product/cows.svg";
import noWater from "../../assets/svg/product/noWater.svg"

export function SectionThree() {

    return (

        <section className="containerAnimals">
 
            <div className="background2">
                    
                    <div className="gridAnimals">

                    <div>
                        <h3>O que é Produtividade Hidrica?</h3>

                        <img src={cows} alt="" />

                        <p>Razão entre o que é produzido a quantidade de água consumida para este fim.</p>


                        <p>O método considera água consumida, sendo ela:</p>

                        <p>Água verde: Evapotranspiração</p>
                        <p>Água técnica (azul), ex: dessedentação, limpeza, refrigeração</p>
                    </div>

                    <div  className="spacing2"/>

                    <div className="impact">
                        <h3>Impacto da produção animal na escassez hídrica</h3>

                        <img src={noWater} alt="" />

                        <p>A mesma quantidade de consumo de água em lugares diferentes não produz o mesmo impacto ambiental porque a disponibilidade hídrica e a vulnerabilidade ambiental não são homogêneas em todo o mundo.</p>

                        <p>Logo, a avaliação de impacto sobre a escassez hídrica fornece informações adicionais para interpretar as contribuições potenciais para o impacto ambiental da produção animal <a href="#">[1]</a> .</p>

                    </div>

                    </div>
            </div>
        </section>
    )
}