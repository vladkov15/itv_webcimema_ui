import { FC, ReactNode, useState } from "react";
import Editor from 'react-simple-code-editor';
import { highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import 'prismjs/themes/prism.css';

import styles from '../style/GeneralStyles.module.scss'

interface CodeEditorProps{
    text: string
}

const CodeEditor:FC<CodeEditorProps> = ({text}) => {
    const [code, setCode] = useState(`${text}`);
    return (
      <div>
        <Editor
       className={styles.ExampleBody}
        value={code}
        onValueChange={code => setCode(code)}
        highlight={code => highlight(code, languages.js)}
        ignoreTabKey={false}
        padding={10}
        style={{
          fontFamily: '"Fira code", "Fira Mono", monospace',
          fontSize: 13,
          color:"black"
        }}
      />
      </div>
    );
  }

  export default CodeEditor