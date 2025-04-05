const RequestMeeting = ({ visible, onClose }) => {
    const handleOnClose = (e) => {
      if (e.target.id === "requestMN" || e.target.id === "requestBTN") {
        onClose();
      }
    };
  
    if (!visible) return null;
  
    const submitHandler = (e) => {
      e.preventDefault();
    };
  
    return (
      <section
        id="requestMN"
        onClick={handleOnClose}
        className="z-106 fixed left-0 top-0 w-screen h-screen  overflow-hidden px-7 pb-20 md:px-0"
      >
        <div className="z-107  w-full mx-auto p-7 border  shadow-lg rounded-sm  md:w-[40vw] lg:w-[40vw] md:mt-[11vh] bg-white">
          <div className="relative">
            <h1 className=" text-lg text-[#002c38] text-center font-bold p-1 w-full  ">
              REQUEST
            </h1>
            <div
              id="requestBTN"
              className="absolute top-[2px] right-2 flex items-center justify-center cursor-pointer text-white font-bold bg-red-500 p-2 w-8 h-8"
            >
              X
            </div>
          </div>
          <form className="" onSubmit={submitHandler}>
            <div className="w-full p-3 ">
              <input
                type="text"
                placeholder="Name"
                className="w-full  text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0  border focus:border-2   text-md px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-[#002c38] "
                required
              />
            </div>
            <div className="w-full p-3 ">
              <input
                type="phone"
                placeholder="Phone Number"
                className="w-full  text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0  border focus:border-2   text-md px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-[#002c38] "
                required
              />
            </div>
            <div className="w-full p-3 ">
              <input
                type="email"
                placeholder="Email"
                className="w-full  text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0  border focus:border-2   text-md px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-[#002c38] "
                required
              />
            </div>
  
            <div className="w-full p-3 ">
              <select
                required
                className="w-full rounded-md p-3 border placeholder:font-normal"
              >
                <option value="country">Country</option>
              </select>
            </div>
            <div className="w-full p-3 ">
              <select
                required
                className="w-full rounded-md p-3 border placeholder:font-normal"
              >
                <option value="Solution">Solution</option>
              </select>
            </div>
            <div className="flex items-center p-1 mb-1 space-x-3">
              <button
                type="submit"
                className="w-full text-center py-2 rounded bg-[#002c38] text-white hover:bg-green-dark focus:outline-none my-1 font-bold"
              >
                Send
              </button>
              <button
                type="reset"
                className="w-full text-center py-2 rounded bg-red-700 text-white hover:bg-green-dark focus:outline-none my-1 font-bold"
              >
                Clear
              </button>
            </div>
          </form>
        </div>
      </section>
    );
  };
  
  export default RequestMeeting;
  