import { Graphic } from "../components/graphic"
import { Heading } from "../components/header"
import { Menu } from "../components/menu/Menu"
import { Water } from "../components/section1"
import { Animals } from "../components/section2"
import { SectionThree } from "../components/section3"
import { SectionFour } from "../components/section4"
import { Caracteristica } from "../components/section5"
import { SectionSix } from "../components/section6"
import { SectionSeven } from "../components/section7"
import "./style.css"


export function Home() {

    return (
        <div>
            <Menu />

            <Heading />

            <Water />

            <Animals />

            <Graphic />

            <SectionThree />

            <SectionFour />

            <Caracteristica />

            <SectionSix />

            <SectionSeven />
        </div>
    )
 }