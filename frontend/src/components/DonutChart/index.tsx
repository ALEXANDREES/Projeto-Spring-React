import axios from 'axios';
import Chart from 'react-apexcharts';
import { SaleSum } from 'types/sale';
import { BASE_URL } from 'utils/requests';

type ChartData = {
    series: number[];
    labels: string[];
}

const DonutChart = () => {

    // FORMA ERRADA
    let charData: ChartData = { series: [], labels: []};

    // FORMA ERRADA
    axios.get(`${BASE_URL}/sales/amount-by-seller`).then(response => {
        const data = response.data as SaleSum[];
        const myLabels = data.map(item => item.sellerName);
        const mySeries = data.map(item => item.sum);

        charData = { series: mySeries, labels: myLabels };

        console.log(charData)
    })
    // const mockData = {
    //     series: [477138, 499928, 444867, 220426, 473088],
    //     labels: ['Anakin', 'Barry Allen', 'Kal-El', 'Logan', 'Padmé']
    // }

    const options = {
        legend: {
            show: true
        }
    }

    return (
        <Chart
            options={{ ...options, labels: charData.labels }}
            series={charData.series}
            type="donut"
            height="240"
        />
    );
}

export default DonutChart;
