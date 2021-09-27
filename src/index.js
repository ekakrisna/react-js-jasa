import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import store from "./store";
import DocumentMeta from "react-document-meta";

import "bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";

const meta = {
  title: "Some Meta Title",
  description: "I am a description, and I can create multiple tags",
  canonical: "http://example.com/path/to/page",
  meta: {
    charset: "utf-8",
    name: {
      keywords: "react,meta,document,html,tags",
    },
  },
};

ReactDOM.render(
  <DocumentMeta {...meta}>
    <Provider store={store}>
      <App />
    </Provider>
    ,
  </DocumentMeta>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
