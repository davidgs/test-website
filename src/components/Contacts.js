const Contacts = () => {
  return (
    <div className="section contacts" id="section-contacts">
      <div className="content">
        {/* title */}
        <div className="titles">
          <div className="title">Contact</div>
          <div className="subtitle">Let's talk</div>
        </div>
        {/* contact form */}
        <div className="contact-form">
          <form id="cform" method="post">
            <div className="group-val">
              <div className="label">
                Full name <strong>*</strong>
              </div>
              <input
                type="text"
                name="name"
                placeholder="ej.: Genoveva Lian Hullt"
              />
            </div>
            <div className="group-val">
              <div className="label">
                Email address <strong>*</strong>
              </div>
              <input
                type="email"
                name="email"
                placeholder="example@domain.com"
              />
            </div>
            <div className="group-val">
              <div className="label">
                Message <strong>*</strong>
              </div>
              <textarea
                name="message"
                placeholder="To Write"
                defaultValue={""}
              />
            </div>
            <div className="group-bts">
              <button type="submit" className="btn">
                <span className="animated-button">
                  <span>Send Message</span>
                </span>
                <i className="icon fas fa-chevron-right" />
              </button>
            </div>
          </form>
          <div className="alert-success">
            <p>Thanks, your message is sent successfully.</p>
          </div>
        </div>
        {/* contact info */}
        <div className="contact-info">
          <div className="name">David G. Simmons</div>
          <div className="subname">DevRel Leader</div>
          <div className="info-list">
            <ul>
              <li>
                <strong>Residence:</strong> USA
              </li>
              <li>
                <strong>Freelance:</strong> Available
              </li>
              <li>
                <strong>Address:</strong> Apex, NC
              </li>
              <li>
                <strong>Phone:</strong> +1 (919) 534-5099
              </li>
              <li>
                <strong>E-mail:</strong> davidgs@davidgs.com
              </li>
            </ul>
          </div>
          <div className="author">David G. Simmons</div>
        </div>
        <div className="clear" />
      </div>
    </div>
  );
};
export default Contacts;
