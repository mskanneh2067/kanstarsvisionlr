import { BiX } from "react-icons/bi";

const RequestQuote = () => {
  return (
    <>
      <div className="z-107 absolute top-0 left-0 w-full h-full  flex flex-col">
        <div className=" container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
          <form className="z-107 relative bg-white px-6 py-8 rounded shadow-md text-black w-full  ">
            <BiX
              className="absolute top-0 right-0 cursor-pointer text-[27px]   text-white bg-red-600"
              onClick={close}
            />
            <h1 className=" mb-8 text-[14px] lg:text-3xl text-center font-bold ">
              Request for Quote
            </h1>

            <input
              type="text"
              className=" block border border-grey-light w-full p-2 rounded mb-1 placeholder:text-[12px] lg:placeholder:text-[16px] lg:p-3 lg:mb-4"
              placeholder="Company or Individual Name"
              required
            />
            <input
              type="email"
              className="block border border-grey-light w-full p-2 rounded mb-1 placeholder:text-[12px] lg:placeholder:text-[16px] lg:p-3 lg:mb-4"
              placeholder="Work Email"
              required
            />
            <input
              type="phone"
              className=" block border border-grey-light w-full p-2 rounded mb-1 placeholder:text-[12px] lg:placeholder:text-[16px] lg:p-3 lg:mb-4"
              placeholder="Phone"
              required
            />
            <input
              type="text"
              className="block border border-grey-light w-full p-2 rounded mb-1 placeholder:text-[12px] lg:placeholder:text-[16px] lg:p-3 lg:mb-4"
              placeholder="Job Title"
              required
            />

            <label
              htmlFor="o365"
              className="block font-bold mb-2 text-sm  lg:text-lg xl:text-lg  text-center "
            >
              Solution of Interest
            </label>

            <div className="flex items-center p-1 mb-1 space-x-3">
              <button
                type="submit"
                className="w-full text-center py-2 rounded bg-green-700 text-white hover:bg-green-dark focus:outline-none my-1"
              >
                Send
              </button>
              <button
                type="reset"
                className="w-full text-center py-2 rounded bg-red-700 text-white hover:bg-green-dark focus:outline-none my-1"
              >
                Clear
              </button>
            </div>
            <div className="text-center text-[12px] lg:text-sm text-grey-dark mt-4">
              By sending this form, you agree to 1Lives{" "}
              <a
                className="no-underline border-b border-grey-dark text-grey-dark"
                href="#"
              >
                Terms of Service
              </a>{" "}
              and{" "}
              <a
                className="no-underline border-b border-grey-dark text-grey-dark"
                href="#"
              >
                Privacy Policy
              </a>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default RequestQuote;
