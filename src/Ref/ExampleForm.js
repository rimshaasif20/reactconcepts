import React, { useRef } from 'react';

function ExampleForm() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const emailValue = emailRef.current.value;
    const passwordValue = passwordRef.current.value;

    console.log('Email:', emailValue);
    console.log('Password:', passwordValue);
    emailRef.current.value = '';
    passwordRef.current.value = '';
  };

  return (
    <div className='container' style={{ width: "350px" }}>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1" className="form-label mt-4">Email address</label>
            <input type="email" className="form-control" id="exampleInputEmail1" ref={emailRef} aria-describedby="emailHelp" placeholder="Enter email" />
            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1" className="form-label mt-4">Password</label>
            <input type="password" className="form-control" id="exampleInputPassword1" ref={passwordRef} placeholder="Password" />
          </div>
          <br />
          <button type="submit" className="btn btn-primary">Submit</button>
        </fieldset>
      </form>
    </div>
  );
}

export default ExampleForm;
