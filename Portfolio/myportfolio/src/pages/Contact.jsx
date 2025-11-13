// export default function Home() {
//   return (
//  <section id="contact" className="contact">
//         <h3>Contact Me</h3>
//         <form>
//           <input type="text" placeholder="Your Name" required />
//           <input type="email" placeholder="Your Email" required />
//           <input type="tel" placeholder="Your Phone" pattern="[0-9]{10}" />
//           <textarea placeholder="Your Message" required></textarea>
//           <button type="submit" className="btn gradient">Send</button>
//         </form>
//       </section>


//      )
// }
import { useState } from "react";
import "../App.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8084/api/contact/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("✅ Message sent successfully!");
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        alert("❌ Failed to send message. Try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("⚠️ Error sending message!");
    }
  };

  return (
    <section id="contact" className="contact">
      <h3>Contact Me</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="tel"
          name="phone"
          placeholder="Your Phone"
          pattern="[0-9]{10}"
          value={formData.phone}
          onChange={handleChange}
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
        <button type="submit" className="btn gradient">
          Send
        </button>
      </form>
    </section>
  );
}
