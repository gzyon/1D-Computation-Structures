import React, {useState, useEffect} from 'react';
import { Line } from '@ant-design/charts';

const LineGraph = ({values, perimeter}) => {
    const [data, setData] = useState([]);
    // const [para, setPara] = useState("")

    //   useEffect(() => {
    //     asyncFetch();
    //   }, []);

    //   const asyncFetch = () => {
    //     fetch('https://gw.alipayobjects.com/os/bmw-prod/1d565782-dde4-4bb6-8946-ea6a38ccf184.json')
    //       .then((response) => response.json())
    //       .then((json) => setData(json))
    //       .catch((error) => {
    //         console.log('fetch data failed', error);
    //       });
    //   };

    useEffect(() => {
        setData(values);
    });
    
    const config = {
        data,
        height: 200,
        padding: 'auto',
        xField: 'Time',
        yField: `${perimeter}`,
        limitInPlot: true,
        xAxis: {
          // type: 'timeCat',
          tickCount: 5,
        },
        colorField: `${perimeter}`,
        color: ({perimeter}) => {
            if (perimeter >= 50) {
                return "red";
            } 
            return 'yellow';
        } 
    };

    return (
        <Line {...config} />
    );
};

export default LineGraph;