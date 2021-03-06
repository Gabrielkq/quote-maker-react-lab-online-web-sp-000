// TODO: Create action creators as defined in tests

// import quotes from "../reducers/quotes"



export const addQuote = (quote) => {
    console.log("addQuote action:", quote)
    return { 
        type: 'ADD_QUOTE',
        quote: {...quote, votes: 0}  
       } 
    }


export const removeQuote = (quoteId) => {
    return {
        type: 'REMOVE_QUOTE',
        quoteId
    }
}

export const upvoteQuote = (quoteId) => {
    return {
        type: 'UPVOTE_QUOTE',
        quoteId
    }
}


export const downvoteQuote = (quoteId) => {
    return {
        type: 'DOWNVOTE_QUOTE',
        quoteId
    }
}