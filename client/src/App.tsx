import React, { useState } from "react";
import "./App.css";
import { ChatList, ChatForm } from "./components";

function App() {
    const [sender, setSender] = useState("");
    const [channelId, setChannelId] = useState(1);
    const [showChat, setShowChat] = useState(false);

    const handleInputSubmit = () => {
        // Check if both sender and channelId are entered
        if (sender && channelId) {
            setShowChat(true);
        }
    };

    return (
        <div className="App">
            {!showChat ? (
                <div>
                    <label>
                        Username:
                        <input
                            type="text"
                            value={sender}
                            onChange={(e) => setSender(e.target.value)}
                        />
                    </label>
                    <br />
                    <label>
                        Channel ID:
                        <input
                            type="number"
                            value={channelId}
                            onChange={(e) => setChannelId(parseInt(e.target.value))}
                        />
                    </label>
                    <br />
                    <button onClick={handleInputSubmit}>Submit</button>
                </div>
            ) : (
                <>
                    <ChatList channelId={channelId} />
                    <ChatForm channelId={channelId} sender={sender} />
                </>
            )}
        </div>
    );
}

export default App;
