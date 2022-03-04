import { Collapse, Space } from "antd";
import React from "react";
// import styled from "styled-components"

const ConditionalCollapse = ({status, header, panelContent, graph, icon}) => {

    // const warningCollapse = styled(AntCollapse.Panel)` 
    //     &&&{

    //     }
    //     .ant-collapse-header {
    //         background: red;
    //     }`
    //     ;

    const { Panel } = Collapse;

    // statuses: "high", "low", "warning", "normal", "detected", "not detected"

    // status "high"
    if (status === "High" || status === "Detected") {
        return (
            <Collapse defaultActiveKey={["1"]} expandIcon={() => (<img src={icon}/>)} bordered={false}>
                <Panel className="ant-collapse-header-high" key="1" header={header}>
                    <p>{panelContent}</p>
                    <p>{graph}</p>
                </Panel>
            </Collapse>
        )
    }

    // status "low"
    else if (status === "Low") {
        return (
            <Collapse defaultActiveKey={["1"]} expandIcon={() => (<img src={icon}/>)} bordered={false}>
                <Panel className="ant-collapse-header-low" key="1" header={header}>
                    <p>{panelContent}</p>
                    <p>{graph}</p>
                </Panel>
            </Collapse>
        )
    }

    // status "warning"
    else if (status === "Warning") {
        return (
            <Collapse defaultActiveKey={["1"]} expandIcon={() => (<img src={icon}/>)} bordered={false}>
                <Panel className="ant-collapse-header-warning" key="1" header={header}>
                    <p>{panelContent}</p>
                    <p>{graph}</p>
                </Panel>
            </Collapse>
        )
    }

    // status "high"
    else if (status === "Normal") {
        return (
            <Collapse defaultActiveKey={["1"]} expandIcon={() => (<img src={icon}/>)} bordered={false}>
                <Panel className="ant-collapse-header-normal" key="1" header={header}>
                    <p>{panelContent}</p>
                    <p>{graph}</p>
                </Panel>
            </Collapse>
        )
    }

    else {
        return (
            null
        )
    }
}

export default ConditionalCollapse;