import { Alert, Button } from "@ui/index";
import { useState } from "react";
import CodeEditor from "src/modules/CodeEditor";

function AlertDismissibleExample() {
    const [show, setShow] = useState(true);
  
    if (show) {
      return (
        <Alert variant="danger" onClose={() => setShow(false)} dismissible>
          <Alert.Header>Oh snap! You got an error!</Alert.Header>
          <p>
            Change this and that and try again. Duis mollis, est non commodo
            luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.
            Cras mattis consectetur purus sit amet fermentum.
          </p>
        </Alert>
      );
    }
    return <Button onClick={() => setShow(true)}>Show Alert</Button>;
  }


  function AlertDismissibleExampleCode(){
    return(
        <CodeEditor text={`import { Alert, Button } from "@ui/index";
        import { useState } from "react";\n\n
        function AlertDismissibleExample() {
            const [show, setShow] = useState(true);
          
            if (show) {
              return (
                <Alert variant="danger" onClose={() => setShow(false)} dismissible>
                  <Alert.Header>Oh snap! You got an error!</Alert.Header>
                  <p>
                    Change this and that and try again. Duis mollis, est non commodo
                    luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.
                    Cras mattis consectetur purus sit amet fermentum.
                  </p>
                </Alert>
              );
            }
            return <Button onClick={() => setShow(true)}>Show Alert</Button>;
          }`} />
    )
  }
  
  export default {AlertDismissibleExample, AlertDismissibleExampleCode}