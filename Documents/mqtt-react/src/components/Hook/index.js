import React, { createContext, useEffect, useState } from 'react';
import Connection from './Connection';
import Publisher from './Publisher';
import Subscriber from './Subscriber';
import Receiver from './Receiver';
import mqtt from 'mqtt';
import Users from './Users'
import DataParser from '../Data/DataParser';
import { Card, List, Collapse, Col, Row, Tabs, Space } from 'antd';
import AllUsers from './AllUsers';
import SingleUser from './SingleUser';

export const QosOption = createContext([])
const qosOption = [
  {
    label: '0',
    value: 0,
  }, {
    label: '1',
    value: 1,
  }, {
    label: '2',
    value: 2,
  },
];

const HookMqtt = () => {
  // const [client, setClient] = useState(null);
  const [isSubed, setIsSub] = useState(false);
  const [payload, setPayload] = useState({});
  const [connectStatus, setConnectStatus] = useState('Connect');
  var oldMsg;

  // const mqttConnect = (host, mqttOption) => {
  //   setConnectStatus('Connecting');
  //   setClient(mqtt.connect(host, mqttOption));
  // };

  const url = 'mqtt://test.mosquitto.org:8081'
  // const url = 'ws://broker.emqx.io:8083/mqtt'
  const options = {
    keepalive: 60,
    protocolId: 'MQTT',
    protocolVersion: 4,
    clean: true,
    reconnectPeriod: 1000,
    connectTimeout: 30 * 1000,
    will: {
      topic: 'WillMsg',
      payload: 'Connection Closed abnormally..!',
      qos: 0,
      retain: false
    },
    rejectUnauthorized: false
  }
  const client = mqtt.connect(url, options)
  // console.log("initial connection check: ", client.connected)
  // console.log(client)

  // if (client) {
  //   client.subscribe("testtopic/react", (error) => {
  //     // console.log('subscribed')
  //     if (error) {
  //       console.log('Subscription to Lucy failed', error)
  //       return
  //     }
  //   });
  //   setIsSub(true)
  // }
  client.subscribe("testtopic/lucy", (error) => {
    if (error) {
      console.log("subscription failed", error)
    }
  })

  client.publish("testtopic/lucy", "a5c304034e593d62144e3600e608420f5021ffffd9ce9c4258", error => {
    if (error) {
      console.log("publish error:", error)
    }
  })

  // useEffect(() => {
  if (client) {
    client.on('connect', () => {
      console.log("connection status: " + client.connected)
      setConnectStatus('Connected');
    });
    client.on('error', (err) => {
      console.error('Connection error: ', err);
      client.end();
    });
    client.on('reconnect', () => {
      setConnectStatus('Reconnecting');
    });
    client.on('message', (topic, message) => {
      const payload = { topic, message: message.toString() };
      setPayload(payload);

    });
  }
  // }, [client]);

  const mqttDisconnect = () => {
    if (client) {
      client.end(() => {
        setConnectStatus('Connect');
      });
    }
  }

  const mqttPublish = (context) => {
    if (client) {
      const { topic, qos, payload } = context;
      console.log("payload:", payload)
      client.publish(topic, payload, { qos }, error => {
        if (error) {
          console.log('Publish error: ', error);
        } 
      });
    }
  }

  const mqttSub = (subscription) => {
    if (client) {
      const { topic, qos } = subscription;
      client.subscribe(topic, { qos }, (error) => {
        if (error) {
          console.log('Subscribe to topics error', error)
          return
        }
        setIsSub(true)
      });
    }
  };

  const mqttUnSub = (subscription) => {
    if (client) {
      const { topic } = subscription;
      client.unsubscribe(topic, error => {
        if (error) {
          console.log('Unsubscribe error', error)
          return
        }
        setIsSub(false);
      });
    }
  };

  let statistics = DataParser(payload.message)

  const { TabPane } = Tabs;

  function callback(key) {
    console.log(key);
  }

  // if (client.connected) {
    return (
      <>
        {/* <Test></Test> */}
        {/* <Space direction="vertical"> */}
          <Tabs defaultActiveKey="1" onChange={callback}>
            <TabPane tab="Single User" key="1">
              <Space direction='vertical'>
                <Users client={client}></Users>
                {/* statistics: stat1, stat2, stat3, stat4, stat5, stat6, stat7, stat8, stat9, stat10, fwVer, wearStatus, battPercent, humidity, stat13 */}
                <SingleUser stat1={statistics[0]} 
                            stat2={statistics[1]} 
                            stat3={statistics[2]} 
                            stat4={statistics[3]} 
                            stat5={statistics[4]} 
                            stat6={statistics[5]} 
                            stat7={statistics[6]} 
                            stat8={statistics[7]} 
                            stat9={statistics[9]} 
                            stat10={statistics[8]}
                            fwVer={statistics[10]} wearStatus={statistics[11]} battPercent={statistics[12]}
                            humidity={statistics[13]}
                            stat13={statistics[14]}  />
              </Space>
            </TabPane>
            <TabPane tab="All Users" key="2">
              <AllUsers/>
            </TabPane>
          </Tabs>
          {/* <Receiver payload={payload} client={client}/> */}
        {/* <Connection connect={mqttConnect} disconnect={mqttDisconnect} connectBtn={connectStatus} /> */}
        {/* <QosOption.Provider value={qosOption}>
          <Subscriber sub={mqttSub} unSub={mqttUnSub} showUnsub={isSubed} />
          <Publisher publish={mqttPublish} />
        </QosOption.Provider> */}
        {/* </Space> */}
      </>
    );
  // }
  // else {
  //   return (
  //     <p>
  //       Device is OFF
  //     </p>
  //   )
  // }
}

export default HookMqtt;
