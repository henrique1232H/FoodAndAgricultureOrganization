
import "./style.css"

import graphic from "../../assets/svg/graphic/lastGraphic.svg"
import { BarCharts } from "../graphicsChart/VerticalBarChart"

export function SectionNone() {

    return (
        <section className="containerSectionNone">
            
            <h1>Escassez hídrica</h1>

            <figure>
                <BarCharts />

                <figcaption className="figCaptionFlex">
                    <p>
                        <a href="https://wulca-waterlca.org/aware/what-is-aware/">
                             Método AWARE (Available Water Remaining) [1]
                        </a>
                       </p>

                    <p>Método BWSI (Blue Water Scarcity Index)</p>
                </figcaption>
            </figure>

            <div className="flexGraphics none">
                <p>Os resultados apresentados neste gráfico são referentes a um cenário com menor disponibilidade hídrica.
                A produção de suínos apresenta o maior impacto em relação a escassez hídrica em comparação com a média global.
                Para cada 1 t carcaça suína são consumidos 15,4 m3 de água</p>

                <p>
                O resultado do método BWSI é binário: 0 (mínima) – 1 (máxima)
                Na área de estudo foi identificada escassez hídrica baixa em todos os cenários avaliados, com contribuição média anual de 93% da atividade de produção animal na escassez hídrica.
                </p>
            </div>

        </section>
    )
}