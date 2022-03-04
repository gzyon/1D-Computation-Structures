import React, { useEffect, useState } from 'react';
import { Card, List, Collapse, Col, Row, Tabs } from 'antd';
import AllUsers from './AllUsers';
import SingleUser from './SingleUser';

const Receiver = ({ payload, client }) => {
  const [messages, setMessages] = useState([])
  var syncWordCheckStatus = false;

  useEffect(() => {
    if (payload.topic) {
      setMessages(messages => [...messages, payload])
    }
  }, [payload])

  // const renderListItem = (item) => (
  //   <List.Item>
  //     <List.Item.Meta
  //       title={item.topic}
  //       description={item.message}
  //     />
  //   </List.Item>
  // )

  function syncWordCheck(str) {
    var fStatus = false;
    if (str == "A5C3") {
      fStatus = true;
    }
    else {
      fStatus = false;
    }
    return fStatus;
  }

  function parseFloat(str) {
    var float = 0, sign, order, mantissa, exp,
    int = 0, multi = 1;
    if (/^0x/.exec(str)) {
        int = parseInt(str, 16);
    }
    else {
        for (var i = str.length -1; i >=0; i -= 1) {
            if (str.charCodeAt(i) > 255) {
                console.log('Wrong string parameter');
                return false;
            }
            int += str.charCodeAt(i) * multi;
            multi *= 256;
        }
    }
    sign = (int >>> 31) ? -1 : 1;
    exp = (int >>> 23 & 0xff) - 127;
    mantissa = ((int & 0x7fffff) + 0x800000).toString(2);
    for (i=0; i<mantissa.length; i+=1) {
        float += parseInt(mantissa[i]) ? Math.pow(2, exp) : 0;
        exp--;
    }
    return float*sign;
  }

  if (payload.message) {
    let msg = payload.message;
    syncWordCheckStatus = syncWordCheck(msg.slice(0,4))
  }

  var stat1, stat2, stat3, stat4, stat5, stat6, stat7, stat8, stat9, stat10, stat11, stat12, stat13;

  if (syncWordCheckStatus) {
    let stats = payload.message
      if (stats.length >= 40) { 
        stat1 = parseInt(stats.slice(4, 6), 16) // HR
        stat2 = parseInt(stats.slice(6, 8), 16) // HRV
        stat3 = parseInt(stats.slice(8, 10), 16) // SpO2
        stat4 = parseInt(stats.slice(10, 12), 16) // RR
        stat5 = parseInt(stats.slice(12, 14), 16) // SBP
        stat6 = parseInt(stats.slice(14, 16), 16) // DBP
        // CBT 
        let firstByte = stats.slice(16,18), 
            secondByte = stats.slice(18,20), 
            thirdByte = stats.slice(20,22), 
            forthByte = stats.slice(22,24) 
        stat7 = Math.round(parseFloat("0x" + forthByte + thirdByte + secondByte + firstByte)) ; 
        stat8 = parseInt(stats.slice(24, 28), 16) // steps count
        stat9 = parseInt(stats.slice(28, 30), 16) // fall detection
        stat10 = parseInt(stats.slice(30, 32), 16) // heat stress risk, change to level of risk based on info
        stat11 = parseInt(stats.slice(32, 34), 16) // battery percentage
        stat12 = parseInt(stats.slice(34, 38), 16) // total acceleration
        stat13 = parseInt(stats.slice(38, 40), 16) // ambient temperature

        // console.log("wear status:" + parseInt(stats.substr(6,2), 16))
    }
  }

  else {
    return (
      <div>
        Device is OFF
      </div>
    )
  }

  //   const StyledCollapse = styled(AntCollapse.Panel)`
  //   &&& {
  //     border: none;
  //     border-radius: 0px;
  //     background-color: #f7f7f7;
  //     box-shadow: none;
  //   }
  //   .ant-collapse-content {
  //     background: palegreen;
  //   }
  // `;
  
  const { TabPane } = Tabs;

  function callback(key) {
    console.log(key);
  }

  return (
      <Tabs defaultActiveKey="1" onChange={callback}>
        <TabPane tab="Single User" key="1">
          <SingleUser stat1={stat1} stat2={stat2} stat3={stat3} stat4={stat4} stat5={stat5} stat6={stat6} stat7={stat7} stat8={stat8} stat9={stat9} stat10={stat10} />
        </TabPane>
        <TabPane tab="All Users" key="2">
          <AllUsers/>
        </TabPane>
      </Tabs>
  );
}

export default Receiver;
