import "./style.css"

import cow from "../../assets/svg/animals/cowIcon.svg"

export function SectionSix() {

    return (
        <section className="containerSectionSix">

            <div className="dashed">
                
                <h1>Consumo de água</h1>

                <div className="flexGraphics outline">
                    <div>
                        <img src={cow} alt="" />

                        <table>
                            <thead>
                                <td>
                                    <th>
                                        <h2>Suino</h2>
                                    </th>
                                </td>
                            </thead>

                            <tbody>
                                <td>
                                    <th>Evapotranspiração[%] </th>
                                </td>
                            </tbody>
                        </table>

                    </div>

                    <div>
                        <h2>tete</h2>
                    </div>
                </div>
                
            
            </div>
            
        </section>
    )
}