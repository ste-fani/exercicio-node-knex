import connection from "./connection";

export const insertUser = async (id : number, nome : string, email : string) : Promise<any> => {
  await connection("usuarios").insert({
    id,
    nome,
    email,
  });
};

export const selectUsers = async () : Promise<any> => {
  const result = await connection("usuarios").select("*");
  return result;
};

export const updateUser = async (id : number, nome? : string, email? : string) : Promise<any> => {
  if (nome) {
    await connection("usuarios")
      .update({
        nome,
      })
      .where({
        id,
      });
  }
  if (email) {
    await connection("usuarios")
      .update({
        email,
      })
      .where({
        id,
      });
  }
};

export const deleteUser = async (id : number) : Promise<void> => {
  await connection("usuarios").delete().where({ id });
};
