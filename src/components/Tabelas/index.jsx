import styled from "styled-components";

import "./style.css";

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
`;

const Table = styled.table`
  background: rgba(255, 255, 255, 0.6);
  height: 100vh;
  min-height: 2vh;
  max-height: 5vh;
  width: 100%;
  min-width: 2%;
  max-width: 10%;
  border-radius: 2px;

  filter: drop-shadow(0px 4px 5px rgba(0, 0, 0, 0.5));

  @media screen and (max-width: 40rem) {
    border: 0;
  }


`;
const Tr = styled.tr`
  border: 1px solid #fff;
  border-radius: 2%;

  @media screen and (max-width:40rem) {
    border-bottom: 3px solid #ddd;
    display: block;
    margin-bottom: 0.625rem;
    padding: 0;
  }

  
`;

const Td = styled.th`
  text-align: center;
  border: 1px solid #fff;
  font-size: 2rem;

  @media screen and (max-width: 40rem) {
    border-bottom: 1px solid #ddd;
    display: block;
    font-size: 1rem;
    text-align: right;

    ::before {
      content: attr(data-label);
      float: left;
      font-weight: 700;
      text-transform: uppercase;
      font-size: 0.9rem
    }
  }
`;

const Thead = styled.thead`
  border: 1px solid #fff;
  border-radius: 2%;

  @media screen and (max-width:40rem) {
    border: none;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
  }
`;

const TitleTable = styled.td`
  font-size: 2rem;
  padding-left: 1rem;
`;
const Abc = styled.th`
  font-size: 2rem;
  text-align: center;
  border: 1px solid #fff;

  @media screen and (max-width: 40rem) {
    border: none;
  }
`;

const Title = styled.th`
  text-align: center;
  font-size: 2rem;
`;

export default function Tabelas() {
  return (
    <Section className="imgs">
      <Table className="ABCAD">
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
  );
}
