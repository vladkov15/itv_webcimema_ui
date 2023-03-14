import { Tab, Tabs } from "@ui/index";
import React, { useState } from "react";
import CodeEditor from "src/modules/CodeEditor";
import styles from '../../../style/GeneralStyles.module.scss'

function ControlledTabsExample() {
  const [key, setKey] = useState("home");

  return (
    <Tabs
      id="controlled-tab-example"
      activeKey={key}
      className={styles.Header}
    >
      <Tab eventKey="home" title="Home" onClick={() =>setKey("home")}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa, a eum!
        Iure vel, in culpa quisquam voluptas a accusantium fugiat autem?
        Consectetur voluptate minus, rerum ut dolore modi qui nulla.
      </Tab>
      <Tab eventKey="profile" title="Profile" onClick={() =>setKey("home")}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum enim
        tempora praesentium fuga ab iste ducimus porro reprehenderit veniam iure
        impedit eaque dolore eius hic similique tempore autem, unde inventore.
      </Tab>
      <Tab eventKey="contact" title="Contact"  disabled>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, rem. Ea
        animi ipsam aut cupiditate, illum eaque praesentium perspiciatis. Sint
        fuga dicta a temporibus enim quos ipsum consequuntur, sequi vel!
      </Tab>
    </Tabs>
  );
}

function ControlledTabsExampleCode(){
    return(
        <CodeEditor text={`import { Tab, Tabs } from "@ui/index";
        import React, { useState } from "react";\n 
        \n
        function ControlledTabsExample() {
            const [key, setKey] = useState("home");
          
            return (
              <Tabs
                id="controlled-tab-example"
                activeKey={key}
                className="mb-3"
              >
                <Tab eventKey="home" title="Home" onClick={() =>setKey("home")}>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa, a eum!
                  Iure vel, in culpa quisquam voluptas a accusantium fugiat autem?
                  Consectetur voluptate minus, rerum ut dolore modi qui nulla.
                </Tab>
                <Tab eventKey="profile" title="Profile" onClick={() =>setKey("home")}>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum enim
                  tempora praesentium fuga ab iste ducimus porro reprehenderit veniam iure
                  impedit eaque dolore eius hic similique tempore autem, unde inventore.
                </Tab>
                <Tab eventKey="contact" title="Contact"  disabled>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, rem. Ea
                  animi ipsam aut cupiditate, illum eaque praesentium perspiciatis. Sint
                  fuga dicta a temporibus enim quos ipsum consequuntur, sequi vel!
                </Tab>
              </Tabs>
            );
          }`} />
    )
}

export default {ControlledTabsExample, ControlledTabsExampleCode}
