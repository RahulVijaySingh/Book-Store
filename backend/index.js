// import express from "express"

// const app = express()

// app.listen(8800, () => {
//     console.log('connected to Database')
// })





// import express from "express"
// import mysql from "mysql"

// const app = express()

// const db = mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     password: "Rvs@836728",
//     database: "book_store"
// }
// )

// app.get("/", (req, res) => {
//     res.json("Hello this in backend")
// })

// app.get("/books", (req, res) => {
//     const q = "SELECT * FROM BOOKS"
//     db.query(q, (err, data) => {
//         if (err) return res.json(err)
//         return res.json(data)
//     })
// })

// app.post("/books", (req, res) => {
//     const q = "insert into books (`title`,`des`,`cover`) values (?)"
//     const values = ["ttile from backend",
//      "description from backend ", 
//      "cover pic from backend "]
//     db.query(q, [values], (err, data) => {
//         if (err) return res.json(err)
//         return res.json("Book has been created")
//     })
// })

// app.listen(8800, () => {
//     console.log('connected to Database')
// })




import express from "express"
import mysql from "mysql"
import cors from 'cors'

const app = express()

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Rvs@836728",
    database: "book_store"
}
)

app.use(express.json())
app.use(cors())
// cors is allows to send data to  react frontend which we are aclling using axios in raect

app.get("/", (req, res) => {
    res.json("Hello this in backend")
})

app.get("/books", (req, res) => {
    const q = "SELECT * FROM BOOKS"
    db.query(q, (err, data) => {
        if (err) return res.json(err)
        return res.json(data)
    })
})
// since app.get("/books") wala get finction h .... so if we will write localhost:8800/books to json m books show karega


app.post("/books", (req, res) => {
    const q = "insert into books (`title`,`des`,`price`,`cover`) values (?)"
    const values = [
        req.body.title,
        req.body.des,
        req.body.price,
        req.body.cover,

    ]
    db.query(q, [values], (err, data) => {
        if (err) return res.json(err)
        return res.json("Book has been created")
    })
})

app.listen(8800, () => {
    console.log('connected to Database')
})