import { useState } from "react";

function Contact() {
  const [msg, setMsg] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInput = (event) => {
    let name = event.target.name;
    let value = event.target.value;

    setMsg({ ...msg, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { name, email, message } = msg;

    try {
      const res = await fetch("/message", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, message }),
      });

      if (res.status === 200) {
        window.alert("Message sent successfully");
        setMsg({
          name: "",
          email: "",
          message: "",
        });
      } else if (res.status === 400 || !res) {
        window.alert("Mesage failed: Try again");
      } else {
        window.alert(res.status);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <section id="contact">
        <div className="container my-5 py-5">
          <div className="row ">
            <div className="col-12">
              <h3 className="fs-5 text-center mb-0">Contact Us</h3>
              <h1 className="display-6 text-center mb-4">
                Have Some <b>Questions?</b>
              </h1>
              <hr className="w-25 mx-auto" />
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-md-6">
              <img
                src="/assets/contact/contact-1.jpg"
                alt="Contact"
                className="w-75 mt-5"
                loading="lazy"
              />
            </div>
            <div className="col-md-6">
              <form onSubmit={handleSubmit} method="POST">
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Your Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="John Smith"
                    name="name"
                    value={msg.name}
                    onChange={handleInput}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    aria-describedby="emailHelp"
                    placeholder="example@example.com"
                    name="email"
                    value={msg.email}
                    onChange={handleInput}
                  />
                  <div id="emailHelp" className="form-text">
                    We'll never share your email with anyone else.
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="message" className="form-label">
                    Your Message
                  </label>
                  <textarea
                    className="form-control"
                    id="message"
                    rows={5}
                    name="message"
                    value={msg.message}
                    onChange={handleInput}
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-outline-primary rounded-pill px-4"
                >
                  Send Message <i className="fa fa-paper-plane ms-2"></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
