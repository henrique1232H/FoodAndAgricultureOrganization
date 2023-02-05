import "./style.css"
import logo from "../../assets/svg/logo.svg"

export function Menu() {

    return (

        <aside className="Menu">

            <a href="#">
                <img src={logo} alt="logo"  title="food and Agriculture Organization of the United Nations"/>
            </a>

        </aside>
    )
}