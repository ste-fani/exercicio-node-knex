import { Request, Response } from "express";
import { deleteUser, insertUser, selectUsers, updateUser } from "./database";

export const putUser = async (req: Request, res: Response) => {
  try {
    const { nome, email } = req.body;
    if (!nome) {
      res.status(400);
      throw new Error("Nome inválido");
    }
    if (!email) {
      res.status(400);
      throw new Error("Email inválido");
    }

    const id: number = Math.floor(Math.random() * 100);

    await insertUser(id, nome, email);
    res.status(200).send("Usuário criado.");
  } catch (error: any) {
    res.status(400).send(error.message || error.sqlmessage);
  }
};

export const getUsers = async (req: Request, res: Response) => {
  try {
    const result = await selectUsers();
    res.status(200).send(result);
  } catch (error: any) {
    res.status(400).send(error.sqlmessage);
  }
};

export const postUser = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const { nome, email } = req.body;
    if (nome === "" || email === "") {
      res.status(400);
      throw new Error("Preencha o campo solicitado.");
    }

    await updateUser(id, nome, email);
    res.status(200).send("Usuário atualizado.");
  } catch (error: any) {
    res.status(400).send(error.message || error.sqlmessage);
  }
};

export const deleteUserById = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    await deleteUser(id);
    res.status(200).send("Usuário deletado.");
  } catch (error: any) {
    res.status(400).send(error.sqlmessage);
  }
};
