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
      {/* HEADER */}
      <div className="relative h-[150px] sm:h-[170px] lg:h-[180px] bg-navcolor border-b border-navborder flex items-center justify-center flex-col gap-3 sm:gap-4 text-center px-4">
        <div
          className={`${orbitron.className} text-servicehead text-3xl sm:text-5xl lg:text-6xl font-bold tracking-widest`}
        >
          Initialize Connection
        </div>
        <p className={`${rajdhani.className} text-white font-semibold text-sm sm:text-base`}>
          Select your communication protocol
        </p>
      </div>

      {/* CONTACT CARDS */}
      <div className="flex flex-col md:flex-row flex-wrap justify-center items-stretch gap-6 sm:gap-8 mt-12 sm:mt-16 lg:mt-20 mb-12 sm:mb-16 lg:mb-20 px-6 sm:px-10 lg:px-16">

        {services_data.map((service, index) => (
          <div
            key={index}
            onClick={() => window.open(service.action, "_blank")}
            className="
              relative z-30 flex flex-col
              p-6
              w-full sm:w-[85%] md:w-[300px] lg:w-[340px]
              min-h-[220px] lg:h-[260px]
              bg-service_card_color
              cursor-pointer
              rounded-lg
              border border-transparent
              shadow-lg
              transition-all duration-300
              hover:scale-105 hover:border-navborder hover:shadow-xl
            "
          >
            <div className="flex flex-col justify-center gap-4 sm:gap-5 mx-2 sm:mx-4 lg:mx-6 my-4 sm:my-6">

              <div className="text-4xl sm:text-5xl">{service.svg}</div>

              <h3 className={`${orbitron.className} text-xl sm:text-2xl text-servicehead`}>
                {service.title}
              </h3>

              <p className={`${rajdhani.className} text-sm sm:text-base text-white/80`}>
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
