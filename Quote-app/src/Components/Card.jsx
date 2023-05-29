import React, { useContext, useEffect } from 'react'
import QuoteContext from '../Context/QuoteContext'
import { getQuote } from '../Context/QuoteAction'

const Card = () => {

  const { quote , dispatch} = useContext(QuoteContext)

  const handleClick = async () => {
    const data  = await getQuote();
    dispatch({
      type : "GET_DATA",
      payload : data,
    });
  };

  useEffect(()=>{
    handleClick();
  }, [])

  return (
    <div className="card">
    <div className="card-info">
        <div className="card-3">
            <p className="text">{quote.content}</p>
            <h5 className="title">{quote.author}</h5>
        </div>
        <div className="card4">
            <span className="badge text-bg-primary rounded-0">{quote.tags[0]}</span>
            <span className="badge text-bg-primary rounded-0">{quote.tags[1]}</span>
        </div>
        <span className="badge text-bg-primary rounded-0"></span>
        <button onClick={handleClick}>Get More Thought</button>
    </div>
  </div>
  )
}

export default Card