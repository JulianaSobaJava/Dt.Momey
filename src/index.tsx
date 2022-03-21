import ReactDOM from "react-dom";
import { createServer, Model } from "miragejs";

import App from "./App";

createServer({
  models: {
    transaction: Model,
  },
  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: "Freelance de Website",
          type: "deposit",
          category: "Development",
          amount: 200,
          createdAt: new Date("2021-01-13 09:02:00"),
        },
        {
          id: 2,
          title: "Compra de setUp",
          type: "withdraw",
          category: "Work",
          amount: 50,
          createdAt: new Date("2022-03-14 12:09:30"),
        },
      ],
    });
  },

  routes() {
    this.namespace = "api";

    this.get("/transactions", () => {
      return this.schema.all("transaction");
    });

    this.post("/transactions", (schema, request) => {
      const data = JSON.parse(request.requestBody);

      console.log("data", data);

      return schema.create("transaction", data);
    });
  },
});
ReactDOM.render(<App />, document.getElementById("root"));
