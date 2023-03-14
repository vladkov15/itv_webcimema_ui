import { Button } from "@ui/index";
import CodeEditor from "src/modules/CodeEditor";

function ActiveExample() {
    return (
      <>
        <Button variant="primary" size="sm" active>
          Primary button
        </Button>{' '}
        <Button variant="secondary" size="sm" active>
          Button
        </Button>
      </>
    );
  }

  function ActiveExampleCode(){
    return(
      <CodeEditor text={`import { Button } from "@ui/index";\n
      \n
      function ActiveExample() {
        return (
          <>
            <Button variant="primary" size="sm" active>
              Primary button
            </Button>{' '}
            <Button variant="secondary" size="sm" active>
              Button
            </Button>
          </>
        );
      }`} />
    )
  }
  
  export default {ActiveExample, ActiveExampleCode}