import { Button } from "@ui/index";
import CodeEditor from "src/modules/CodeEditor";

function SizesExample() {
  return (
    <>
      <div>
        <Button variant="primary" size="sm">
          Small button
        </Button>{" "}
        <Button variant="secondary" size="sm">
          Small button
        </Button>
      </div>
    </>
  );
}

function SizesExampleCode(){

  return(
    <CodeEditor text={`import { Button } from "@ui/index";\n
    \n
    function SizesExample() {
      return (
        <>
          <div>
            <Button variant="primary" size="sm">
              Small button
            </Button>{" "}
            <Button variant="secondary" size="sm">
              Small button
            </Button>
          </div>
        </>
      );
    }`} />
  )
}

export default {SizesExample,SizesExampleCode}
