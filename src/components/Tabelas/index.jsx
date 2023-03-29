
import styled from "styled-components"

import "./style.css"


const Section = styled.section`
    height: 100vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 3rem;

    @media screen and (max-width: 40rem) {
        flex-direction: column;
    }
`

const Table = styled.table`
    background: rgba(255, 255, 255, 0.6);
    height: 100%;
    min-height: 10vh;
    max-height: 30vh;
    width: 100%;
    min-width: 20%;
    max-width: 40%;
    border-radius: 2%;


    filter: drop-shadow(0px 4px 5px rgba(0, 0, 0, 0.5));
`
const Tr = styled.tr`
    border: 1px solid #FFF;
    border-radius: 2%;
`

const Td = styled.th`
    text-align: center;
    border: 1px solid #fff;
    font-size: 2rem;
`

const Thead = styled.thead`
    border: 1px solid #fff;
    border-radius: 2%;
`


const TitleTable = styled.td`
font-size: 2rem;
padding-left: 1rem;

`
const Abc = styled.th`
    font-size: 2rem;
    text-align: center;
    border: 1px solid #fff
`

const Title = styled.th`
    text-align: center;
    font-size: 2rem;

`


export default function Tabelas() {

    return (
        <Section className="img">
                <Table>
                    <Thead>
                        <Tr>
                            <Title colSpan={4}>Consumo de água: Bovinos</Title>
                            <th></th>
                            <th></th>
                        </Tr>

                        <Tr>
                            <Abc></Abc>
                            <Abc>Pasto</Abc>
                            <Abc>Semi-confinado</Abc>
                            <Abc>Confinado</Abc>
                        </Tr>
                    </Thead>

                    <tbody>
                        <Tr>
                            <TitleTable>EvapoTranspiração[%]</TitleTable>
                            <Td>99.1</Td>
                            <Td>0.7</Td>
                            <Td>0.6</Td>
                        </Tr>

                        <Tr>
                            <TitleTable>Dessedentação</TitleTable>
                            <Td>0.8</Td>
                            <Td>0.7</Td>
                            <Td>0.6</Td>
                        </Tr>

                        <Tr>
                            <TitleTable>Limpeza[%]</TitleTable>
                            <Td>0.1</Td>
                            <Td>0.1</Td>
                            <Td>0.1</Td>
                        </Tr>

                        <Tr>
                            <TitleTable>Refrigeração[%]</TitleTable>
                            <Td>-</Td>
                            <Td>-</Td>
                            <Td>0.1</Td>
                        </Tr>
                    </tbody>

                </Table>

                <Table>

                    <Thead>
                        <Tr>
                            <Title colSpan={3}> Consumo de água</Title>
                            <th></th>
                            <th></th>
                        </Tr>

                        <Tr>
                            <Abc></Abc>
                            <Abc>Suínos</Abc>
                            <Abc>Aves</Abc>
                        </Tr>

                    </Thead>

                    <tbody>
                        <Tr>
                            <TitleTable>Evapotranspiração[%]</TitleTable>
                            <Td>99,7</Td>
                            <Td>99,8</Td>
                        </Tr>

                        <Tr>
                            <TitleTable>Dessedentação[%]</TitleTable>
                            <Td>0.1</Td>
                            <Td>0.1</Td>
                        </Tr>
                        
                        <Tr>
                            <TitleTable>Limpeza[%]</TitleTable>
                            <Td>0.2</Td>
                            <Td>0.002</Td>
                        </Tr>

                        <Tr>
                            <TitleTable>Refrigeração[%]</TitleTable>
                            <Td>-</Td>
                            <Td>0.1</Td>
                        </Tr>
                    </tbody>

                </Table>
        </Section>
    )
}