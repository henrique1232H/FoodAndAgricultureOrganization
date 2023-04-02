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

                <h1>Uso da água na produção animal na região hidrográfica do Guaíba: produtividade e escassez hídrica</h1>

            </div>

            <div className="flexWater">

                <div className="flex-1">

                    <h3>Por que fazer a gestão hídrica na produção animal?</h3>

                    <div className="p">

                        <p>Até 2050, a FAO estima que a agropecuária precisará produzir 50% mais alimentos para atender à demanda global.<a href="https://www.fao.org/3/cb7654en/cb7654en.pdf" target="_blank">[1]</a>.</p>
                    
                        <p>Espera-se que o consumo de alimentos mais intensivos em água, como as proteínas animais, aumente 15% até 2031 [2].<a href="https://www.oecd-ilibrary.org/agriculture-and-food/oecd-fao-agricultural-outlook-2022-2031_f1b0b29c-en" target="_blank">[2]</a> .</p>

                        <p>Globalmente a produção agropecuária demanda 72% de toda a água consumida no mundo
                        <a href="https://www.unwater.org/sites/default/files/app/uploads/2021/08/SDG6_Indicator_Report_642_Progress-on-Level-of-Water-Stress_2021_ENGLISH_pages-1.pdf" target="_blank" rel="noopener noreferrer">[3]</a>
                        , sendo 41% disto consumido na produção de alimentos para os animais<a href="#" target="_blank" rel="noopener noreferrer">[4]</a> . Essa quantidade é ainda maior nos países em desenvolvimento onde a agropecuária representa grande parte da base da economia. </p>

                        <p>Eventos de escassez hídrica causados por secas intensas têm sido mais frequentes devido às mudanças climáticas.</p>

                        <p>A falta de gestão hídrica na produção animal pode gerar perdas de produção e prejuízos econômicos.</p>

                        <p>Devemos ter sistemas pecuários hidricamente eficientes.</p>
                    </div>
                </div>


            </div>


        </Section>
    )
}