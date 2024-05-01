'use client';
import { useRef } from 'react';
import { useState } from 'react';
import Image from 'next/image';
import classes from './imagePicker.module.css';

export default function ImagePicker({ label, name }) {
  const [pickedImage, setPickedImage] = useState();
  const imageInput = useRef();

  function handleClick() {
    imageInput.current.click();
  }

  function handleImageChange(e) {
    const file = e.target.files[0];
    const fileReader = new FileReader();

    if (!file) setPickedImage(null);

    // if (!file) {
    //   setPickedImage(null);
    //   return;
    // }

    fileReader.onload = () => {
      setPickedImage(fileReader.result);
    };

    fileReader.readAsDataURL(file);
  }

  return (
    <div className={classes.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={classes.controls}>
        <div className={classes.preview}>
          { !pickedImage && <p>No image preview available.</p> }
          { pickedImage && 
            <Image 
              src={pickedImage} 
              alt="The image selected by the user." 
              fill 
            />
          }
        </div>
        <input 
          className={classes.input}
          type='file'
          accept='image/png, image/jpg' 
          name={name} 
          id={name} 
          ref={imageInput}
          onChange={handleImageChange}
          required
        />
        <button className={classes.button} type="button" onClick={handleClick}>
          Pick an Image
        </button>
      </div>
    </div>
  )
}