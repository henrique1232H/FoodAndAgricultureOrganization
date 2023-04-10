import "./style.css"
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import styled from "styled-components";


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

const Text = styled.div`
    display: flex;
    flex-direction: column;
    height: auto;
    padding: 0.5rem;
    margin-top: 1rem;
    font-size: 1.4rem;
`

const BackgroundWhite = styled.div`
    height: auto;
    background: #fff;
    padding: 1rem;
`

export function Caracteristica() {

    return (

        <Section>
            <h1>Características das fazendas </h1>


            <Carousel controls={true} indicators={false} className="carousel">
                <Carousel.Item className="carouselItem">

                    <div>

                        <BackgroundWhite>
                            <div className="imgCow1" />
                        </BackgroundWhite>

                        <Text>
    
                            <p>Sistema à pasto: 1085 vacas em lactação</p>

                            <p>Produção média de 5,055 litros de leite corrigido/cabeça.ano</p>

                            <p>Dieta (média): 93% volumoso; 7% concentrado</p>

                            <p>Dieta: soja, milho</p>

                            <p>Sistema semi-confinado: 246 vacas em lactação</p>
                        </Text>
                    </div>
    
                </Carousel.Item>
                
                <Carousel.Item interval={3500} className="carouselItem">

                    <div>

                        <BackgroundWhite>
                            <div className="imgPig1" />
                        </BackgroundWhite>

                        <Text>

                            <p>55.071 cabeças de suínos</p>

                            <p>Peso carcaça suínos: 97,2kg</p>

                            <p>Dieta: soja, milho</p>

                        </Text>
                    </div>

                    
                </Carousel.Item>

                <Carousel.Item interval={3500} className="carouselItem">


                    <div>

                        <BackgroundWhite>
                            <div className="imgChicken1" />
                        </BackgroundWhite>

                        <Text>

                            <p>6.108,600 cabeças de suínos</p>
                            <p>Peso carcaça aves:2,2kg</p>
                            <p>Dieta: soja, milho</p>
                     
                        </Text>
                    </div>
                    
                </Carousel.Item>
            </Carousel>
        </Section>
    )
}