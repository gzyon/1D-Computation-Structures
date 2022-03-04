import React, { useEffect, useState } from "react"
import { Liquid } from '@ant-design/charts'

const LiquidGraph = ({values}) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        setData(values/100);
    })

    const config = {
        percent: data,
        outline: {
          border: 4,
          distance: 8,
        },
        wave: {
          length: 64,
        },
    };

    return (
          <Liquid {...config} />
    )
}

export default LiquidGraph;