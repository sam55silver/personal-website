const fancyInputs = (isMessage) => {
  let inputClasses =
    "px-2 py-2 rounded hover:shadow-md focus:outline-none focus:shadow-md bg-very-dark-base";

  return isMessage ? (
    <textarea className={inputClasses + " "} />
  ) : (
    <input className={inputClasses} />
  );
};

function Footer() {
  return (
    <>
      <div className="flex flex-col text-white justify-center text-center items-center gap-5 my-10">
        <span className="text-5xl py-5">👋 Like what you see? lets talk!</span>
        <div className="grid grid-rows-8 justify-start text-start my-5 text-gray-200 gap-4">
          <div className="grid grid-cols-2 gap-5">
            <span>First Name</span>
            <span>Last Name</span>
          </div>
          <div className="grid grid-cols-2 gap-5">
            {fancyInputs()}
            {fancyInputs()}
          </div>
          <span>Email</span>
          {fancyInputs()}
          <span>Message</span>
          {fancyInputs(true)}
          <div className="flex justify-center items-center mt-8">
            <button className="bg-primary rounded w-36 py-2 px-5 text-lg m-0 active:bg-darker-primary">
              Submit
            </button>
          </div>
        </div>
      </div>
      <div className="bg-darker-base text-center absolute w-full p-2">
        <span>© 2023 by Sam Silver.</span>
      </div>
    </>
  );
}

export default Footer;
