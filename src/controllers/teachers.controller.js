import { pool } from "../db.js";

const table = "teacher";

const getTeachers = async (req, res) => {
  const [rows] = await pool.query(`SELECT * FROM ${table}`);
  return rows;
};

const createTeacher = async (req, res) => {
  const { cedula, fullName, phoneNumber, address, email } = req.body;
  const [rows] = await pool.query(`INSERT INTO ${table} (cedula, fullName, phoneNumber, address, email) VALUES (?, ?, ?, ?, ?)`, [cedula, fullName, phoneNumber, address, email]);

  return {
    id: rows.insertId,
    cedula,
    fullName,
    phoneNumber,
    address,
    email
  };
};

const getTeacherById = async (req, res) => {
  const { id } = req.params;
  const [rows] = await pool.query(`SELECT * FROM ${table} WHERE id = ?`, [id]);

  if (rows.length <= 0) return 'Teacher not found'

  return rows[0];
};

const updateTeacher = async (req, res) => {
  const { id } = req.params;
  const { cedula, fullName, phoneNumber, address, email } = req.body;
  const result = await pool.query(`UPDATE ${table} SET cedula = IFNULL(?, cedula), fullName = IFNULL(?, fullName), phoneNumber = IFNULL(?, phoneNumber), address = IFNULL(?, address), email = IFNULL(?, email) WHERE id = ?`, [cedula, fullName, phoneNumber, address, email, id]);

  if (result.affectedRows <= 0) return 'Teacher not found'

  const [rows] = await pool.query(`SELECT * FROM ${table} WHERE id = ?`, [id]);

  return rows;
};

const deleteTeacher = async (req, res) => {
  const { id } = req.params;
  const [rows] = await pool.query(`DELETE FROM ${table} WHERE id =?`, [id]);

  if (rows.affectedRows <= 0) return 'Teacher not found'
  return 'Teacher deleted successfully';
};

export {
  getTeachers,
  createTeacher,
  getTeacherById,
  updateTeacher,
  deleteTeacher
}