import { Button } from "@ui/index";
import CodeEditor from "src/modules/CodeEditor";

function DisabledExample() {
    return (
      <>
        <Button variant="primary" disabled>
          Primary button
        </Button>{' '}
        <Button variant="secondary" disabled>
          Button
        </Button>{' '}
        <Button href="#" variant="secondary" disabled>
          Link
        </Button>
      </>
    );
  }

  function DisabledExampleCode(){
    return(
      <CodeEditor text={`import { Button } from "@ui/index";\n
      \n
      
      function DisabledExample() {
        return (
          <>
            <Button variant="primary" disabled>
              Primary button
            </Button>{' '}
            <Button variant="secondary" disabled>
              Button
            </Button>{' '}
            <Button href="#" variant="secondary" disabled>
              Link
            </Button>
          </>
        );
      }`} />
    )
  }
  
  export default {DisabledExample, DisabledExampleCode}