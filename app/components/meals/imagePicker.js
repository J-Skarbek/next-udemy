'use client';
import { useRef } from 'react';
import classes from './imagePicker.module.css';

export default function ImagePicker({ label, name }) {
  const imageInput = useRef();

  function handleClick() {
    imageInput.current.click();
  }

  return (
    <div class={classes.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={classes.controls}>
        <input 
          className={classes.input}
          type='file'
          accept='image/png, image/jpg' 
          name={name} 
          id={name} 
          ref={imageInput}
        />
        <button className={classes.button} type="button" onClick={handleClick}>
          Pick an Image
        </button>
      </div>
    </div>
  )
}