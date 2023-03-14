import { Tab, Tabs } from "@ui/index";
import CodeEditor from "src/modules/CodeEditor";
import styles from '../../../style/GeneralStyles.module.scss'

function UncontrolledExample() {
  return (
    <Tabs defaultActiveKey="profile"
    className={styles.Header}>
      <Tab eventKey="home" title="Home">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui asperiores
        velit earum, vel temporibus quibusdam est commodi ullam sapiente
        praesentium beatae, odit quia aspernatur debitis sunt modi,
        reprehenderit incidunt eos.
      </Tab>
      <Tab eventKey="profile" title="Profile">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui asperiores
        velit earum, vel temporibus quibusdam est commodi 
      </Tab>
      <Tab eventKey="contact" title="Contact" disabled>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui asperiores
        velit earum, vel temporibus quibusdam est commodi ullam sapiente
        praesentium beatae, odit quia aspernatur debitis sunt modi,
        reprehenderit incidunt eos.
      </Tab>
    </Tabs>
  );
}

function UncontrolledExampleCode(){
    return(<CodeEditor text={`import { Tab, Tabs } from "@ui/index";\n
    \n
    function UncontrolledExample() {
        return (
          <Tabs defaultActiveKey="profile">
            <Tab eventKey="home" title="Home">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui asperiores
              velit earum, vel temporibus quibusdam est commodi ullam sapiente
              praesentium beatae, odit quia aspernatur debitis sunt modi,
              reprehenderit incidunt eos.
            </Tab>
            <Tab eventKey="profile" title="Profile">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui asperiores
            velit earum, vel temporibus quibusdam est commodi 
            </Tab>
            <Tab eventKey="contact" title="Contact" disabled>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui asperiores
              velit earum, vel temporibus quibusdam est commodi ullam sapiente
              praesentium beatae, odit quia aspernatur debitis sunt modi,
              reprehenderit incidunt eos.
            </Tab>
          </Tabs>
        );
      }`} />)
}

export default {UncontrolledExample, UncontrolledExampleCode}
