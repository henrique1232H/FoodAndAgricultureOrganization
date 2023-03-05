import "./style.css"
import cow from "../../assets/svg/cow.svg"

export function Water() {

    return (

        <section className="sectionWater">


            <div className="textWater">

                <h1>Estudo de caso em uma bacia hidrográfica no sul do Brasil seguindo as orientações do manual da FAO (2019) “Uso da água em produção animal e cadeia de suprimentos”</h1>

            </div>

            <div className="flexWater">

                <div className="flex-1">

                    <h3>Por que fazer a gestão dos usos da água na produção animal?</h3>

                    <div className="p">

                        <p>Até 2050, a FAO estima que a <span className="weight">agricultura</span> precisará produzir quase <span className="weight">50% mais alimentos, rações e biocombustíveis</span>  do que em 2012 para atender à demanda global <a href="https://www.fao.org/3/cb7654en/cb7654en.pdf" target="_blank">[1]</a>.</p>
                    
                        <p>Espera-se que o <span className="weight">consumo de alimentos</span> mais intensivos em água, como a <span className="weight">carne</span>, aumente <span className="weight">15%</span> até 2031 <a href="https://www.oecd-ilibrary.org/agriculture-and-food/oecd-fao-agricultural-outlook-2022-2031_f1b0b29c-en">[2]</a> .</p>

                        <p>Enquanto globalmente a <span className="weight">produção agrícola e pecuária</span>  demanda <span className="weight">72%</span> de toda a água retirada 
                        <a href="https://www.unwater.org/sites/default/files/app/uploads/2021/08/SDG6_Indicator_Report_642_Progress-on-Level-of-Water-Stress_2021_ENGLISH_pages-1.pdf" target="_blank" rel="noopener noreferrer">[3]</a>
                        , sendo <span className="weight">41%</span>  destinado a <span className="weight">produção de alimentação animal </span> <a href="#" target="_blank" rel="noopener noreferrer">[4]</a> . Essa quantidade pode ser ainda maior nos países em desenvolvimento devido à intensificação da produção agrícola, aumentando a competição pela água </p>

                        <p> <span className="weight">Estresse hídrico</span>   causado por secas intensas tem sido mais frequente devido as <span className="weight">mudanças climáticas.</span></p>

                        <p>A  <span className="weight">falta de gestão hídrica</span> <span className="weight">na produção animal</span> pode gerar <span className="weight">perdas de produção.</span> </p>

                        <p> O caminho para a <span className="weight">redução do estresse hídrico</span> passa por <span className="weight">sistemas alimentares sustentáveis e eficientes.</span> </p>
                    </div>
                </div>


                <div className="flex-2">

                    <h3>Gestão hídrica na produção animal: uso mais eficiente dos recursos</h3>

                    <div className="flex-row">

                    <div>

                        <img src={cow} alt="vaca bebendo agua" title="vaca bebendo agua" className="ajust  aaccs" />
                    </div>

                    <div>

                    <p>•As grande maioria das fazendas de produção animal <span className="weight">NÃO</span> mensuram o consumo de água para a produção animal. </p>

                    <p>• <span className="weight">NÃO</span> se gerencia o que <span className="weight">NÃO</span> se mede!!</p>

                    <p>•Ao <span className="weight">medir</span> o consumo de água, o <span className="weight"> produtor compreende os valores</span>  e pode implementar <span className="weight">boas práticas</span> para usar os recursos hídricos de forma mais eficiente.</p>

                    <p> •O  <span className="weight">desconhecimento da demanda hídrica</span> para as atividades pecuárias e eventos de escassez hídrica podem <span className="weight">comprometer a continuidade da atividade</span>, impactando economias e o abastecimento de alimentos.</p>
                    </div>
                    </div>

                </div>


            </div>


        </section>
    )
}