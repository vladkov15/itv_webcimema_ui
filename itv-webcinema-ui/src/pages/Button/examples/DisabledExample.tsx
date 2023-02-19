import { Button } from "@ui/index";

function DisabledExample() {
    return (
      <>
        <Button variant="primary" disabled>
          Primary button
        </Button>{' '}
        <Button variant="secondary" disabled>
          Button
        </Button>{' '}
        <Button href="#" variant="secondary" disabled>
          Link
        </Button>
      </>
    );
  }
  
  export default DisabledExample;