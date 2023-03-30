import styled from "styled-components"

const Table = styled.div`
    width: 100%;
    border: 1px solid #153C52;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-radius: 20px;
`

const Title = styled.h3`
    font-size: 2rem;
`

export default function TabelaOne() {

    return (

        <Table>
            <div className="tableTitle">
                <h2>Produtividade Hídrica</h2>  
            </div>
        
        <div className="tableStats">

            <div className="tableText">
                <p>Massa[kg carcaça/m3]</p>
                <p>entre 0,23 e 0,51</p>
            </div>
        </div>
        

        <div className="tableStats">
            <div className="tableText">
                <p>Energia[MJ/m3]</p>
                <p>entre 3,66 e 8,01</p>
            </div>
        </div>

        <div className="tableStats">
            <div className="tableText">
                <p>Monetário[R$/m3]</p>
                <p>entre 1,10 e 2,40</p>
            </div>
        </div>
    </Table>
    )
}