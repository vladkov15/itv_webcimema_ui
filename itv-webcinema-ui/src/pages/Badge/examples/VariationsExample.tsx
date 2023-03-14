import { Badge } from "@ui/index";
import CodeEditor from "src/modules/CodeEditor";

function VariationsExample() {
    return (
      <div>
        <Badge>
          Primary
        </Badge>{' '}
        <Badge bg="secondary">
          Secondary
        </Badge>{' '}
        <Badge bg="success">
          Success
        </Badge>{' '}
        <Badge bg="danger">
          Danger
        </Badge>{' '}
        <Badge bg="warning" text="dark">
          Warning
        </Badge>{' '}
        <Badge bg="info">
          Info
        </Badge>{' '}
        <Badge bg="light" text="dark">
          Light
        </Badge>{' '}
        <Badge bg="dark">
          Dark
        </Badge>
      </div>
    );
  }
  
  function VariationsExampleCode() {
    return(<CodeEditor text={`import { Badge } from "@ui/index";\n
    \n
    function VariationsExample() {
      return (
        <div>
          <Badge>
            Primary
          </Badge>{' '}
          <Badge bg="secondary">
            Secondary
          </Badge>{' '}
          <Badge bg="success">
            Success
          </Badge>{' '}
          <Badge bg="danger">
            Danger
          </Badge>{' '}
          <Badge bg="warning" text="dark">
            Warning
          </Badge>{' '}
          <Badge bg="info">
            Info
          </Badge>{' '}
          <Badge bg="light" text="dark">
            Light
          </Badge>{' '}
          <Badge bg="dark">
            Dark
          </Badge>
        </div>
      );
    }`} />)
  }
  export default {VariationsExample,VariationsExampleCode}