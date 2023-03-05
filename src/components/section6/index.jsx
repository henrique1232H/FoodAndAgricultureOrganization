import "./style.css"

import pig from "../../assets/svg/animals/pigIcon.svg"
import cow from "../../assets/svg/animals/cowIcon.svg"
import chicken from "../../assets/svg/animals/chickenIcon.svg"

export function SectionSix() {

    return (
        <section className="containerSectionSix">

            <div className="dashed">
                
                <h1>Consumo de água</h1>

                <div className="flexGraphics outline">
                    <div className="boxTable">
                        <img src={pig} alt="" />

                        <div className="table">
                            <div className="tableTitle">
                              <h2>Suino</h2>  
                            </div>
                            
                            <div className="tableStats">

                                <div className="tableText">
                                    <p>Evapotransipração[%]</p>
                                    <p>99.7</p>
                                </div>
                            </div>
                            

                            <div className="tableStats">
                                <div className="tableText">
                                    <p>Dessedentação[%]</p>
                                    <p>0.1</p>
                                </div>
                            </div>

                            <div className="tableStats">
                                <div className="tableText">
                                    <p>Limpeza[%]</p>
                                    <p>0.2</p>
                                </div>
                            </div>
                        </div>

                    </div>
                    
                    <div className="boxTable">
                        <img src={chicken} alt="" />

                        <div className="table">
                            <div className="tableTitle">
                              <h2>Suino</h2>  
                            </div>
                            
                            <div className="tableStats">

                                <div className="tableText">
                                    <p>Evapotransipração[%]</p>
                                    <p>99.7</p>
                                </div>
                            </div>
                            

                            <div className="tableStats">
                                <div className="tableText">
                                    <p>Dessedentação[%]</p>
                                    <p>0.1</p>
                                </div>
                            </div>

                            <div className="tableStats">
                                <div className="tableText">
                                    <p>Limpeza[%]</p>
                                    <p>0.2</p>
                                </div>
                            </div>
                        </div>

                    </div>


                </div>
                
            
            </div>
            
        </section>
    )
}