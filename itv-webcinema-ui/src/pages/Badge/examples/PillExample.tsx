import { Badge } from "@ui/index";
import CodeEditor from "src/modules/CodeEditor";

function PillExample() {
    return (
      <div>
        <Badge pill bg="primary">
          Primary
        </Badge>{' '}
        <Badge pill bg="secondary">
          Secondary
        </Badge>{' '}
        <Badge pill bg="success">
          Success
        </Badge>{' '}
        <Badge pill bg="danger">
          Danger
        </Badge>{' '}
        <Badge pill bg="warning" text="dark">
          Warning
        </Badge>{' '}
        <Badge pill bg="info">
          Info
        </Badge>{' '}
        <Badge pill bg="light" text="dark">
          Light
        </Badge>{' '}
        <Badge pill bg="dark">
          Dark
        </Badge>
      </div>
    );
  }

  function PillExampleCode() {
    return(
      <CodeEditor text={`import { Badge } from "@ui/index";\n
      \n
      function PillExample() {
        return (
          <div>
            <Badge pill bg="primary">
              Primary
            </Badge>{' '}
            <Badge pill bg="secondary">
              Secondary
            </Badge>{' '}
            <Badge pill bg="success">
              Success
            </Badge>{' '}
            <Badge pill bg="danger">
              Danger
            </Badge>{' '}
            <Badge pill bg="warning" text="dark">
              Warning
            </Badge>{' '}
            <Badge pill bg="info">
              Info
            </Badge>{' '}
            <Badge pill bg="light" text="dark">
              Light
            </Badge>{' '}
            <Badge pill bg="dark">
              Dark
            </Badge>
          </div>
        );
      }`} />
    )
  }
  
  export default {PillExample, PillExampleCode }