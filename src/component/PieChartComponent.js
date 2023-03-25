import { Chart } from 'react-google-charts';

const PieChart = () => {

    const data = [
        ['Gender', 'Choice'],
        ['Male', 3],
        ['Female', 1],
        ['Other', 1],
    ]

    const options = {
        title: 'Gender and Origem',
        pieHole: 0.4,
        is3D: false,
    };

    return (
        <Chart
            chartType="PieChart"
            width="100%"
            height="400px"
            data={data}
            options={options}
        />
    );
};

export default PieChart;