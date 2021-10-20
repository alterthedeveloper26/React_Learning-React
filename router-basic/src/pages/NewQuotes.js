import QuoteForm from "../components/quotes/QuoteForm";
import { useHistory } from "react-router";

const NewQuotes = () => {
  const history = useHistory();

  const addQuoteHandler = (quoteData) => {
    console.log(quoteData);

    //replace => can not go back
    history.push("/quotes");
  };

  return <QuoteForm onAddQuote={addQuoteHandler} />;
};

export default NewQuotes;
