import styled from "styled-components"

const Tabelas = styled.div`
    width: 100%;
    border: 1px solid #153C52;
    display: flex;
    flex-direction: column;
    border-radius: 20px;
`


export default function TabelaTwo() {

    return (
        <div className="boxTable">

                            <Tabelas>
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
                        </Tabelas>

                        </div>          
    )
}