import { Form, Select, Slider, TimePicker, Card, Button, Space, Row, Col } from "antd";
import React, { useState } from "react";
import moment from 'moment'
import PieChart from "../Graphics/PieChart";

const FilterUsers = ({}) => {
    const { Option } = Select;

    // all users 
    const users = {
        'Lucy': {'Age': 20, 'Gender': 'Female'},
        'Tim': {'Age': 10, 'Gender': 'Female'},
        'James': {'Age': 15, 'Gender': 'Female'},
        'Jessica': {'Age': 30, 'Gender': 'Female'},
        'Charles': {'Age': 40, 'Gender': 'Female'},
        'David': {'Age': 70, 'Gender': 'Female'},
        'George': {'Age': 65, 'Gender': 'Female'},
        'Stacy': {'Age': 22, 'Gender': 'Female'},
        'Jack': {'Age': 35, 'Gender': 'Female'},
        'Yiming': {'Age': 18, 'Gender': 'Female'}
    }

    let numUsers = Object.keys(users).length;

    // filter by: age, time, parameter
    const onFinish = (values) => {
        console.log("received values of form:", values);

        var highStatus = []
        var lowStatus = []
        var warningStatus = []
        var normalStatus = []
        var detectedStatus = []
        var notDetectedStatus = []

        // temporary value store until i create more comprehensive dummy data
        var filteredUsers = []
        
        // filtering by age: categorise users in various statuses with text on left, piechart on right (visualise text)
        if (values["select-age-range"] != undefined) {
            console.log("filtering age")
            let upperBound = values["select-age-range"][1]
            let lowerBound = values["select-age-range"][0]
            for (var user in users) {
                if (users[user].Age <= upperBound && users[user].Age >= lowerBound) {
                    filteredUsers.push(user)
                }
            }
        }

        console.log("filtered list:", filteredUsers)

        const filteredPieChart = [
            {
                "status": "Filtered Users",
                "number": (filteredUsers/numUsers)*100
            },
            {
                "status": "Unfiltered Users",
                "number": ((numUsers-filteredUsers)/numUsers)*100
            }
        ]

        return (
            <><div>
                Filtered users: {filteredUsers}
            </div><PieChart values={filteredPieChart} perimeter="number"></PieChart></>
        )

        // filtering by parameter: show specific parameter(s) chosen
        /*
        logic:
        - get list of parameters to filter
        - loop through list 
        - for each parameter that is in the list, construct a collapse panel for the parameter
        */

        // filter by time: get all users in each status (same as age), but this time piechart is for all users instead of only for that age range
        /* logic:
        - every 5 minutes, each user's statuses are logged (for simplicity, only for the day)
        - within
        */ 
    };

    const format = 'HH:mm';

    const children = [<Option key={1}>Heart Rate</Option>, 
                      <Option key={2}>Heart Rate Variability</Option>, 
                      <Option key={3}>Oxygen Saturation</Option>, 
                      <Option key={4}>Respiratory Rate</Option>, 
                      <Option key={5}>Blood Pressure</Option>,
                      <Option key={6}>Core Body Temperature</Option>, 
                      <Option key={7}>Fall Detection</Option>, 
                      <Option key={8}>Heat Stress Risk</Option>, 
                      <Option key={9}>Fatigue Level</Option>];

    return (
        // <Card title="Filter">
            <>
            <Form name="Filter" onFinish={onFinish}>
                <Row gutter={[16, 24]}>
                    <Col className="gutter-row" span={12}>
                        {/* filter parameter */}
                        <Form.Item name="select-parameter" label={<label style={{ color: "white" }}>Parameter</label>}>
                            <Select mode="tags" placeholder="Choose parameters to filter" defaultValue={['Heart Rate', 'Heart Rate Variability', 'Oxygen Saturation', 'Respiratory Rate', 'Blood Pressure', 'Core Body Temperature', 'Fall Detection', 'Heat Stress Risk', 'Fatigue Level']}>
                                {children}
                            </Select>
                        </Form.Item>
                    </Col>
                    <Col className="gutter-row" span={12}>
                        {/* filter age */}
                        <Form.Item name="select-time-range" label={<label style={{ color: "white" }}>Time Range</label>}>
                            <TimePicker.RangePicker defaultValue={[moment('00:00', format), moment('23:55', format)]} format={format} minuteStep={5} />
                        </Form.Item>
                    </Col>
                </Row>
                {/* filter time */}
                <Form.Item name="select-age-range" label={<label style={{ color: "white" }}>Age Range</label>}>
                    <Slider range min={20} max={80} defaultValue={[20, 80]} marks={{ 20: { style: {color: "white"}, label: <label>20</label>},
                                                                   30: { style: {color: "white"}, label: <label>30</label>},
                                                                   40: { style: {color: "white"}, label: <label>40</label>},
                                                                   50: { style: {color: "white"}, label: <label>50</label>},
                                                                   60: { style: {color: "white"}, label: <label>60</label>},
                                                                   70: { style: {color: "white"}, label: <label>70</label>},
                                                                   80: { style: {color: "white"}, label: <label>80</label>}, }}></Slider>
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Filter
                    </Button>
                </Form.Item>
            </Form>
            </>
        
    )
}

export default FilterUsers;

// { number: { style: CSSProperties, label: ReactNode } }	

// {0: '0', 10: '10', 20: '20', 30: '30', 40: '40', 50: '50', 60: '60', 70: '70', 80: '80', 90: '90', 100: '100'}