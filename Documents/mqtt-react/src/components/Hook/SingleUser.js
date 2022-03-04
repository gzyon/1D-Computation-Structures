import React from 'react';
import { Collapse, Col, Row } from 'antd';
import LineGraph from '../Graphics/LineGraph';
import GaugeGraph from '../Graphics/GaugeGraph';
import PieChart from '../Graphics/PieChart';
import BarChart from '../Graphics/BarChart';
import HeartRate from '../Data/HeartRate';
import HeartRateVariability from '../Data/HeartRateVariability';
import OxygenSaturation from '../Data/OxygenSaturation'
import RespiratoryRate from '../Data/RespiratoryRate';
import BloodPressure from '../Data/BloodPressure';
import CoreBodyTemperature from '../Data/CoreBodyTemperature';
import FallDetection from '../Data/FallDetection';
import HeatStressRisk from '../Data/HeatStressRisk';
import FatigueLevel from '../Data/FatigueLevel';
import bpIcon from '../Icons/bp-resized.png'
import hrvIcon from '../Icons/hrv-resized.png'
import o2Icon from '../Icons/o2-resized.png'
import rrIcon from '../Icons/rr-resized.png'
import cbtIcon from '../Icons/cbt-resized.png'
import falldetIcon from '../Icons/falldet-resized.png'
import fatigueIcon from '../Icons/fatigue-resized.png'
import hrIcon from '../Icons/hr-resized.png'
import heatstressIcon from '../Icons/heatstress-resized.png'
import LiquidGraph from '../Graphics/LiquidGraph';
import ConditionalCollapse from '../Graphics/ConditionalCollapse';
import WearStatus from '../Data/WearStatus';
import envIcon from '../Icons/env-resized.png'
import wearableIcon from '../Icons/wearable-resized.png'

