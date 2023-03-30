import "./style.css"

import chickenAround from "../../assets/svg/productAnimals/chickenAround.svg"
import pigAround from "../../assets/svg/productAnimals/pigsAround.svg"
import pasto from "../../assets/svg/productHidric/pasto.svg"
import semiConfinado from "../../assets/svg/productHidric/semiconfinado.svg"
import confinado from "../../assets/svg/productHidric/confinado.svg"

export function SectionEight() {

    return (
        <section className="Section8">


                <div className="flexGraphics">

                <div className="flexGraphics gap">

                    <figure>

                        <img src={pasto} alt="" />

                        <figcaption>
                            <p>Média: 1,01 (1,0% / 99,0%)</p>
                            <p>Min: 0,27 (1,5% / 98,5%)</p>
                            <p>Max: 1,46(0,7% / 99,3%)</p>

                        </figcaption>
                    </figure>

                    <figure>

                        <img src={semiConfinado} alt="" />

                        <figcaption className="center">
                            <p>Média: 0,95 (0,7% / 99,3%)</p>
                            <p>Min: 0,59 (0,8% / 99,2%)</p>
                            <p>Max: 1,11(0,6% / 99,4%)</p>
                        </figcaption>
                    </figure>

                    <figure>

                        <img src={confinado} alt="" />

                        <figcaption className="end">
                            <p>Média: 0,96 (0,8% / 99,2%)</p>
                            <p>Min: 0,89 (0,9% / 99,1%)</p>
                            <p>Max: 1,09(0,7% / 99,3%)</p>
                            <p>*(% / %) = % água azul / % água verde</p>
                        </figcaption>
                        
                    </figure>
                </div>

                <div className="flexA">

                    <p>Links de estudos: 
                        <a href="https://www.mdpi.com/2073-4441/12/11/3014">https://www.mdpi.com/2073-4441/12/11/3014</a>
                    </p>

                    <p>
                        <a href="https://www.sciencedirect.com/science/article/pii/S0048969722042140">https://www.sciencedirect.com/science/article/pii/S0048969722042140</a>
                    </p>

                </div>


            </div>  

        </section>
    )
}