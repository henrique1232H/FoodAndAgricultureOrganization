import "./style.css";

import graphicOne from "../../assets/svg/graphic/graphic-one.svg"
import graphicTwo from "../../assets/svg/graphic/graphic-two.svg";
import graphicThree from "../../assets/svg/graphic/graphic-three.svg";
import graphicFour from "../../assets/svg/graphic/graphic-four.svg";
import imgVersion from "../../assets/img/img-version-1.svg";


export function Graphic() {

    
    return ( 
        <section className="containerGraphic">
            
            <div className="flexGraphic">

                <div className="h2Consert">
                     <h2>As atividades de produção animal e irrigação representam 77,7% do consumo de água no Brasil!!</h2>

                        <figure>
                            <img src={graphicOne} alt="grafico"  className="ajust"/>

                            <figcaption>
                                <a href="https://www.snirh.gov.br/portal/centrais-de-conteudos/conjuntura-dos-recursos-hidricos/conjuntura-2020">https://www.snirh.gov.br/portal/centrais-de-conteudos/conjuntura-dos-recursos-hidricos/conjuntura-2020</a>
                            </figcaption>
                        </figure>

                    <p>Estima-se que <span className="weight">41% da água</span> utilizada na <span className="weight">agricultura</span> seja para a produção de culturas destinadas a <span className="weight">produção animal</span> <a href="#">[1]</a>  </p>
                    
                </div>
                

                <div className="flexGraphics">

                    <div>
                        <img className="align" src={graphicTwo} alt="" />
                    </div>
                    

                    <div className="arrumar">
                    <h2>A cultura da abundância hídrica no Brasil</h2>

                    <p>O Brasil possui 12% da água doce do planeta, mas a sua distribuição é desigual</p>

                    <p>A região produtora de alimentos é a que mais sofre com estiagens</p>

                    <p>Secas intensas, como observadas em 2021, quando o clima seco no centro-sul do Brasil levou a uma escassez de 267 km3 de água retida em rios, lagos, solo e aquíferos, em comparação com a média sazonal dos últimos 20 anos, podem ser mais intensas e frequente devido às mudanças climáticas[1] </p>
                    </div>

                    

                </div>


                <div className="">

            <div className="orientacao"> 
            
            
                <h1>Orientações da FAO para avaliação do uso da água em sistemas de produção animal integrando a cadeia de suprimentos</h1>

                <div className="flexGraphics"> 
                
                
                
                    <div>
                        <figure>
                            <img src={imgVersion} alt="" />

                            <figcaption><a href="https://www.fao.org/3/ca5685en/ca5685en.pdf" target="_blank">https://www.fao.org/3/ca5685en/ca5685en.pdf</a></figcaption>
                        </figure>
                        
                    </div>

                    <div>
                        <p>Com o objetivo de padronizar a avaliação sobre uso da água na produção animal, um grupo de 33 experts participou da elaboração de um guia orientativo.</p>

                        <p>O manual da FAO, publicado em 2019, orienta:</p>

                        <p>- Como fazer um inventário de usos da água, considerando os usos diretos e indiretos</p>

                        <p>- Calcular, avaliar e divulgar a Produtividade Hídrica e a Escassez Hídrica</p>
                    </div>
                
            

                </div>
                

                <div className="flexGraphics">
                    <div className="marginLeft padding">
                        <img src={graphicThree} alt=""  className="ajust"/>

                         <p> O Plano Nacional de Segurança Hídrica <a href="#">[1]</a>  apresenta estimativas de risco de perda produtiva para os setores da indústria, pecuária e agricultura irrigada, relacionada a falta de oferta de água. </p>
                    </div>
                
                <div>
                    <img src={graphicFour} alt="" />
                </div>
                </div>

            </div>
            </div>
            </div>
        </section>
    )
}