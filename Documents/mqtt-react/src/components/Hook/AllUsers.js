import React from 'react';
import { Collapse, Col, Row } from 'antd';
import PieChart from '../Graphics/PieChart';
import bpIcon from '../Icons/bp-resized.png'
import hrvIcon from '../Icons/hrv-resized.png'
import o2Icon from '../Icons/o2-resized.png'
import rrIcon from '../Icons/rr-resized.png'
import cbtIcon from '../Icons/cbt-resized.png'
import falldetIcon from '../Icons/falldet-resized.png'
import fatigueIcon from '../Icons/fatigue-resized.png'
import hrIcon from '../Icons/hr-resized.png'
import heatstressIcon from '../Icons/heatstress-resized.png'
import FilterUsers from './FilterUsers';

const AllUsers = () => {
    
    const { Panel } = Collapse;
    
    function callback(key) {
        console.log(key);
    }

    const samplePopulationDistribution = [
        {
            "status": "low",
            "number": 10 // 1
        },
        {
            "status": "normal",
            "number": 60 // 6
        },
        {
            "status": "warning",
            "number": 20 // 2
        },
        {
            "status": "high",
            "number": 10 // 1
        }
    ]

    const samplePopulationDistribution2 = [
        {
            "status": "low",
            "number": 10 // 1
        },
        {
            "status": "normal",
            "number": 80 // 8
        },
        {
            "status": "high",
            "number": 10 // 1
        }
    ]

    const samplePopulationDistribution3 = [
        {
            "status": "warning",
            "number": 10 // 1
        },
        {
            "status": "normal",
            "number": 80 // 8
        },
        {
            "status": "low",
            "number": 10 // 1
        }
    ]

    const samplePopulationDistribution4 = [
        {
            "status": "warning",
            "number": 10 // 1
        },
        {
            "status": "normal",
            "number": 80 // 8
        },
        {
            "status": "high",
            "number": 10 // 1
        }
    ]

    const samplePopulationDistribution5 = [
        {
            "status": "warning",
            "number": 10 // 1
        },
        {
            "status": "not detected",
            "number": 80 // 8
        },
        {
            "status": "high",
            "number": 10 // 1
        }
    ]

    const samplePopulationDistribution6 = [
        {
            "status": "detected",
            "number": 10 // 1
        },
        {
            "status": "not detected",
            "number": 90 // 9
        }
    ]

    return (
        <><FilterUsers /><Row gutter={[16, 24]}> 
            <Col className="gutter-row" span={6}> 
                <Collapse defaultActiveKey={['1']} onChange={callback} expandIcon={() => (<img src={hrIcon} />)}>
                    <Panel header="Heart Rate" key="1">
                        <PieChart values={samplePopulationDistribution} perimeter={"number"}></PieChart> {/* done */}
                    </Panel>
                </Collapse>
            </Col>
            <Col className="gutter-row" span={6}>
                <Collapse defaultActiveKey={['1']} onChange={callback} expandIcon={() => (<img src={hrvIcon} />)}>
                    <Panel header="Heart Rate Variability" key="1">
                        <PieChart values={samplePopulationDistribution2} perimeter={"number"}></PieChart> {/* done */}
                    </Panel>
                </Collapse>
            </Col>
            <Col className="gutter-row" span={6}>
                <Collapse defaultActiveKey={['1']} onChange={callback} expandIcon={() => (<img src={o2Icon} />)}>
                    <Panel header="Oxygen Saturation" key="1">
                        <PieChart values={samplePopulationDistribution3} perimeter={"number"}></PieChart> {/* done */}
                    </Panel>
                </Collapse>
            </Col>
            <Col className="gutter-row" span={6}>
                <Collapse defaultActiveKey={['1']} onChange={callback} expandIcon={() => (<img src={rrIcon} />)}>
                    <Panel header="Respiratory Rate" key="1">
                        <PieChart values={samplePopulationDistribution} perimeter={"number"}></PieChart> {/* done */}
                    </Panel>
                </Collapse>
            </Col>
            <Col className="gutter-row" span={6}>
                <Collapse defaultActiveKey={['1']} onChange={callback} expandIcon={() => (<img src={bpIcon} />)}>
                    <Panel header="Blood Pressure" key="1">
                        <PieChart values={samplePopulationDistribution} perimeter={"number"}></PieChart> {/* done */}
                    </Panel>
                </Collapse>
            </Col>
            <Col className="gutter-row" span={6}>
                <Collapse defaultActiveKey={['1']} onChange={callback} expandIcon={() => (<img src={cbtIcon} />)}>
                    <Panel header="Core Body Temperature" key="1">
                        <PieChart values={samplePopulationDistribution} perimeter={"number"}></PieChart> {/* done */}
                    </Panel>
                </Collapse>
            </Col>
            <Col className="gutter-row" span={6}>
                <Collapse defaultActiveKey={['1']} onChange={callback} expandIcon={() => (<img src={falldetIcon} />)}>
                    <Panel header="Fall Detection" key="1">
                        <PieChart values={samplePopulationDistribution6} perimeter={"number"}></PieChart> {/* done */}
                    </Panel>
                </Collapse>
            </Col>
            <Col className="gutter-row" span={6}>
                <Collapse defaultActiveKey={['1']} onChange={callback} expandIcon={() => (<img src={heatstressIcon} />)}>
                    <Panel header="Heat stress Risk" key="1">
                        <PieChart values={samplePopulationDistribution5} perimeter={"number"}></PieChart> {/* done */}
                    </Panel>
                </Collapse>
            </Col>
            <Col className="gutter-row" span={6}>
                <Collapse defaultActiveKey={['1']} onChange={callback} expandIcon={() => (<img src={fatigueIcon} />)}>
                    <Panel header="Fatigue Level" key="1">
                        <PieChart values={samplePopulationDistribution4} perimeter={"number"}></PieChart> {/* done */}
                    </Panel>
                </Collapse>
            </Col>
        </Row></>
    )

}

export default AllUsers;