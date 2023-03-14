import { Alert } from "@ui/index";
import CodeEditor from "src/modules/CodeEditor";

function BasicExample() {
  return (
    <div>
      {[
        "primary",
        "secondary",
        "success",
        "danger",
        "warning",
        "info",
        "light",
        "dark",
      ].map((variant) => (
        <Alert variant={variant}>
          <Alert.Header>This is a {variant} header!</Alert.Header>
          <Alert.Body>This is a {variant} alert—check it out!</Alert.Body>
          <Alert.Footer>This is a {variant} footer!</Alert.Footer>
        </Alert>
      ))}
    </div>
  );
}

function BasicExampleCode(){
  return(
    <CodeEditor text={`import { Alert } from "@ui/index";\n\n
    function BasicExample() {
      return (
        <div>
          {[
            "primary",
            "secondary",
            "success",
            "danger",
            "warning",
            "info",
            "light",
            "dark",
          ].map((variant) => (
            <Alert variant={variant}>
            <Alert.Header>This is a {variant} header!</Alert.Header>
            <Alert.Body>This is a {variant} alert—check it out!</Alert.Body>
            <Alert.Footer>This is a {variant} footer!</Alert.Footer>
            </Alert>
          ))}
        </div>
      );
    }
    `} />
  )
}

export default {BasicExample,BasicExampleCode}
