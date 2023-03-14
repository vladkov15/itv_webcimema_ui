import { Button } from "@ui/index";
import { useEffect, useState } from "react";
import CodeEditor from "src/modules/CodeEditor";

function simulateNetworkRequest() {
    return new Promise((resolve) => setTimeout(resolve, 2000));
  }
  
  function LoadingButton() {
    const [isLoading, setLoading] = useState(false);
  
    useEffect(() => {
      if (isLoading) {
        simulateNetworkRequest().then(() => {
          setLoading(false);
        });
      }
    }, [isLoading]);
  
  
    return (
      <Button
        variant="primary"
        disabled={isLoading}
        onClick={()=>{setLoading(true)}}
      >
        {isLoading ? 'Loading…' : 'Click to load'}
      </Button>
    );
  }

  function LoadingButtonCode(){
    return(
      <CodeEditor text={`import { Button } from "@ui/index";
      import { useEffect, useState } from "react";\n
      \n
      function simulateNetworkRequest() {
        return new Promise((resolve) => setTimeout(resolve, 2000));
      }
      
      function LoadingButton() {
        const [isLoading, setLoading] = useState(false);
      
        useEffect(() => {
          if (isLoading) {
            simulateNetworkRequest().then(() => {
              setLoading(false);
            });
          }
        }, [isLoading]);
      
      
        return (
          <Button
            variant="primary"
            disabled={isLoading}
            onClick={()=>{setLoading(true)}}
          >
            {isLoading ? 'Loading…' : 'Click to load'}
          </Button>
        );
      }\n
      \n
      export default LoadingButton`} />
    )
  }
  
 export default {LoadingButton, LoadingButtonCode}