const SuccessAlert = ({ message, status }) => {
  return (
    <>
      {status === 200 ? (
        <div className="mt-12 mx-4 px-4 rounded-md border-l-4 border-green-500 bg-green-50 md:max-w-2xl md:mx-auto md:px-8">
          <div className="flex justify-between ">
            <div className="flex">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 rounded-full text-green-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  {/* SVG path for success icon */}
                </svg>
              </div>
              <div className="self-center ml-3">
                <span className="text-green-600 font-semibold">Success</span>
                <p className="text-green-600 mt-1">{message}</p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="mt-12 mx-4 px-4 rounded-md border-l-4 border-red-500 bg-red-50 md:max-w-2xl md:mx-auto md:px-8">
          <div className="flex justify-between ">
            <div className="flex">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-red-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  {/* SVG path for error icon */}
                </svg>
              </div>
              <div className="self-center ml-3">
                <span className="text-red-600 font-semibold">Error</span>
                <p className="text-red-600 mt-1">{message}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SuccessAlert;
