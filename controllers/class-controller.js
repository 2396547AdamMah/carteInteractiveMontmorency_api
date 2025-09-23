import connectDB from "../util/database.js";

const db = await connectDB();
// console.log(db);

const getAllClasses = async (req, res, next) => {
    const query = "SELECT * FROM classes";

    const result = await db.from("classes").select();
    res.status(200).json(result.data);
}

const getClassByCode = async (req, res, next) => {
    const result = await db.from("classes").select().eq("code",req.params.code);
    res.status(200).json(result.data);
}

const createClass = async (req,res, next) => {
    // let code = req.body.code;
    // const query = `INSERT INTO classes (id, code) VALUES (DEFAULT, '${code}');`;
    // const result = await db.query(query);
    res.status(200);
}

export default {
    getAllClasses,
    getClassByCode,
    createClass
}