"use client";
import { useState, useEffect } from "react";
import { FiSend } from "react-icons/fi";
import SocialMediaLinks from "./SocialMediaLinks";

const ReviewModel = ({ toggler, setToggler }) => {
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [occupation, setOccupation] = useState("");
  const [content, setContent] = useState("");
  const [links, setLinks] = useState([
    {
      id: 1,
      value: "",
    },
  ]);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    // console.log(name, occupation, content, links);
    const data = {
      reviewContent: content,
      name,
      occupation,
      socialLinks: links.map((link) => link.value),
    };
    console.log(JSON.stringify(data));
    setLoading(true);
    fetch("http://localhost:5757/api/reviews/add-review", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          setLoading(false);
             setName("");
             setOccupation("");
             setContent("");
             setLinks([{ id: 1, value: "" }]);
        }
         
      })
      .catch((error) => {
        setLoading(false);
        
        console.error("Error submitting review:", error);
      });
  };

  return toggler ? (
    <div className="fixed inset-0 z-10 overflow-y-auto">
      <div
        className="fixed inset-0 w-full h-full bg-black opacity-20"
        onClick={() => setToggler(!toggler)}
      ></div>
      <div className="flex items-center px-4 my-16 py-8">
        <div className="relative w-full max-w-xl p-4 mx-auto bg-white rounded">
          <div className="flex justify-end">
            <button
              className="p-2 text-gray-400  hover:bg-gray-100"
              onClick={() => setToggler(!toggler)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 mx-auto"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
          <div className="max-w-4xl px-6 mx-auto bg-white dark:bg-gray-800">
            <h2 className="py-6 text-lg text-center font-semibold text-gray-700 capitalize dark:text-white">
              🙏🏿 Heartfelt Gratitude for Your Invaluable Review! 🎉
            </h2>

            <form onSubmit={handleOnSubmit}>
              <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                <div>
                  <label
                    className="block mb-2 text-gray-700 dark:text-white"
                    htmlFor="username"
                  >
                    Your Name
                  </label>
                  <input
                    onChange={(e) => setName(e.target.value)}
                    id="username"
                    type="text"
                    placeholder="e.g John Doe"
                    className="block w-full px-4 py-2 mt-2 text-gray-700 rounded-md bg-white border border-gray-200  dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-gray-900 focus:ring-gray-900 focus:ring-opacity-20 dark:focus:border-gray-900 focus:outline-none focus:ring"
                  />
                </div>

                <div>
                  <label
                    className="block mb-2 text-gray-700 dark:text-white"
                    htmlFor="emailAddress"
                  >
                    Your Occupation
                  </label>
                  <input
                    id="emailAddress"
                    type="text"
                    onChange={(e) => setOccupation(e.target.value)}
                    placeholder="e.g Senior developer"
                    className="block w-full px-4 py-2 mt-2 rounded-md text-gray-700 bg-white border border-gray-200  dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-gray-900 focus:ring-gray-900 focus:ring-opacity-20 dark:focus:border-gray-900 focus:outline-none focus:ring"
                  />
                </div>

                <div className="col-span-2">
                  <label
                    htmlFor="message"
                    className="block mb-2 text-gray-700 dark:text-white"
                  >
                    Your review message
                  </label>
                  <textarea
                    id="message"
                    rows="5"
                    onChange={(e) => setContent(e.target.value)}
                    className="resize-none block w-full px-4 py-2 mt-2 rounded-md text-gray-700 bg-white border border-gray-200  dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-gray-900 focus:ring-gray-900 focus:ring-opacity-20 dark:focus:border-gray-900 focus:outline-none focus:ring"
                    placeholder="Type here ..."
                  ></textarea>
                </div>

                <div className="col-span-2">
                  <label
                    className="text-gray-700 dark:text-gray-200"
                    htmlFor="passwordConfirmation"
                  >
                    if you don't mind sharing social media link. e.g Linkdin{" "}
                  </label>
                  <SocialMediaLinks links={links} setLinks={setLinks} />
                </div>
              </div>

              <div className="mt-6 flex ">
                <div className="my-3 font-montserrat">
                  <button
                    type="submit"
                    className="group rounded-sm flex items-center justify-between gap-3 border border-black dark:border-gray-100 bg-black px-8 py-3 transition-colors hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none dark:bg-white dark:text-black"
                  >
                    <span className="font-medium text-sm  text-white dark:text-black transition-colors group-hover:text-black group-active:text-black dark:group-hover:text-white dark:group-active:text-white">
                      Submit Now
                    </span>

                    <span className="shrink-0 rounded-full  text-white dark:text-black group-hover:text-black dark:group-hover:text-white  group-active:text-black  dark:group-active:text-white">
                      {loading ? (
                        <div>l</div>
                      ) : (
                        <FiSend className="group-active:text-black text-xl dark:group-active:text-white" />
                      )}
                    </span>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  ) : (
    ""
  );
};
export default ReviewModel;
