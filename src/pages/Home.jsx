import { Graphic } from "../components/graphic"
import { Heading } from "../components/header"
import { Water } from "../components/gestaoDeAgua"
import { SectionTen } from "../components/section10"
import Animals  from "../components/Animals"
import Agua from "../components/gestaoHidrica"
import Produtividades from "../components/Produtividade"
import FAO from "../components/Fao"
import { SectionFour } from "../components/AplicacaoFao"
import { Caracteristica } from "../components/Carousel"
import  SectionSeven  from "../components/ProdutividadeHidricaSuinosEAves"
import { SectionEight } from "../components/section8"
import { SectionNone } from "../components/section9"
import "./style.css"
import Plano from "../components/PlanoNacional"
import ProdutividadeHidrica from "../components/OqueProdutividade"
import Tabelas from "../components/Tabelas"


export function Home() {

    return (
        <div>
            <Heading />

            <Water />

            <Agua />

            <Animals />

            <Graphic />

            <Produtividades />


            <FAO />
            
            <Plano />

            <ProdutividadeHidrica />

            <SectionFour />

            <Caracteristica />

            <Tabelas />

            <SectionSeven />

            <SectionEight />

            <SectionNone />

            <SectionTen />
        </div>
    )
 }