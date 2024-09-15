import { useNavigate } from "react-router-dom";

const Contact = () => {
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent page reload

    const form = event.target;
    const formData = new FormData(form);

    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData).toString(),
      });

      // Redirect after submission
      navigate("/thank-you");
    } catch (error) {
      alert("Error submitting form: " + error.message);
    }
  };

  return (
    <div id="contact" className="bg-white ml-[55px] mr-[55px] mt-10 rounded-lg">
      <div className="flex flex-col p-10">
        <div className="text-3xl mt-6 font-semibold text-green-900">
          Contact Us
        </div>
        <form
          name="contact"
          method="POST"
          data-netlify="true"
          onSubmit={handleSubmit}
        >
          <input type="hidden" name="form-name" value="contact" />
          <div className="flex flex-col gap-4">
            <label htmlFor="name" className="text-[18px] mt-4 text-green-950">
              Name
            </label>
            <input
              type="text"
              className="mb-4 outline-none border-2 p-2 border-gray-500 rounded-md focus:ring focus:border-green-800"
              required
              name="name"
              id="name"
            />
          </div>
          <div className="flex flex-col gap-4">
            <label htmlFor="no" className="text-[18px] text-green-950">
              Mobile No
            </label>
            <input
              type="number"
              className="mb-4 outline-none border-2 p-2 border-gray-500 rounded-md focus:ring focus:border-green-800"
              required
              name="no"
              id="no"
            />
          </div>
          <div className="flex flex-col gap-4">
            <label htmlFor="email" className="text-[18px] text-green-950">
              Email Id
            </label>
            <input
              type="email"
              className="mb-4 outline-none border-2 p-2 border-gray-500 rounded-md focus:ring focus:border-green-800"
              required
              name="email"
              id="email"
            />
          </div>
          <div className="flex flex-col gap-4">
            <label htmlFor="text" className="text-[18px] text-green-950">
              Feedback (If any)
            </label>
            <textarea
              name="text"
              className="mb-4 outline-none border-2 p-2 border-gray-500 rounded-md h-[105px] focus:ring focus:border-green-800"
              id="text"
            ></textarea>
          </div>
          <div>
            <button
              type="submit"
              className="border-green-800 text text-xl text-green-800 border-2 p-[8px] pl-[25px] pr-[25px] rounded-md hover:bg-green-800 hover:text-white hover:transition-all delay-75 mb-5 w-full"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
