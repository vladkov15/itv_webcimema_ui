import { Badge, Button } from "@ui/index";
import CodeEditor from "src/modules/CodeEditor";

function ButtonExample() {
    return (
      <Button variant="primary">
        Profile <Badge bg="secondary">9</Badge>
      </Button>
    );
  }
  
  function ButtonExampleCode() {
    return (
      <CodeEditor text={ `import { Badge, Button } from "@ui/index";\n
      \n
      function ButtonExample() {
        return (
          <Button variant="primary">
            Profile <Badge bg="secondary">9</Badge>
          </Button>
        );
      }
      `}/>
  
      
    );
  }

  
  export default {ButtonExample, ButtonExampleCode}