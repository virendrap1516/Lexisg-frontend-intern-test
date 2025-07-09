import React from "react";

function ChatBox({ query, setQuery, loading, handleSubmit }) {
  return (
    <div className="mb-6 p-6 rounded-3xl shadow-xl bg-white/60 backdrop-blur-md border border-gray-200">
      <label htmlFor="chatInput" className="block text-xl font-semibold text-gray-800 mb-2">
        Ask Your Legal Query
      </label>
      <textarea
        id="chatInput"
        className="w-full p-4 rounded-2xl border border-gray-300 bg-white text-gray-800 shadow-inner resize-none focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300"
        rows={4}
        placeholder="Type your legal question here..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      ></textarea>
      <div className="flex justify-end mt-4">
        <button
          onClick={handleSubmit}
          disabled={loading || !query.trim()}
          className={`px-6 py-3 rounded-full font-semibold text-white transition-all duration-300
            ${loading || !query.trim()
              ? "bg-gradient-to-r from-blue-300 to-blue-500 cursor-not-allowed opacity-50"
              : "bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-indigo-600 hover:to-blue-600 shadow-md hover:shadow-lg"
            }`}
        >
          {loading ? (
            <span className="flex items-center space-x-2">
              <svg
                className="animate-spin h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 00-8 8h4z"
                ></path>
              </svg>
              <span>Processing...</span>
            </span>
          ) : (
            "Submit"
          )}
        </button>
      </div>
    </div>
  );
}

export default ChatBox;
