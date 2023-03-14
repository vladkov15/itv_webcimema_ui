import { CloseButton } from "@ui/index";
import CodeEditor from "src/modules/CodeEditor";

function ButtonCloseExample(){
    return(
        <CloseButton></CloseButton>
    )
}


function ButtonCloseExampleCode(){
    return(
        <CodeEditor text={`import { CloseButton } from "@ui/index";\n
        \n
        function ButtonCloseExample(){
            return(
                <CloseButton/>
            )
        }`}/>
    )
}

export default {ButtonCloseExample, ButtonCloseExampleCode}