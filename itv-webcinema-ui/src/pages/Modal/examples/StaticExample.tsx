import { Button, Modal } from "@ui/index";
import CodeEditor from "src/modules/CodeEditor";

function StaticExample() {
  return (
    <div>
      <Modal.Dialog
       size={'sm'}>
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>Modal body text goes here.</p>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary">Close</Button>
          <Button variant="primary">Save changes</Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  );
}

function StaticExampleCode() {
  return (
    <CodeEditor
      text={`import { Button, Modal } from "@ui/index";\n
    \n
    function StaticExample() {
        return (
          <div>
            <Modal.Dialog
             size={'sm'}>
              <Modal.Header closeButton>
                <Modal.Title>Modal title</Modal.Title>
              </Modal.Header>
      
              <Modal.Body>
                <p>Modal body text goes here.</p>
              </Modal.Body>
      
              <Modal.Footer>
                <Button variant="secondary">Close</Button>
                <Button variant="primary">Save changes</Button>
              </Modal.Footer>
            </Modal.Dialog>
          </div>
        );
      }`}
    />
  );
}

export default { StaticExample, StaticExampleCode };
