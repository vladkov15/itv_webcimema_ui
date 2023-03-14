import { Button } from "@ui/index";
import CodeEditor from "src/modules/CodeEditor";

function TypesExample() {
    return (
      <>
        <Button variant="primary">Primary</Button>{' '}
        <Button variant="secondary">Secondary</Button>{' '}
        <Button variant="success">Success</Button>{' '}
        <Button variant="warning">Warning</Button>{' '}
        <Button variant="danger">Danger</Button>{' '}
        <Button variant="info">Info</Button>{' '}
        <Button variant="light">Light</Button>{' '}
        <Button variant="dark">Dark</Button>
        <Button variant="link">Link</Button>
      </>
    );
  }

  function TypesExampleCode(){
    return(
      <CodeEditor text={`import { Button } from "@ui/index";\n
      \n
      function TypesExample() {
        return (
          <>
            <Button variant="primary">Primary</Button>{' '}
            <Button variant="secondary">Secondary</Button>{' '}
            <Button variant="success">Success</Button>{' '}
            <Button variant="warning">Warning</Button>{' '}
            <Button variant="danger">Danger</Button>{' '}
            <Button variant="info">Info</Button>{' '}
            <Button variant="light">Light</Button>{' '}
            <Button variant="dark">Dark</Button>
            <Button variant="link">Link</Button>
          </>
        );
      }`} />
    )
  }
  
  export default {TypesExample, TypesExampleCode}