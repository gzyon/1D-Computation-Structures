import React, {useState, useEffect} from 'react';
import { Pie } from '@ant-design/charts';

const PieChart = ({values, perimeter}) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        setData(values);
    });

    const config = {
        // appendPadding: 10,
        data,
        angleField: 'number',
        colorField: 'status',
        radius: 0.9,
        height: 200,
        autoFit: true,
        animation: false,
        label: {
          type: 'inner',
        //   offset: '-30%',
          content: ({ percent }) => `${(percent * 100).toFixed(0)}%`,
          style: {
            fontSize: 14,   
            textAlign: 'center',
          },
        },
        // interactions: [
        //   {
        //     type: 'element-active',
        //   },
        // ],
    };

    return (
        <Pie {...config} />
    )
}

export default PieChart;