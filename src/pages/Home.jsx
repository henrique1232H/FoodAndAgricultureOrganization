import { Graphic } from "../components/graphic"
import { Heading } from "../components/header"
import { Water } from "../components/gestaoDeAgua"
import { SectionTen } from "../components/section10"
import Animals  from "../components/Animals"
import Agua from "../components/gestaoHidrica"
import Produtividades from "../components/Produtividade"
import FAO from "../components/Fao"
import { SectionFour } from "../components/section4"
import { Caracteristica } from "../components/section5"
import { SectionSix } from "../components/section6"
import { SectionSeven } from "../components/section7"
import { SectionEight } from "../components/section8"
import { SectionNone } from "../components/section9"
import "./style.css"
import Plano from "../components/PlanoNacional"


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

            <SectionFour />

            <Caracteristica />

            <SectionSix />

            <SectionSeven />

            <SectionEight />

            <SectionNone />

            <SectionTen />
        </div>
    )
 }