import { Select } from 'antd';
import React from 'react';
import mqtt from 'mqtt';

const { Option } = Select;

const Users = (client) => {

    var oldUser = "lucy";
    let currClient = client.client

    function mqttConnect(name) {

        console.log('value changed')

        if (currClient) {
          currClient.unsubscribe(`testtopic/${oldUser}`, (error) => {
            console.log(`unsubscribed from ${oldUser}`)
            if (error) {
              console.log(`failed to unsubscribe from ${oldUser}:`, error)
            }
          })

          currClient.subscribe(`testtopic/${name}`, (error) => {
            if (error) {
              console.log(`Subscription to ${name} error`, error)                                                 
              return
            }
          });
          console.log("current client details:", currClient)
          console.log(`subscribed to ${name}`)

          currClient.publish(`testtopic/${name}`, "A5C34864630F7346CDCC1042102701025A100024", error => {
            console.log(`payload published to ${name}`)
            if (error) {
              console.log("publish error:", error)
            }
          });
          
          oldUser = name;
          console.log("current user is now", oldUser)

        }

        // currClient.on('message', (topic, message) => {
        //   const payload = { topic, message: message.toString() };
        //   console.log(payload.message.slice(0,4))
        //   if (payload.message.slice(0,4) == "A5C3") {
        //     console.log('set payload')
        //     setPayload(payload);
        //   }
        // });
        
      }

    return (
        <Select defaultValue="lucy" onChange={(value) => {mqttConnect(value)}}>
            <Option value="jack">Jack</Option>                    
            <Option value="lucy">Lucy</Option>
            <Option value="Yiminghe">yiminghe</Option>
        </Select>
    )
    };

export default Users;