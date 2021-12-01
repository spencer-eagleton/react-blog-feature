import { useState } from 'react';

import Preview from '../../components/Preview/Preview';
import Editor from '../../components/Editor/Editor';

import './Home.css';

export default function Home() {
  const [title, setTitle] = useState('');
  const [subtitle, setSubtitle] = useState('');
  const [font, setFont] = useState('');
  const [align, setAlign] = useState('center');
  const [text, setText] = useState('');
  // add useState calls here for title, subtitle, font, align, and text

  return (
    <main>
      {/* pass the state variables as props to the presentational components */}
      <Preview
        {...{
          title,
          setTitle,
          subtitle,
          setSubtitle,
          font,
          setFont,
          align,
          setAlign,
          text,
          setText,
        }}
      />
      <Editor
        {...{
          title,
          setTitle,
          subtitle,
          setSubtitle,
          font,
          setFont,
          align,
          setAlign,
          text,
          setText,
        }}
      />
    </main>
  );
}
