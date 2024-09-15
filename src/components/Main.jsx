const Main = () => {
  return (
    <div className="bg-gray-50  mx-[55px] min-h-screen">
      {/* Hero Section */}
      <section className="bg-blue-900 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-2" id="aboutUS">
            About Us
          </h1>
          <p className="text-xl">
            Meet the team behind BrightWeb and learn about our mission and
            vision.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-gray-50" id="ourstory">
        <div className="container mx-auto px-8 lg:px-16">
          <h2 className="text-4xl font-bold mb-8 text-center text-gray-800">
            Our Story
          </h2>
          <p className="text-xl leading-relaxed text-gray-600 text-center max-w-3xl mx-auto">
            At <span className="text-green-700 font-semibold">BrightWeb</span>,
            we are dedicated to transforming the digital landscape with
            innovative and cutting-edge web solutions. Founded by two passionate
            software engineers from ALX Africa, our journey began with a shared
            vision of crafting impactful, user-centric websites. From our home
            base, we aim to deliver exceptional web experiences to clients
            across Europe, Canada, and beyond, pushing the boundaries of digital
            excellence.
          </p>
        </div>
      </section>

      {/* Who We Are */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-8 lg:px-16 text-center">
          <h2 className="text-4xl font-bold mb-8 text-gray-800">Who We Are</h2>
          <p className="text-xl leading-relaxed text-gray-600 max-w-2xl mx-auto">
            We are a dynamic duo of software engineers committed to excellence.
            With a strong foundation in modern web technologies and a passion
            for continuous learning, we blend technical expertise with creative
            flair to deliver impactful web solutions. Our mission is to help
            businesses stand out online with tailor-made websites that drive
            real results.
          </p>
        </div>
      </section>

      {/* Our Mission and Vision */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-8 lg:px-16">
          <div className="flex flex-col md:flex-row md:justify-between items-center gap-12">
            <div className="md:w-1/2 mb-8 md:mb-0 text-center md:text-left">
              <h2 className="text-4xl font-bold text-gray-800 mb-6">
                Our Mission
              </h2>
              <p className="text-xl leading-relaxed text-gray-600">
                Our mission is to empower businesses by delivering high-quality,
                innovative web solutions that enhance their online presence and
                achieve their digital goals. We believe in harnessing technology
                to create meaningful user experiences and drive success for our
                clients.
              </p>
            </div>
            <div className="md:w-1/2 text-center md:text-left">
              <h2 className="text-4xl font-bold text-gray-800 mb-6">
                Our Vision
              </h2>
              <p className="text-xl leading-relaxed text-gray-600">
                We envision a world where every business, regardless of size or
                location, can achieve its full potential through a powerful
                online presence. Our goal is to be the trusted partner that
                helps businesses navigate the digital landscape and stand out in
                a crowded marketplace.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold mb-12 text-center text-gray-800">
            Why Choose Us?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Expertise",
                description:
                  "With extensive experience in web development, we offer a deep understanding of the latest technologies and industry trends.",
              },
              {
                title: "Personalized Service",
                description:
                  "We take the time to understand your unique needs and tailor our solutions to meet your specific goals.",
              },
              {
                title: "Commitment to Quality",
                description:
                  "We are dedicated to delivering high-quality, reliable, and scalable web solutions that exceed expectations.",
              },
              {
                title: "Global Reach",
                description:
                  "Although we operate from home, our services are designed to cater to clients around the world, providing exceptional value regardless of location.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
              >
                <h3 className="text-xl font-semibold mb-4 text-gray-800 group-hover:text-green-500 transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet the Team */}
      {/* <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold mb-6 text-center">
            Meet the Team
          </h2>
          <div className="flex flex-col md:flex-row md:justify-between">
            <div className="md:w-1/2 mb-8 md:mb-0 text-center">
              <img
                src="path_to_your_photo"
                alt="[Your Name]"
                className="mx-auto rounded-full w-32 h-32 object-cover mb-4"
              />
              <h3 className="text-xl font-semibold">[Your Name]</h3>
              <p className="text-lg text-gray-700">
                Co-Founder & Lead Developer
              </p>
              <p className="text-gray-600">
                With a passion for coding and a knack for solving complex
                problems, [Your Name] brings a wealth of experience in web
                development and a commitment to creating exceptional user
                experiences.
              </p>
            </div>
            <div className="md:w-1/2 text-center">
              <img
                src="path_to_partner_photo"
                alt="[Partner’s Name]"
                className="mx-auto rounded-full w-32 h-32 object-cover mb-4"
              />
              <h3 className="text-xl font-semibold">[Partner’s Name]</h3>
              <p className="text-lg text-gray-700">
                Co-Founder & Creative Technologist
              </p>
              <p className="text-gray-600">
                [Partner’s Name] specializes in blending technology with
                creativity, ensuring that every project not only functions
                flawlessly but also looks stunning and engages users
                effectively.
              </p>
            </div>
          </div>
        </div>
      </section> */}

      {/* Contact Us */}
      <section className="bg-blue-900 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold mb-4">Let’s Connect</h2>
          <p className="text-lg mb-4">
            We’d love to hear from you! Whether you’re interested in our
            services, have a question, or just want to chat, feel free to reach
            out to us.
          </p>
          <a
            href="#contact"
            className="bg-white text-blue-900 px-6 py-3 rounded-full font-semibold"
          >
            Contact Us
          </a>
        </div>
      </section>
    </div>
  );
};

export default Main;
