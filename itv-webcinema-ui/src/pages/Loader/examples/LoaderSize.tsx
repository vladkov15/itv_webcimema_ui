import { Loader } from "@ui/index";
import CodeEditor from "src/modules/CodeEditor";

function LoaderSize(){
    return(
        <div>
            <Loader size={'lg'} />
            {' '}
            <Loader size={'sm'} />
        </div>
    )
}

function LoaderSizeCode(){

return(
    <CodeEditor text={`import { Loader } from "@ui/index"; \n
    \n
function LoaderSize(){
    return(
        <div>
            <Loader size={'lg'} />
            {' '}
            <Loader size={'sm'} />
        </div>
    )
}`}/>)
}

export default {LoaderSize, LoaderSizeCode}