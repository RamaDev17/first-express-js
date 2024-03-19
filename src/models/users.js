import dbPool from "../config/database.js";

const getAllUsers = async () => {
  const [rows] = await dbPool.query("SELECT * FROM users");
  return rows;
};

const postUser = async (body, fileName) => {
  const [rows] = await dbPool.query(
    `INSERT INTO users (name, email, address, image) VALUES('${body.name}', '${body.email}', '${body.address}', '${fileName}')`
  );
  return rows;
};

const detailUser = async (id) => {
  const [rows] = await dbPool.query(`select * from users where id = ${id}`);
  return rows;
};

const updateUser = async (id, body) => {
  const [rows] = await dbPool.query(`UPDATE users SET ? WHERE id = ?`, [
    body,
    id,
  ]);
  return rows;
};

const deleteUser = async (id) => {
  const [rows] = await dbPool.query(`DELETE FROM users WHERE id = ${id}`);
  return rows;
};

export { getAllUsers, postUser, detailUser, updateUser, deleteUser };
