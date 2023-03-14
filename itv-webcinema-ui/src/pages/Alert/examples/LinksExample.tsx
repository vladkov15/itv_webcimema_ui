import { Alert } from "@ui/index";
import CodeEditor from "src/modules/CodeEditor";

function LinksExample() {
    return (
      <>
        {[
          'primary',
          'secondary',
          'success',
          'danger',
          'warning',
          'info',
          'light',
          'dark',
        ].map((variant) => (
          <Alert key={variant} variant={variant}>
            This is a {variant} alert with{' '}
            <Alert.Link href="#">an example link</Alert.Link>. Give it a click if
            you like.
          </Alert>
        ))}
      </>
    );
  }

  function LinksExampleCode(){
    return(
        <CodeEditor text={`import { Alert } from "@ui/index";\n\n
        function LinksExample() {
            return (
              <>
                {[
                  'primary',
                  'secondary',
                  'success',
                  'danger',
                  'warning',
                  'info',
                  'light',
                  'dark',
                ].map((variant) => (
                  <Alert key={variant} variant={variant}>
                    This is a {variant} alert with{' '}
                    <Alert.Link href="#">an example link</Alert.Link>. Give it a click if
                    you like.
                  </Alert>
                ))}
              </>
            );
          }`}/>
    )
  }
  
  export default {LinksExample,LinksExampleCode}