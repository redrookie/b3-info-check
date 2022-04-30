import express from "express";

const PORT = process.env.PORT || 3001;

const app = express();

app.get("/api", (req, res) => {
	console.log("req", req);
	res.json({ message: "Hello from server!" });
});

app.listen(PORT, () => {
	console.log(`Alto e claro na porta ${PORT}`);
});
