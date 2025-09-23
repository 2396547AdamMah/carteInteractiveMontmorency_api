import connectDB from "../util/database.js";

const db = await connectDB();
// console.log(db);

const getAllClasses = async (req, res, next) => {
    const query = "SELECT * FROM classes";

    const result = await db.query(query);
    res.status(200).json(result.rows);
}

const getClassByCode = async (req, res, next) => {
    let code = req.params.code;
    const query = `SELECT * FROM classes WHERE code = '${code}'`;

    const result = await db.query(query);
    res.status(200).json(result.rows);
}

const createClass = async (req,res, next) => {
    let code = req.body.code;
    const query = `INSERT INTO classes (id, code) VALUES (DEFAULT, '${code}');`;
    const result = await db.query(query);
    res.status(201).json(result);
}

export default {
    getAllClasses,
    getClassByCode,
    createClass
}