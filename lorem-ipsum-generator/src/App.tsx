import React from "react";
import Generator from "./components/Generator";

function App() {
  return (
    <div className="font-rubik">
      <div className="flex flex-col bg-gray-100 min-h-screen">
        <header className="bg-blue-200 text-blue-900 p-10 sm:px-20 ">
          <h2 className="text-2xl font-bold mb-4">Lorem Ipsum Generator</h2>
          <p className="text-sm">
            Lorem ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </header>
        <Generator />
        <footer className="fixed bottom-0 w-full bg-gray-200 py-4 text-center mt-10">
          <p className="text-gray-600">
            Built with 💙 by Nigar Safarova.
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;
