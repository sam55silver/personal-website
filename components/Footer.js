import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

function Footer() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const inputClasses =
    "px-2 py-2 rounded hover:shadow-md focus:outline-none focus:shadow-md bg-very-dark-base";

  const formSubmit = (e) => {
    e.preventDefault();
    const newMessage = { firstName, lastName, email, message };

    const sendMessage = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(newMessage);
        // setFirstName("");
        // setLastName("");
        // setEmail("");
        // setMessage("");
      }, 5000);
    });

    toast.promise(
      sendMessage,
      {
        loading: "Sending message...",
        success: (data) => `Message Sent!`,
        error: (err) => `There was an error! - ${err.toString()}`,
      },
      {
        style: {
          width: "250px",
          height: "80px",
          fontSize: "20px",
        },
        success: {
          duration: 3000,
          icon: "🚀",
        },
      }
    );
  };

  return (
    <footer className="text-white my-10">
      <Toaster />
      <div className="flex flex-col justify-center text-center items-center gap-5 my-10 mt-20">
        <hr className="w-3/4 border-solid border-gray-200 border-2 rounded" />
        <button
          onClick={scrollToTop}
          className="text-5xl hover:cursor-pointer my-10"
        >
          ☝️
        </button>
        <p className="text-2xl pb-5">👋 Like what you see? lets talk!</p>
        <form
          onSubmit={formSubmit}
          className="grid grid-rows-8 justify-start text-start my-5 text-gray-200 gap-4"
        >
          <div className="grid grid-cols-2 gap-5">
            <label>First Name</label>
            <label>Last Name</label>
          </div>
          <div className="grid grid-cols-2 gap-5">
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className={inputClasses}
            />
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className={inputClasses}
            />
          </div>
          <label>Email</label>
          <input
            required
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={inputClasses}
          />
          <label>Message</label>
          <textarea
            required
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className={inputClasses}
          />
          <div className="flex justify-center items-center mt-8">
            <button
              type="submit"
              className="bg-primary rounded w-36 py-2 px-5 text-lg m-0 active:bg-darker-primary"
            >
              Send
            </button>
          </div>
        </form>
      </div>
      <div className="bg-darker-base text-center absolute w-full p-2">
        <span>© 2023 by Sam Silver.</span>
      </div>
    </footer>
  );
}

export default Footer;
