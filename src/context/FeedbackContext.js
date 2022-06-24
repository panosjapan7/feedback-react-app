import { createContext, useState } from "react";
import {v4 as uuidv4} from "uuid";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
    const [feedback, setFeedback] = useState([{
        id: 1,
        text: "This item is from context",
        rating: 10,
    },
    {
        id: 2,
        text: "This item is from context",
        rating: 9,
    },
    {
        id: 3,
        text: "This item is from context",
        rating: 7,
    },
    ]);

    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false,
    });

    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4();
        setFeedback([newFeedback, ...feedback]);
    }

    const deleteFeedback = (id) => {
        if (window.confirm("Are you sure you want to delete this?")) {
            setFeedback(feedback.filter((item) => item.id !== id))
        }
    }

    const editFeedback = (item) => {
        setFeedbackEdit({
            item,
            edit: true,
        })
    }

    return <FeedbackContext.Provider value={{feedback, deleteFeedback, addFeedback, editFeedback}}>
            {children}
        </FeedbackContext.Provider>
}

export default FeedbackContext;