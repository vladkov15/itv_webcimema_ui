import { Alert, Button } from "@ui/index";
import { useState } from "react";
import CodeEditor from "src/modules/CodeEditor";

function AlertDismissible() {
    const [show, setShow] = useState(true);
  
    return (
      <>
        <Alert show={show} variant="success">
          <Alert.Header>How's it going?!</Alert.Header>
          <p>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget
            lacinia odio sem nec elit. Cras mattis consectetur purus sit amet
            fermentum.
          </p>
          <hr />
            <Button onClick={() => setShow(false)} variant="outline-success">
              Close me y'all!
            </Button>
        </Alert>
  
        {!show && <Button onClick={() => setShow(true)}>Show Alert</Button>}
      </>
    );
  }

  function AlertDismissibleCode(){
    return(
        <CodeEditor text={`import { Alert, Button } from "@ui/index";
        import { useState } from "react"; \n\n
        function AlertDismissible() {
            const [show, setShow] = useState(true);
          
            return (
              <>
                <Alert show={show} variant="success">
                  <Alert.Header>How's it going?!</Alert.Header>
                  <p>
                    Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget
                    lacinia odio sem nec elit. Cras mattis consectetur purus sit amet
                    fermentum.
                  </p>
                  <hr />
                  <div className="d-flex justify-content-end">
                    <Button onClick={() => setShow(false)} variant="outline-success">
                      Close me y'all!
                    </Button>
                  </div>
                </Alert>
          
                {!show && <Button onClick={() => setShow(true)}>Show Alert</Button>}
              </>
            );
          }`} />
    )
  }

  export default {AlertDismissible, AlertDismissibleCode}