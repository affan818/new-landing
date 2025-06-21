import { useState } from "react";
import emailjs from "emailjs-com";
function Button({ btnTxt: text = "Schedule your call now" }) {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    question1: "",
    question2: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", formData, "YOUR_USER_ID")
      .then(() => {
        alert("Form submitted successfully!");
        setShowForm(false);
        setFormData({
          name: "",
          email: "",
          date: "",
          question1: "",
          question2: "",
        });
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("Something went wrong. Please try again.");
      });
  };

  return (
    <>
      {/* CTA Button */}
      <button
        onClick={() => setShowForm(true)}
        className="px-4 sm:px-10 py-3 sm:py-4 text-lg sm:text-2xl bg-gradient-to-r from-yellow-700 to-yellow-400 text-white font-bold rounded-lg shadow-md hover:from-yellow-600 hover:to-yellow-300 hover:shadow-xl transition-all duration-300 animate-bounce"
      >
        {text}
      </button>

      {/* Popup Form */}
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 transition-opacity duration-300 px-4">
          <div className="bg-white p-6 sm:p-8 rounded-2xl w-full max-w-lg relative shadow-2xl transform transition-all duration-300 scale-95 animate-fade-in">
            {/* Close Button */}
            <button
              onClick={() => setShowForm(false)}
              className="absolute top-3 right-4 text-xl font-bold text-red-500 hover:text-red-600 transition"
            >
              ×
            </button>

            <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 text-green-700">
              Book Your Strategy Call
            </h2>

            <form onSubmit={sendEmail} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                required
              />
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                required
              />
              <textarea
                name="question1"
                placeholder="What is your current digital marketing strategy?"
                value={formData.question1}
                onChange={handleChange}
                rows="3"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                required
              />
              <textarea
                name="question2"
                placeholder="What goal do you want to achieve through digital marketing?"
                value={formData.question2}
                onChange={handleChange}
                rows="3"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                required
              />
              <button
                type="submit"
                className="w-full py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition duration-300 shadow-md"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default Button;
