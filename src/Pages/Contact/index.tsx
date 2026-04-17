import "./Contact.css"
import { useState } from "react"

const contact = () => {
  const [form, setForm] = useState({
    name:"",
    email:"",
    message:"",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value, 
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log(form);

    alert("message sent successfully!");
    setForm({ name: "", email: "", message:""});
  };

  return (
    <div className="contact">
   
   <div className="contact-hero">
     <div className="overlay">
       <h1>Contact Us </h1>
       <p>We'd love to hear from you </p>
     </div>
   </div>
     <div className="contact-container">
     <div className="contact-info">
      <h2>Get in Touch</h2>
      <p>
        Have questions, feedback, or want to partner with us ?
        Reach our team will respond quickly
      </p>

      <div className="info-item">
        <h4>Address</h4>
        <p>Lagos, Nigeria</p>
      </div>
    
     <div className="info-item">
        <h4>Phone</h4>
        <p>+234 800 000 0000</p>
      </div>

       <div className="info-item">
        <h4>Email</h4>
        <p>support@tantalizer.com</p>
      </div>
     </div>
    
    <form className="contact-form" onSubmit={handleSubmit}>
      <h2>Send a Message</h2>

      <input
        type="text"
        name="name"
        placeholder="Your Name"
        value={form.name}
        onChange={handleChange}
        required 
        />

       <input
       type="email"
       name="email"
       value={form.email}
       onChange={handleChange}
       required
       />

       <textarea
       name="message"
       placeholder="your Message"
       rows={5}
       value={form.message}
       onChange={handleChange}
       required
       />

       <button type="submit">Send Message</button>
    </form>


  </div>
    </div>


  );
};

export default contact