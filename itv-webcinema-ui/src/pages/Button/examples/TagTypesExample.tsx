import { Button } from "@ui/index";
import CodeEditor from "src/modules/CodeEditor";

function TagTypesExample() {
  return (
    <>
      <Button href="#">Link</Button> <Button type="submit">Button</Button>{" "}
    </>
  );
}

function TagTypesExampleCode(){
  return(
    <CodeEditor text={`import { Button } from "@ui/index";\n
    \n
    function TagTypesExample() {
      return (
        <>
          <Button href="#">Link</Button> <Button type="submit">Button</Button>{" "}
        </>
      );
    }`} />
  )
}

export default {TagTypesExample, TagTypesExampleCode}
