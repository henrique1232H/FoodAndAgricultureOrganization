import "./style.css";

import pig from "../../assets/svg/animals/pig-gc.jpg"
import cowWater from "../../assets/svg/animals/cowWaters.jpg"
import chickens from "../../assets/svg/animals/chicken.jpg"


export default function Animals() {
 
    return (
        <section className="containerAnimals">

            <div className="background">

            <h2>Brasil se destaca como um dos maiores produtores de proteína animal no mundo e desempenha um papel fundamental na segurança alimentar global</h2>

            <div className="gridAnimals">

                <div className="border">
                    <h3>Pecuaria de corte</h3>

                    <img src={cowWater} alt="vaca"  className="vaca"/>

                    <p>2º maior rebanho global</p>
                    <p>2º maior produtor global</p>
                    <p>(2021: 9,714.25 1000 TEC) <a href="https://www.abiec.com.br/wp-content/uploads/Beef-Report-2022_atualizado_jun2022.pdf" target="_blank">[2]</a></p>
                </div>
                

                <div className="border-2">
                    <h3>Carne de porco</h3>

                    <img src={pig} alt="" />

                    <p>Maior exportador global</p>
                    <p>4º maior produtor global</p>
                    <p>(2021: 99,901 mil ton)<a href="https://abpa-br.org/wp-content/uploads/2022/05/Relatorio-Anual-ABPA-2022-1.pdf" target="_blank">[1]</a></p>
                </div>


                <div>
                    <h3>Carne de porco</h3>

                    <img src={chickens} alt="" />

                    <p>4º maior exportador global</p>
                    <p>4º maior produtor global</p>
                    <p>(2021: 108,949 mil ton)
                        <a href="https://abpa-br.org/wp-content/uploads/2022/05/Relatorio-Anual-ABPA-2022-1.pdf" target="_blank ">[1]</a>
                        </p>
                </div>
            </div>
            </div>
        </section>
    )
}