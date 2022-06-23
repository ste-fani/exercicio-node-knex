import express from "express";
import { deleteUserById, getUsers, postUser, putUser } from "./endpoints";

const app = express();

app.use(express.json());

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});

app.get("/", getUsers);

app.put("/", putUser);

app.post("/:id", postUser);

app.delete("/:id", deleteUserById);
