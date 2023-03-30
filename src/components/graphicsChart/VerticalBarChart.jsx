import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  import { Bar } from 'react-chartjs-2';
  import {faker} from "@faker-js/faker";
  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );
  
  export const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom',
      },
      title: {
        display: true,
        text: 'Impacto da produção animal na escassez hídrica (AWARE)',
      },
    },
  };
  
  const labels = ['Jan', 'Feb', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', "Jul", "Ago", "Set", "Nov", "Dez"];
  
  export const data = {
    labels,
    datasets: [
      {
        label: 'Aves',
        data: labels.map(() => faker.datatype.number({ min: 0, max: 50 })),
        backgroundColor: 'rgba(0, 255, 4, 0.5)',
      },
      {
        label: 'Porco',
        data: labels.map(() => faker.datatype.number({ min: 0, max: 50 })),
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },

      {
        label: 'Leite - sistema à pasto',
        data: labels.map(() => faker.datatype.number({ min: 0, max: 50 })),
        backgroundColor: '#ffee00',
      },

      {
        label: 'Leite - sistema semi-conf ',
        data: labels.map(() => faker.datatype.number({ min: 0, max: 50 })),
        backgroundColor: 'rgba(255, 0, 47, 0.5)',
      },

      {
        label: 'Leite - sistema confinado',
        data: labels.map(() => faker.datatype.number({ min: 0, max: 50 })),
        backgroundColor: 'rgba(13, 0, 255, 0.5)',
      },
    ],
  };
  
  export function BarCharts() {
    return <Bar options={options} data={data} />;
  }
  