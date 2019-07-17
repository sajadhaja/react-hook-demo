import React, { useState, useEffect, useContext} from 'react';
import Row from './Row';
import {ThemeContext,LocaleContext} from './context.js';

export default function Greeting() {
 console.log("Greeting...");
 const name = useFormInput('Tom')
 const surName = useFormInput('Tom');
 const theme = useContext(ThemeContext);
 const locale = useContext(LocaleContext);
 const width = useWindowsWidth();

 useDocumentTitle(name.value+ ' '+ surName.value, name.value);

return (
  <section className= {theme}>
    <h1>* React Hook Demo *</h1>
    <Row label="Name">
      <input {...name} />
    </Row>
    <Row label="SurName">
      <input {...surName} />
    </Row>
    <Row label="Width">
      {width}
    </Row>
      <Row label="Language">
      {locale}
    </Row>
  </section>
);
}


function useFormInput(initalValue){
  const [value, setValue] = useState(initalValue);
  function handleSurnameChange(e) {
    setValue(e.target.value)
 } 
 return {
   value: value,
   onChange: handleSurnameChange
 }
}

function useDocumentTitle(title, dep){
  useEffect(()=>{
   console.log("useDocumentTitle ...");
   document.title = title;
  },[dep])
}

function useWindowsWidth(){
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(()=>{
    const handleResize = ()=>{
        setWidth(window.innerWidth);
    }
    window.addEventListener('resize', handleResize);
    return ()=>{
      window.removeEventListener('resize', handleResize);
    }
  })
  return width;
}

