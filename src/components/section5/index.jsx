import "./style.css"
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';

import cowsWater from "../../assets/svg/animals/cowsWater.svg"


export function Caracteristica() {

    return (

        <div className="caracteristicas">
            <h1>Características das fazendas </h1>


            <Carousel controls={true} indicators={false} className="carousel">
                <Carousel.Item className="carouselItem">

                    <figure className="imgs">
                        <img src={cowsWater}
                    alt="vaca bebendo agua" />

                        <figcaption>
                             <p>6,108,600 cabeças de suínos</p>

                        <p>Peso carcaça aves: 2,2kg</p>

                        <p>Dieta: soja, milho</p>
                        </figcaption>
                    </figure>
    
                </Carousel.Item>
                
                <Carousel.Item interval={3500} className="carouselItem">

                    <figure className="imgs">
                        <img src={cowsWater} alt="vaca bebendo agua" />

                        <figcaption>
                             <p>Sistema à pasto: 1085 vacas em lactação</p>

                            <p>Produção média de 5,055 litros de leite corrigido/cabeça.ano</p>


                            <p>Dieta (média): 93% volumoso; 7% concentrado</p>

                            <p>Dieta: soja, milho</p>

                            <p>Sistema semi-confinado: 246 vacas em lactação</p>

                            <p>Produção média de 6,312 litros de leite corrigido/cabeça.ano</p>

                            <p>Dieta (média): 86% volumoso; 14% concentrado</p>

                            <p>Sistema confinado: 270 vacas em lactação</p>

                            <p>Produção média de 8,000 litros de leite corrigido/cabeça.ano</p>

                            <p>Dieta (média): 82% volumoso; 18% concentrado</p>
                        </figcaption>
                    </figure>
                    
                </Carousel.Item>

                <Carousel.Item interval={3500} className="carouselItem">

                    <figure className="imgs">
                        <img src={cowsWater} alt="vaca bebendo agua" />

                        <figcaption>
                            <p>55.071 cabeças de suínos</p>

                            <p>Peso carcaça suínos: 97,2kg</p>

                            <p>Dieta: soja, milho</p>
                        </figcaption>
                    </figure>
                    
                </Carousel.Item>
            </Carousel>
        </div>
    )
}