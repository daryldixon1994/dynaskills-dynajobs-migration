import emailjs from "@emailjs/browser";
import { useState } from "react";
import swal from "sweetalert";

export default function Contact() {
  const [sender, setSender] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [senderSubject, setSenderSubject] = useState("");
  const [senderPhone, setSenderPhone] = useState("");
  const [senderEmail, setSenderEmail] = useState("");
  const [messageClient, setMessageClient] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    if (
      senderEmail !== "" &&
      sender !== "" &&
      senderSubject !== "" &&
      messageClient !== ""
    ) {
      emailjs
        .send(
          "service_mk916rn",
          "template_5ifw0ck",
          {
            from_name: sender,
            from_email: senderEmail,
            from_subject: senderSubject,
            message: messageClient,
          },
          "7pan3UyznhLH6JQvS"
        )
        .then(() => {
          // window.location.reload(false);
          setIsLoading(false);
          swal("Sent!", "Your message was sent successfully!", "success").then(
            () => {
              setSender("");
              setSenderSubject("");
              setSenderEmail("");
              setMessageClient("");
              setSenderPhone("");
            }
          );
        });
    } else {
      setIsLoading(false);
      swal("Oups!", "Empty fields are not allowed! 🤕", "error");
    }
  };
  return (
    <>
      <section
        className="contact-area contact-bg"
        data-background="/assets/img/bg/contact_bg.jpg"
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5">
              <div className="contact-content">
                <div className="section-title mb-30 tg-heading-subheading animation-style2">
                  <span className="sub-title tg-element-title">Contact Us</span>
                  <h2 className="title tg-element-title">
                    Feel free to get in touch with us.
                  </h2>
                </div>
                <p>
                  Ever find yourself staring at your computer screen a good
                  consulting slogan to come to mind? Oftentimes.
                </p>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="contact-form">
                <form action="#">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-grp">
                        <input
                          type="text"
                          placeholder="Full Name *"
                          name="name"
                          value={sender}
                          onChange={(e) => setSender(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-grp">
                        <input
                          type="email"
                          placeholder="E-mail *"
                          value={senderEmail}
                          name="email"
                          onChange={(e) => setSenderEmail(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-grp">
                        <input
                          type="text"
                          placeholder="Phone *"
                          value={senderPhone}
                          name="phone"
                          onChange={(e) => setSenderPhone(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-grp">
                        <input
                          type="text"
                          placeholder="Subject *"
                          value={senderSubject}
                          name="subject"
                          onChange={(e) => setSenderSubject(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-grp">
                        <textarea
                          placeholder="Message *"
                          name="message"
                          onChange={(e) => setMessageClient(e.target.value)}
                          value={messageClient}
                        />
                      </div>
                    </div>
                  </div>
                  <button
                    type="submit"
                    onClick={(e) => {
                      handleSubmit(e);
                    }}
                  >
                    {isLoading ? "Sending..." : "Send"}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="contact-shape">
          <img src="/assets/img/images/contact_shape.png" alt="" />
        </div>
      </section>
    </>
  );
}
