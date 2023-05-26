import {useState} from 'react';
import { marked } from 'marked';
import './App.css';

function App() {
  const [text, setText] = useState(`
  # H1
  ## H2
  [title](https://www.example.com)
  \`code\`

  \`\`\`
  {
  "firstName": "John",
  "lastName": "Smith",
  "age": 25
  }
  \`\`\`

  - First item
  - Second item
  - Third item

  > blockquote

  ![alt text](image.jpg)

  **bold text**
  `);

  marked.setOptions({
      breaks: true,
  });

  const typeFx = (event) => {
      setText(event.target.value);
  };


  return (
      <div id='App'>
     
        <textarea id='editor'onChange={typeFx} defaultValue={text}></textarea>
        <div id='preview' dangerouslySetInnerHTML={{__html: marked.parse(text)}}></div>
      </div>
  )

};


export default App;
