import { Graphic } from "../components/graphic"
import { Heading } from "../components/header"
import { Water } from "../components/gestaoDeAgua"
import { SectionTen } from "../components/section10"
import { Animals } from "../components/section2"
import Agua from "../components/gestaoHidrica"
import { SectionThree } from "../components/section3"
import { SectionFour } from "../components/section4"
import { Caracteristica } from "../components/section5"
import { SectionSix } from "../components/section6"
import { SectionSeven } from "../components/section7"
import { SectionEight } from "../components/section8"
import { SectionNone } from "../components/section9"
import "./style.css"


export function Home() {

    return (
        <div>
            <Heading />

            <Water />

            <Agua />

            <Animals />

            <Graphic />

            <SectionThree />

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