const SingleUser = ({stat1, stat2, stat3, stat4, stat5, stat6, stat7, stat8, stat9, stat10, fwVer, wearStatus, battPercent, humidity, stat13}) => {

    const { Panel } = Collapse;
    
    function callback(key) {
        console.log(key);
    }

    const sampleHrData = [
        {
          "Time": "07:30",
          "Heart Rate": 70
        },
        {
          "Time": "08:30",
          "Heart Rate": 75
        },
        {
          "Time": "09:30",
          "Heart Rate": 72
        },
    ]

    const heatIndex = 2.049 * stat13 + 10.14333127 * humidity - 0.22475541 * stat13 * humidity - 0.00683783 * stat13 * stat13 - 0.05481717 * humidity * humidity + 0.00122874 * stat13 * stat13 * humidity + 0.00085282 * stat13 * humidity * humidity - 0.00000199 * stat13 * stat13 * humidity * humidity - 42.379;

    return (
      <Row gutter={[16, 25]}>
        <Col className='gutter-row' span={6}>
          <Collapse defaultActiveKey={['1']} onChange={callback} expandIcon={() => (<img src={wearableIcon}/>)}>
            <Panel header={"Wearable Information"} key="1">
              <p>Version: {fwVer}</p>
              <p>Wear Status: {WearStatus(wearStatus)}</p>
              <p>Battery Percentage: {battPercent}%</p>
            </Panel>
          </Collapse>
        </Col>
        <Col className="gutter-row" span={6}>
          {/* <Collapse defaultActiveKey={['1']} onChange={callback} expandIcon={() => (<img src={hrIcon}/>)}>
            <Panel header={`Heart Rate: ${stat1} bpm`} key="1">
              <p>Status: {HeartRate(stat1)}</p>
              <LineGraph values={sampleHrData} perimeter={"Heart Rate"}></LineGraph>
            </Panel>
          </Collapse> */}
          <ConditionalCollapse status={HeartRate(stat1)} header={`Heart Rate: ${stat1} bpm`} panelContent={`Status: ${HeartRate(stat1)}`} graph={<LineGraph values={sampleHrData} perimeter={"Heart Rate"}></LineGraph>} icon={hrIcon} />
        </Col>
        <Col className="gutter-row" span={6}>
          {/* <Collapse defaultActiveKey={['1']} onChange={callback} expandIcon={() => (<img src={hrvIcon}/>)} bordered={false}>
            <Panel header={`Heart Rate Variability: ${stat2} ms`} key="1" className="ant-collapse-header-warning">
              <p>Status: {HeartRateVariability(stat2)}</p>
              <LineGraph values={sampleHrData} perimeter={"Heart Rate"}></LineGraph>
            </Panel>
          </Collapse> */}
          <ConditionalCollapse status={HeartRateVariability(stat2)} header={`Heart Rate Variability: ${stat2}ms`} panelContent={`Status: ${HeartRateVariability(stat2)}`} graph={<LineGraph values={sampleHrData} perimeter={"Heart Rate"}></LineGraph>} icon={hrvIcon} />
        </Col>
        <Col className="gutter-row" span={6}>
          {/* <Collapse defaultActiveKey={['1']} onChange={callback} expandIcon={() => (<img src={o2Icon}/>)}>
            <Panel header={`Oxygen Saturation: ${stat3} %`} key="1">
              <p>Status: {OxygenSaturation(stat3)}</p> */}
              {/* <LiquidGraph values={stat3}/> */}
            {/* </Panel>
          </Collapse> */}
          <ConditionalCollapse status={OxygenSaturation(stat3)} header={`Oxygen Saturation: ${stat3}%`} panelContent={`Status: ${OxygenSaturation(stat3)}`} graph={<LineGraph values={sampleHrData} perimeter={"Heart Rate"}></LineGraph>} icon={o2Icon} />
        </Col>
        <Col className="gutter-row" span={6}>
          {/* <Collapse defaultActiveKey={['1']} onChange={callback} expandIcon={() => (<img src={rrIcon}/>)}>
            <Panel header={`Respiratory Rate: ${stat4} breaths/min`} key="1">
              <p>Status: {RespiratoryRate(stat4)}</p>
              <LineGraph values={sampleHrData} perimeter={"Heart Rate"}></LineGraph>
            </Panel>
          </Collapse> */}
          <ConditionalCollapse status={RespiratoryRate(stat4)} header={`Respiratory Rate: ${stat4} breaths/min`} panelContent={`Status: ${RespiratoryRate(stat4)}`} graph={<LineGraph values={sampleHrData} perimeter={"Heart Rate"}></LineGraph>} icon={rrIcon} />
        </Col>
        <Col className="gutter-row" span={6}>
          {/* <Collapse defaultActiveKey={['1']} onChange={callback} expandIcon={() => (<img src={bpIcon}/>)}>
            <Panel header={`Blood Pressure: ${stat5}/${stat6}mmHg`} key="1">
              <p>Status: {BloodPressure(stat5)}</p>
              <LineGraph values={sampleHrData} perimeter={"Heart Rate"}></LineGraph>
            </Panel>
          </Collapse> */}
          <ConditionalCollapse status={BloodPressure(stat5)} header={`Blood Pressure: ${stat5}/${stat6}mmHg`} panelContent={`Status: ${BloodPressure(stat5)}`} graph={<LineGraph values={sampleHrData} perimeter={"Heart Rate"}></LineGraph>} icon={bpIcon} />
        </Col>
        <Col className="gutter-row" span={6}>
          {/* <Collapse defaultActiveKey={['1']} onChange={callback} expandIcon={() => (<img src={cbtIcon}/>)}>
            <Panel header={`Core Body Temperature: ${stat7}` + '°C'} key="1">
              <p>Status: {CoreBodyTemperature(stat7)}</p>
              <LineGraph values={sampleHrData} perimeter={"Heart Rate"}></LineGraph>
            </Panel>
          </Collapse> */}
          <ConditionalCollapse status={CoreBodyTemperature(stat7)} header={`Core Body Temperature: ${stat7}` + '°C'} panelContent={`Status: ${CoreBodyTemperature(stat7)}`} graph={<LineGraph values={sampleHrData} perimeter={"Heart Rate"}></LineGraph>} icon={cbtIcon} />
        </Col>
        <Col className="gutter-row" span={6}>
          {/* <Collapse defaultActiveKey={['1']} onChange={callback} expandIcon={() => (<img src={falldetIcon}/>)}>
            <Panel header="Fall Detection" key="1">
              <p>Status: {FallDetection(stat9)}</p>
            </Panel>
          </Collapse> */}
          <ConditionalCollapse status={FallDetection(stat9)} header={"Fall Detection"} panelContent={`Status: ${FallDetection(stat9)}`} graph={null} icon={falldetIcon} />
        </Col>
        <Col className="gutter-row" span={6}>
          {/* <Collapse defaultActiveKey={['1']} onChange={callback} expandIcon={() => (<img src={heatstressIcon}/>)}>
            <Panel header="Heat Stress Risk" key="1">
              <p>Status: {HeatStressRisk(stat10)}</p>
            </Panel>
          </Collapse> */}
          <ConditionalCollapse status={HeatStressRisk(stat10)} header={"Heat Stress Risk"} panelContent={`Status: ${HeatStressRisk(stat10)}`} graph={null} icon={heatstressIcon} />
        </Col>
        {/* <Col className="gutter-row" span={6}>
          <Collapse defaultActiveKey={['1']} onChange={callback}>
            <Panel header="Battery Percentage" key="1">
              <p>{stat11}%</p>
              <GaugeGraph percentage={stat11}></GaugeGraph>
            </Panel>
          </Collapse>
        </Col> */}
        {/* <Col className="gutter-row" span={6}>
          <Collapse defaultActiveKey={['1']} onChange={callback}>
            <Panel header="Total Acceleration" key="1">
              <p>{stat12}</p>
            </Panel>
          </Collapse>
        </Col> */}
        {/* <Col className="gutter-row" span={6}>
          <Collapse defaultActiveKey={['1']} onChange={callback}>
            <Panel header="Ambient Temperature" key="1">
              <p>{stat13}degC</p>
            </Panel>
          </Collapse>
        </Col> */}
        <Col className="gutter-row" span={6}>
          {/* <Collapse defaultActiveKey={['1']} onChange={callback} expandIcon={() => (<img src={fatigueIcon}/>)}>
            <Panel header="Fatigue Level" key="1">
              <p>Status: {FatigueLevel(stat1, stat4, stat5)}</p>
            </Panel>
          </Collapse> */}
          <ConditionalCollapse status={FatigueLevel(stat1, stat4, stat5)} header={"Fatigue Level"} panelContent={`Status: ${FatigueLevel(stat1, stat4, stat5)}`} graph={null} icon={fatigueIcon} />
        </Col>
        <Col className="gutter-row" span={6}>
          <Collapse defaultActiveKey={['1']} onChange={callback} expandIcon={() => (<img src={envIcon}/>)}>
            <Panel header={"Environment"} key="1">
              <p>Ambient Temperature: {stat13}°F</p>
              <p>Humidity: {humidity}%</p>
              <p>Heat Index: {heatIndex.toFixed(2)}</p>
            </Panel>
          </Collapse>
        </Col>
      </Row>
    )
}

export default SingleUser;