import "./style.css"

import styled from "styled-components";

const Section = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

`

export function Water() {

    return (

        <Section>


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


            </div>


        </Section>
    )
}