"use client";

import { orbitron, rajdhani } from "../fonts";

const Contact = () => {
  const services_data = [
    {
      svg: "📧",
      title: "Email Us Directly",
      desc: "Click to compose",
      action: "mailto:contact@armourmind.com?subject=Security%20Inquiry"
    },
    {
      svg: "G",
      title: "Gmail",
      desc: "Open in Browser",
      action: "https://mail.google.com/mail/?view=cm&fs=1&to=contact@armourmind.com"
    },
    {
      svg: "O",
      title: "Outlook",
      desc: "Open Web App",
      action: "https://outlook.live.com/mail/0/deeplink/compose?to=contact@armourmind.com"
    }
  ];

  return (
    <>
      <div className=' relative  h-[180px] bg-navcolor border-b border-navborder flex items-center justify-center flex-col gap-4'>
                    <div className={`${orbitron.className} text-servicehead text-6xl font-bold tracking-widest  `}>Initialize Connection</div>
                    <p className={`${rajdhani.className} text-white font-semibold`}>Select your communication protocol</p>
    
                </div>
      {/* header omitted for brevity */}

      <div className="flex flex-col md:flex-row gap-8 justify-center items-center mt-20 mb-20">
        {services_data.map((service, index) => (
          <div
            key={index}
            onClick={() => window.open(service.action, "_blank")}
            className="relative z-30 flex flex-col p-6 w-96 h-64
                       bg-service_card_color cursor-pointer rounded-lg
                       transition-all duration-300 hover:scale-105"
          >
            <div className="flex flex-col justify-center gap-4 mx-7 my-10">
              <div className="text-5xl">{service.svg}</div>
              <h3 className={`${orbitron.className} text-2xl text-servicehead`}>
                {service.title}
              </h3>
              <p className={`${rajdhani.className} text-white/80`}>
                {service.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Contact;
