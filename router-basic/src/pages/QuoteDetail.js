import { useParams, Route } from "react-router-dom";
import { Fragment } from "react/cjs/react.production.min";
import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";

const DUMMY_QUOTES = [
  { id: "q1", author: "Max", text: "Learning react is fun!" },
  { id: "q2", author: "Maximilian", text: "nothing to be seen." },
];

const QuoteDetail = () => {
  const params = useParams();
  const quote = DUMMY_QUOTES.find((item) => item.id === params.quoteId);

  if (!quote) {
    return <p>No quote found!!</p>;
  }

  return (
    <Fragment>
      <h1>Quote detail page</h1>
      <HighlightedQuote {...quote} />
      <Route path={`/quotes/${params.quoteId}/comments`}>
        <Comments />
      </Route>
    </Fragment>
  );
};

export default QuoteDetail;
