import React, { useState, useContext, useEffect } from 'react';
import Row from './Row';
import { ThemeContext, LocaleContext } from './context';

export default function Greeting() {
  const name = useFormInput('Tom');
  const surName = useFormInput('Mathew');
  const theme = useContext(ThemeContext);
  const locale = useContext(LocaleContext);
  const width = useWindowWidth();
  useDocumentTitle(name.value + ' ' + surName.value, name.value);

  return (
    <section className={theme}>
      <Row label="Name">
        <input
          {...name} />
      </Row>
      <Row label="Surname">
        <input
          {...surName} />
      </Row>
      <Row label="Language">
        {locale}
      </Row>
      <Row label="Width">
        {width}
      </Row>
    </section>
  );

}

function useFormInput(intialValue) {
  const [value, setValue] = useState(intialValue);
  function handleChange(e) {
    setValue(e.target.value);
  }
  return {
    value: value,
    onChange: handleChange
  }
}

function useDocumentTitle(title, dep) {
  useEffect(() => {
    document.title = title;
  }, [dep]);
}

function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => {
      console.log("cleanup listenrr");
      window.removeEventListener('resize', handleResize);
    };
  });
  return width;
}

