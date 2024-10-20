import { useEffect, useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";

const GenerateChat = () => {
  const [generatedContent, setGeneratedContent] = useState("");
  const [prompt, setPrompt] = useState("");
  const [loader, setLoader] = useState(false);

  const generate = async () => {
    setLoader(true);
    try {
      const genAI = new GoogleGenerativeAI(
        "AIzaSyDceu5AvB3WQPA-Jip9FzX2fPZnUjQMGJw"
      );
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
      const result = await model.generateContent(prompt);
      const responseText = result.response.text(); // Corrected to await the response
      setGeneratedContent(responseText); // Save the result in state
    } catch (error) {
      console.error("Error generating content:", error);
    }
    setLoader(false);
  };

  const handleChange = (e) => {
    e.preventDefault();
    setPrompt(e.target.value);
  };

  return (
    <div className="w-[450px] mx-auto p-4 bg-gray-100 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold text-center mb-4">
        Generate Story
      </h2>
      <div className="flex flex-col space-y-4">
        {/* Input for prompt */}
        <input
          type="text"
          placeholder="Write your prompt here..."
          className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={handleChange}
          value={prompt}
        />

        {/* Generate Button */}
        <button
          onClick={generate}
          className="w-full bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-200">
          Generate Story
        </button>

        {/* Display Generated Content */}
        <div className="bg-white w-full p-4 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-2">Generated Story:</h3>
          {loader ? (
            <div className="loading loading-spinner"></div>
          ) : (
            <p className="w-full text-gray-700">
              {generatedContent || "Hi there, How may I help you.."}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default GenerateChat;
