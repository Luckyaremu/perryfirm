import React from 'react';
import Icofont from "react-icofont";
import ConForm from "../component/Contact/Conform";
import "../component/Contact/Contact.scss";
import Navbar from "../component/Navbar";


const contact = () => {
    const contacts = [
      {
        name: "E-mail",
        status: "trenageneralservices@yahoo.com",
        icon: "letter",
      },
    ];
    
    return (
      
      <div className="con">
        <Navbar />
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
            </div>
            <ConForm />
          </div>
        </div>
      </div>
    );
  };

export default contact