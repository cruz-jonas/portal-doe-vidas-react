import { Chart } from 'react-google-charts';

const PieChart = ({data}) => {


    const options = {
        title: 'Gender and Origem',
        pieHole: 0.4,
        is3D: true,
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