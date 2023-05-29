import { createContext, useReducer } from "react";
import QuoteReducer from "./QuoteReducer";

const QuoteContext = createContext();

export const QuoteProvider = ({ children }) => {
  const initialState = {
    quote: {
      _id: "OSaopvW0IUd",
      content: "The more you know yourself, the more you forgive yourself.",
      author: "Confucius",
      tags: ["wisdom"],
      authorSlug: "confucius",
      length: 58,
      dateAdded: "2020-03-11",
      dateModified: "2022-07-04",
    },
  };

  const [state, dispatch] = useReducer(QuoteReducer, initialState);

  return (
    <QuoteContext.Provider
      value={{
        ...state,
        dispatch,
      }}
    >
      {children}
    </QuoteContext.Provider>
  );
};

export default QuoteContext;
