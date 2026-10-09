import { createContext, useState } from "react";
import runChat from "../config/gemini";

export const Context = createContext();

const ContextProvider = (props)=>{

    const[input, setInput] = useState("");
    const[recentPrompt, setRecentPrompt] = useState("");
    const[prevPrompts, setPrevPrompts] = useState([]);
    const[showResult, setShowResult] = useState(false);
    const[loading, setLoading] = useState(false);
    const[resultData, setResultData] = useState("");

    const delayPara =(index, nextWord)=>{
        setTimeout(function(){
            setResultData(prev=>prev+nextWord)
        },75*index)
    }



const onSent = async (prompt) => {
    const message = (prompt ?? input).trim();

    if (!message) return;

    setResultData("");
    setRecentPrompt(message);
    setPrevPrompts(prev => [...prev, message]);
    setShowResult(true);
    setLoading(true);
    setInput("");

    try {
        const response = await runChat(message);

        if (!response) {
            return; // Keep loading if there is no response
        }

        const words = response.split(" ");

        for (let i = 0; i < words.length; i++) {
            setResultData(prev =>
                prev + (i === 0 ? "" : " ") + words[i]
            );

            await new Promise(resolve => setTimeout(resolve, 75));
        }

        setLoading(false);
    } catch (error) {
        console.error("Gemini API error:", error);
        // Keep loading. Do not show an error message.
    }
};

    const contextValue = {
        prevPrompts,
        setPrevPrompts,
        onSent,
        setRecentPrompt,
        recentPrompt,
        showResult,
        loading,
        resultData,
        input,
        setInput,
    }
    return(
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    )
}

export default ContextProvider;