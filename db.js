import mysql from "mysql2/promise"

const db = await mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "wesley",
    database: "keuangan"
})

console.log("✅ Database connected!")

export default db