import "./style.css"
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import styled from "styled-components";
import cow from "../../assets/svg/animals/cowWaters.jpg";
import pig from "../../assets/svg/animals/pig-gc.jpg"
import chicken from "../../assets/svg/animals/chicken.jpg"


const Imgss = styled.img`
    height: 100%;
    min-height: 20vh;
    max-height: 50vh;
    background-size: cover;
    background-position: 1rem 2rem;

`

const Section = styled.section`
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media screen and (max-width:40rem) {
        height: 100vh;
    }

`


export function Caracteristica() {

    return (

        <Section>
            <h1>Características das fazendas </h1>


            <Carousel controls={true} indicators={false} className="carousel">
                <Carousel.Item className="carouselItem">

                    <figure className="figureImg">

                        <Imgss src={cow} />

                        <figcaption>
                            
                             <p>Sistema à pasto: 1085 vacas em lactação</p>

                            <p>Produção média de 5,055 litros de leite corrigido/cabeça.ano</p>


                            <p>Dieta (média): 93% volumoso; 7% concentrado</p>

                            <p>Dieta: soja, milho</p>

                            <p>Sistema semi-confinado: 246 vacas em lactação</p>
                        </figcaption>
                    </figure>
    
                </Carousel.Item>
                
                <Carousel.Item interval={3500} className="carouselItem">

                    <figure className="figureImg">

                        <Imgss src={pig} />


                        <figcaption>

                        <p>55.071 cabeças de suínos</p>

                        <p>Peso carcaça suínos: 97,2kg</p>

                        <p>Dieta: soja, milho</p>

                        </figcaption>
                    </figure>
                    
                </Carousel.Item>

                <Carousel.Item interval={3500} className="carouselItem">

                    <figure className="figureImg">

                        <Imgss src={chicken} />
                       

                        <figcaption>
                            
                            <p>6.108,600 cabeças de suínos</p>
                            <p>Peso carcaça aves:2,2kg</p>
                            <p>Dieta: soja, milho</p>
                        </figcaption>
                    </figure>
                    
                </Carousel.Item>
            </Carousel>
        </Section>
    )
}