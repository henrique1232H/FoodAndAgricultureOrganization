import "./style.css"

import pasto from "../../assets/svg/productHidric/pasto.svg"
import semiConfinado from "../../assets/svg/productHidric/semiconfinado.svg"
import confinado from "../../assets/svg/productHidric/confinado.svg"

import styled from "styled-components"

const Flex = styled.div`
    display: flex;
    gap: 3rem;

    @media screen and (max-width: 40rem) {
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
`

const Card = styled.div`
    padding: 1rem;

    transition: 300ms all ease-in-out;

    :hover {
         box-shadow: 10px 10px 10px 10px #ccc;
    }

   
`

const H2 = styled.h2`
    font-weight: 800;
`

const Figcaption = styled.figcaption`
    padding-top: 1rem;
`

export function ProdutividadeHídricaLeite() {

    return (
        <section className="Section8">

                <H2>Produtividade Hídrica leite [Kg leite corrido/m3 de água]</H2>

                <div className="flexGraphics">

                <Flex>

                    <Card>
                        
                        <figure>

                            <img src={pasto} alt="" />

                            <Figcaption className="center">
                                <p>Média: 1,01 (1,0% / 99,0%)</p>
                                <p>Min: 0,27 (1,5% / 98,5%)</p>
                                <p>Max: 1,46(0,7% / 99,3%)</p>

                            </Figcaption>
                        </figure>
                    </Card>

                    <Card>

                    <figure>

                        <img src={semiConfinado} alt="" />

                        <Figcaption className="center">
                            <p>Média: 0,95 (0,7% / 99,3%)</p>
                            <p>Min: 0,59 (0,8% / 99,2%)</p>
                            <p>Max: 1,11(0,6% / 99,4%)</p>
                        </Figcaption>
                    </figure>
                    </Card>

                    <Card>
                    <figure>
                        <img src={confinado} alt="" />

                        <Figcaption className="center">
                            <p>Média: 0,96 (0,8% / 99,2%)</p>
                            <p>Min: 0,89 (0,9% / 99,1%)</p>
                            <p>Max: 1,09(0,7% / 99,3%)</p>
                            <p>*(% / %) = % água azul / % água verde</p>
                        </Figcaption>
                        
                    </figure>

                    </Card>


                </Flex>

                <div className="flexA">

                    <p>Links de estudos: 
                        <a href="https://www.mdpi.com/2073-4441/12/11/3014" target="_blank">https://www.mdpi.com/2073-4441/12/11/3014</a>
                    </p>

                    <p>
                        <a href="https://www.sciencedirect.com/science/article/pii/S0048969722042140" target="_blank">https://www.sciencedirect.com/science/article/pii/S0048969722042140</a>
                    </p>

                </div>


            </div>  

        </section>
    )
}