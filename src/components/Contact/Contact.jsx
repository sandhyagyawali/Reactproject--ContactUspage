import './Contact.css'
import { MdOutlineMessage } from "react-icons/md";
import { IoCallOutline } from "react-icons/io5";
import { HiOutlineMail } from "react-icons/hi";
function Contact() {

  const onSubmit=(event)=>{
    event.preventDefault();
    console.log("name:",event.target[0].value);
    console.log("email:",event.target[1].value);
    console.log("text:",event.target[2].value)

  }
  const onViaCall = ()=>{
    console.log("I am from Call")
  }
  return (
    <div>
      <div className="container">
        <h1>CONTACT US</h1>
        <p>LET’S CONNECT: WE’RE HERE TO HELP, AND WE’D LOVE TO HEAR FROM YOU! WHETHER YOU HAVE A QUESTION, COMMENT, OR JUST WANT TO CHAT , YOU CAN REACH OUT TO US THROUGH THE CONTACT FORM OF THIS PAGE, OR BY PHONE, EMAIL, OR SOCIAL MEDIA. </p>
      </div>
      <div className="contact-us">
        <div className="contact-form">
          <div className="contact-btn">
            <button className='btn'> <MdOutlineMessage />VIA SUPPORT CHAT</button>
            <button onClick={onViaCall}className='btn'><IoCallOutline />VIA CALL</button>
          </div>
          <div className="email">
            <button><HiOutlineMail />VIA EMAIL FORM</button>
          </div> 

          <form action="" onSubmit={onSubmit}>
            <div className="form_control">
            <label htmlFor="name">Name</label>
            <input type="text" name='name'/>
            </div>

            <div className="form_control">
            <label htmlFor="email">Email</label>
            <input type="email" name='email' />
            </div>

            <div className="form_control">
            <label htmlFor="text">Text</label>
            <textarea name ="text" rows={7}/>
            </div>
            

          <div className="submit">     
          <button>Submit</button> 
          </div>
          </form>      
        </div>

        <div className="contactservice">
          <img src="images/service.png" alt="service" />
        </div>
      </div>
    </div>
  )
}

export default Contact
