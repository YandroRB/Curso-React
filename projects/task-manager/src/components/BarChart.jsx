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

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function BarChart({ chartData }) {

  return (
    <div className="bg-white p-5 rounded-sm my-10">
      <Bar
        data={ {
          labels: chartData.labels,
          datasets: [
            {
              label: chartData.labels[0],
              data: [chartData.data[0], 0, 0], // Solo mostramos la barra para tareas completas
              backgroundColor: 'rgba(75, 192, 192, 0.6)',
            },
            {
              label: chartData.labels[1],
              data: [0, chartData.data[1], 0], // Solo mostramos la barra para tareas pendientes
              backgroundColor: 'rgba(255, 99, 132, 0.6)',
            },
            {
              label: chartData.labels[2],
              data: [0, 0, chartData.data[2]], // Solo mostramos la barra para tareas en progreso
              backgroundColor: 'rgba(54, 162, 235, 0.6)',
            },
          ],
        }}
        options={
          {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: {
                display: true,
                position: 'top',
              },
            },
            scales: {
              x: {
                stacked: true, // Para centrar las barras en cada etiqueta
              },
              y: {
                stacked: true,
              },
            },
          }
        }
        width={200} height={400}
      />
    </div>
  );
}

export default BarChart;
