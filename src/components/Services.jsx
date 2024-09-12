import work from "../assets/work2.jpg";

const Services = () => {
  return (
    <div
      id="services"
      className="bg-white mx-[55px] rounded-lg shadow-lg transition-shadow duration-300 hover:shadow-xl"
    >
      <div className="flex flex-col md:flex-row items-center gap-8 md:gap-20 mt-[80px] p-6 md:p-12">
        <img
          src={work}
          alt="Our Work"
          className="rounded-full w-[280px] h-[280px] md:w-[380px] md:h-[380px] transition-transform duration-300 hover:scale-105 hover:rotate-1 shadow-md"
        />
        <div className="text-center md:text-left md:ml-[-55px]">
          <h2 className="text-3xl text-orange-950 drop-shadow mt-6 font-semibold transition-transform duration-300 hover:translate-x-1">
            We Build Digital Solutions for You!
          </h2>
          <p className="mt-2 mb-6 text-[20px] text-gray-700">
            <span className="text-3xl text-orange-600 italic">Services</span> to
            Elevate Your Online Presence!
          </p>
          <ul className="mt-8 text-[18px] mb-6 space-y-4">
            {[
              {
                title: "Web Development:",
                description:
                  "Custom websites tailored to your brand's needs and goals.",
              },
              {
                title: "SEO Optimization:",
                description:
                  "Enhance your website's visibility and rank higher on search engines.",
              },
              {
                title: "Email Marketing:",
                description:
                  "Engage your audience and drive conversions with effective email campaigns.",
              },
              {
                title: "E-Commerce Solutions:",
                description:
                  "Build and optimize your online store for better sales and customer experience.",
              },
              {
                title: "Digital Strategy:",
                description:
                  "Create a comprehensive plan to grow your business online.",
              },
            ].map((item, index) => (
              <li
                key={index}
                className="list-disc ml-4 transition-transform duration-300 hover:translate-x-2"
              >
                <span className="drop-shadow text-[20px] font-semibold text-green-950 hover:text-green-700 transition-colors duration-300">
                  {item.title}
                </span>{" "}
                {item.description}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Services;
