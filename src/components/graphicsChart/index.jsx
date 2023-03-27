import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend)

export const data = {
    labels: ['Irrigação', 'Mineração', 'Abastecimento Urbano', 'Abastecimento Animal', 'Termelétricas', 'Indústria', "Abastecimento Rural"],
  datasets: [
    {
      label: 'Quantos %',
      data: [66.1, 0.9, 9.0, 11.6, 0.3, 66.1, 2.4],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        "#000"
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
        "#000"
      ],
      borderWidth: 2,
    },
  ],
};

export default function App() {
    return <Doughnut data={data} />
}