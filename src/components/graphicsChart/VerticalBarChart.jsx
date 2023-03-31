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
        data: [120, 80.0, 45.0, 90.0,30.0, 30.0, 20.0, 30.0, 5.0, 40.0, 30.0, 90.0],
        backgroundColor: 'rgba(0, 255, 4, 0.5)',
      },
      {
        label: 'Porco',
        data: [120.0, 149.6, 145.1, 126.0, 101.9, 69.4, 59.7, 64.6, 33.1, 59.5, 61.9, 93.0],
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },

      {
        label: 'Leite - sistema à pasto',
        data: [80.0, 90.0, 95.0, 80.0, 60.0, 42.0, 40.0, 42.0, 20.0, 40.0, 40.0, 61.9],
        backgroundColor: '#ffee00',
      },

      {
        label: 'Leite - sistema semi-conf ',
        data: [70.0, 80.0, 85.0, 70.0 , 50.0, 40.0, 38.0, 40.0, 20.0, 40.0, 43.0, 70.0 ],
        backgroundColor: 'rgba(255, 0, 47, 0.5)',
      },

      {
        label: 'Leite - sistema confinado',
        data: [82.0, 90.0, 85.0, 80.0, 52.0, 45.0, 40.0, 43.0, 20.0, 38.0, 40.0, 59.4  ],
        backgroundColor: 'rgba(13, 0, 255, 0.5)',
      },
    ],
  };
  
  export function BarCharts() {
    return <Bar options={options} data={data} />;
  }
  