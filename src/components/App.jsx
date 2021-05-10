import React from "react";
import Entry from "./Entry";
import emojiPedias from "../emojipedia";

function createEntry(emojiPedia) {
  return (
    <Entry
      key={emojiPedia.id}
      emoji={emojiPedia.emoji}
      name={emojiPedia.name}
      meaning={emojiPedia.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">{emojiPedias.map(createEntry)}</dl>
    </div>
  );
}

export default App;

//1. Create Entry Component
//2. Create props to replace hardcoded data
//3. Import the emojipedia contact
//4. Map through the emojipedia array and render Entry components
