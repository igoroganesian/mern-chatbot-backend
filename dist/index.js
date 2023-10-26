import app from "./app.js";
import connectToDatabase from "./db/connection.js";
//connection & listeners
const PORT = process.env.PORT || 5002;
console.log("Initiating connection...");
connectToDatabase()
    .then(() => {
    app.listen(PORT, () => console.log("Server Up & Connected To Database"));
})
    .catch((err) => console.log(err));
//# sourceMappingURL=index.js.map