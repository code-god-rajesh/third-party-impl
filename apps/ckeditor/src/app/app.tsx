// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { SetStateAction, useState } from 'react';
import Editor from './Editor';

export function App() {
  const [data, setData] = useState('');
  return (
    <Editor
      data={data}
      onChange={(val: SetStateAction<string>) => setData(val)}
    />
  );
}

export default App;
