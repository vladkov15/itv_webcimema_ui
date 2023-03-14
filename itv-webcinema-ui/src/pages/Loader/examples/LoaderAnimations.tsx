import { Loader } from "@ui/index";
import CodeEditor from "src/modules/CodeEditor";

function LoaderAnimations(){
    return(
        <div>
        <Loader animation={"border"}/>
        {' '}
        <Loader animation={'grow'}/>
        </div>
    )
}

function LoaderAnimationsCode(){
    return(
        <CodeEditor text={`import { Loader } from "@ui/index";\n
        \n
        function LoaderAnimations(){
            return(
                <div>
                <Loader animation={"border"}/>
                {' '}
                <Loader animation={'grow'}/>
                </div>
            )
        }`} />
    )
}

export default {LoaderAnimations, LoaderAnimationsCode}