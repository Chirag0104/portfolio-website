import React from 'react'

export default function Contact() {
  return (
    <div>
      <div className="contact-container" id="contact">
        <div className="contact-heading">
          <u className="contact-underline">Contact</u>
        </div>
        <div className="contact-sub-heading">
          Submit the form below or ping me at - chiraggoyal0104@gmail.com
        </div>
        <form action="/">
        <div className="form-container">
          <div className="mb-3">
            <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Name" required />
          </div>
          <div className="mb-3">
            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Email" required/>
          </div>
          <div className="mb-3">
            
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="9" />
          </div>
          <input type='submit' className=" btn btn-outline-light contact-button" value="Let's Collaborate" />
        </div>
        
      </form> 
      </div>
    </div>
  )
}
