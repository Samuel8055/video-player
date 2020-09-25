import React, { useContext } from "react";
import { ContextData } from "../Context";

const InputForm = () => {
  const { handleSubmit, changeHandler, tempUrl } = useContext(ContextData);

  return (
    <div className='form-container'>
      <div className='row'>
        <div className='col-md-8'>
          <form onSubmit={handleSubmit} className='form'>
            <input
              type='text'
              placeholder='Enter a valid YouTube URL. . .'
              onChange={changeHandler}
              value={tempUrl}
              className='form-control input-field'
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default InputForm;
