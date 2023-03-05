import "./style.css"

import chickenAround from "../../assets/svg/productAnimals/chickenAround.svg"
import pigAround from "../../assets/svg/productAnimals/pigsAround.svg"
import pasto from "../../assets/svg/productHidric/pasto.svg"
import semiConfinado from "../../assets/svg/productHidric/semiconfinado.svg"
import confinado from "../../assets/svg/productHidric/confinado.svg"

export function SectionEight() {

    return (
        <section className="Section8">

            <div className="dashed">

                <div className="flexGraphics">

                    <div>
                        <h2>Produtividade Hídrica Suínos [kg carcaça/ m3 de água]</h2>


                        <div>
                            <img src={pigAround} alt="" className="icon" />

                            <h3>suinocultura</h3>
                        </div>
                
                    
                        <div className="boxTable">

                            <div className="table">
                                <div className="tableTitle">
                                    <h2>Produtividade Hídrica</h2>  
                                </div>
                            
                            <div className="tableStats">

                                <div className="tableText">
                                    <p>Massa[kg carcaça/m3]</p>
                                    <p>entre 0,23 e 0,51</p>
                                </div>
                            </div>
                            

                            <div className="tableStats">
                                <div className="tableText">
                                    <p>Energia[MJ/m3]</p>
                                    <p>entre 3,66 e 8,01</p>
                                </div>
                            </div>

                            <div className="tableStats">
                                <div className="tableText">
                                    <p>Monetário[R$/m3]</p>
                                    <p>entre 1,10 e 2,40</p>
                                </div>
                            </div>
                        </div>

                    </div>
                        

                    </div>

                    <div>
                        <h2>Produtivida Hídrica Aves [kg carcaça/m3 de água]</h2>
                        
                        <div>
                            <img src={chickenAround} alt="" className="icon" />

                            <h3>avicultura</h3>
                        </div>

                        <div className="boxTable">

                            <div className="table">
                                <div className="tableTitle">
                                    <h2>Produtividade Hídrica</h2>  
                                </div>
                            
                            <div className="tableStats">

                                <div className="tableText">
                                    <p>Massa[kg carcaça/m3]</p>
                                    <p>entre 0,35 e 3,79</p>
                                </div>
                            </div>
                            

                            <div className="tableStats">
                                <div className="tableText">
                                    <p>Energia[MJ/m3]</p>
                                    <p>entre 1,72 e 3,79</p>
                                </div>
                            </div>

                            <div className="tableStats">
                                <div className="tableText">
                                    <p>Monetário[R$/m3]</p>
                                    <p>entre 0,74 e 1,62</p>
                                </div>
                            </div>
                        </div>

                        </div>                       
                    </div>

                </div>

                <h3>Melhores resultados foram encontrados considerando os grãos para ração animal produzidos no estado do MT</h3>

                <h2>Produtividade Hídrica Leite[Kg leite corrido/m3 de água]</h2>

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