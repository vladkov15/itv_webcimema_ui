import { Button } from "@ui/index";
import { useEffect, useState } from "react";

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
  
 export default LoadingButton