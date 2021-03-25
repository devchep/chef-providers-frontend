import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter } from "react-router-dom";
import { createClient, dedupExchange, fetchExchange, Provider } from "urql";
import { Cache, cacheExchange, QueryInput } from "@urql/exchange-graphcache";
import { LoginMutation, MeDocument, MeQuery } from "./generated/graphql";

function updateQuery<Result, Query>(
  cache: Cache,
  queryInput: QueryInput,
  result: any,
  fn: (r: Result, q: Query) => Query
) {
  return cache.updateQuery(
    queryInput,
    (data) => fn(result, data as any) as any
  );
}

const graphqlClient = createClient({
  url: "http://localhost:4200/graphql",
  fetchOptions: {
    credentials: "include",
  },
  exchanges: [
    dedupExchange,
    cacheExchange({
      updates: {
        Mutation: {
          login: (_result, args, cache, info) => {
            updateQuery<LoginMutation, MeQuery>(
              cache,
              { query: MeDocument },
              _result,
              (result, query) => {
                if (result.login.errors) {
                  return query;
                } else {
                  return {
                    me: result.login.supplier,
                  };
                }
              }
            );
          },
          logout: (_result, args, cache, info) => {
            updateQuery<LoginMutation, MeQuery>(
              cache,
              { query: MeDocument },
              _result,
              () => ({
                me: null,
              })
            );
          },
        },
      },
    }),
    fetchExchange,
  ],
});

ReactDOM.render(
  <BrowserRouter>
    <Provider value={graphqlClient}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
