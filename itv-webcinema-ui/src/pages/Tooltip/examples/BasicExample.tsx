
import { Overlay } from "@restart/ui";
import { Button } from "@ui/index";
import { useRef, useState } from "react";


function BasicExample() {
    const [show, setShow] = useState(false);
    const target = useRef(null);
  
    return (
      <>
         {/* <Button ref={target} onClick={() => setShow(!show)}>
        Click me!
      </Button>
      <Overlay target={target.current} show={show} placement="right">
        {(props) => (
          <Tooltip id="overlay-example" {...props}>
            My Tooltip
          </Tooltip>
        )}
      </Overlay> */}
      </>
    );
  }
  
  export default BasicExample