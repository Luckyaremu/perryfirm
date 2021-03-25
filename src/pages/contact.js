import React from 'react';
import Icofont from "react-icofont";
import ConForm from "../component/Contact/Conform";
import "../component/Contact/Contact.scss";

const contact = () => {
    const contacts = [
      {
        name: "E-mail",
        status: "aremu.baba70@gmail.com",
        icon: "letter",
      },
    ];
    const socials = [
    
      {
        name: "Linked-In",
        status: "https://www.linkedin.com/in/lucky-aremu-24807a145/",
        icon: "linkedin",
      },
      {
        name: "Twitter",
        status: "https://twitter.com/luckyaremu",
        icon: "twitter",
      },
      {
        name: "GitHub",
        status: "https://github.com/Luckyaremu",
        icon: "github",
      },
    ];
    return (
      <div className="con">
        <div className="con-pre-cont">
          <div className="con-cont">
            <div className="con-cards">
              {contacts.map((contact) => (
                <div className="con-card" key={contact.name}>
                  <div className="con-card-icon">
                  <Icofont icon={contact.icon} />
                  </div>
                  <div className="con-card-de">
                    <h4 className="con-card-name">{contact.name}</h4>
                    <p className="con-card-dt">{contact.status} </p>
                  </div>
                </div>
              ))}
              <div className="con-card con-social">
                {socials.map((social) => (
                  <a href={social.status} className="soc" key={social.name}>
                   <Icofont icon={social.icon} />
                  </a>
                ))}
              </div>
            </div>
            <ConForm />
          </div>
        </div>
      </div>
    );
  };

export default contact