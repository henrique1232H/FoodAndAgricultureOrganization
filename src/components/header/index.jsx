import "./style.css"
import { FacebookLogo, LinkedinLogo, TwitterLogo } from "phosphor-react"


export function Heading() {

    return (

        <div className="img">
            

        <div className="text">

            <h1 className="h1Heading">Is our food supply at risk?</h1>

            <div className="icons">

                 <div>
                    <a href="https://www.facebook.com/UNFAO/" target="_blank">

                        <FacebookLogo
                        size={40} />

                    </a>
                </div>

                <div>
                    <a href="https://twitter.com/FAO" target="_blank">

                        <TwitterLogo 
                        size={40}/>

                    </a>
                </div>

                <div>

                    <a href="https://br.linkedin.com/company/fao" target="_blank">

                        <LinkedinLogo 
                        size={40}/>
                    </a>
                    
                </div>
            </div>

        </div>

        </div>

    )
}