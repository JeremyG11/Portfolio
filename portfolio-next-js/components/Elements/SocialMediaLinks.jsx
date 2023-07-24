import React from "react";

function SocialMediaLinks({ links, setLinks }) {
  const handleAddField = (e) => {
    e.preventDefault();
    const newId = links.length + 1;
    setLinks([...links, { id: newId, value: "" }]);
  };

  const handleInputChange = (id, event) => {
    const updatedLinks = links.map((link) =>
      link.id === id ? { ...link, value: event.target.value } : link
    );
    setLinks(updatedLinks);
  };

  return (
    <div className="flex items-center  ">
      <div className="pr-2 w-[90%] ">
        {links.map((link) => (
          <div key={link.id} className="col-span-2">
            <span className="flex items-center justify-between max-w-xl">
              <input
                type="text"
                value={link.value}
                onChange={(e) => handleInputChange(link.id, e)}
                placeholder="e.g https://www.linkedin.com/in/gat..."
                className="block w-11/12 px-4 py-2 mt-2  text-gray-700 bg-white border rounded-md border-gray-200 focus:border-gray-900 focus:ring-gray-900 focus:ring-opacity-20 focus:outline-none focus:ring"
              />
              {link.id === links.length && (
                <button
                  onClick={handleAddField}
                  className="w-10 -mr-3 h-10 align-bottom inline-block mt-2 rounded-xl border border-gray-950 bg-gray-950 p-2 text-white hover:bg-transparent hover:text-gray-950 focus:outline-none focus:ring active:text-gray-950"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 4.5v15m7.5-7.5h-15"
                    />
                  </svg>
                </button>
              )}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SocialMediaLinks;
