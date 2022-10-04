import {db} from "../db.js"

export const register = (req,res) =>{
    // CHECK APAKAH USER SUDAH ADA 

    const q = "SELECT * FROM users WHERE email = ? OR username = ?"

    db.query(q,[req.body.email , req.body.username], (err,data) => {
        if(err) return res.json(err)
        if(data.length) return res.status(409).json("User sudah ada!")
    })
}
export const login = (req,res) =>{
    
}

export const logout = (req,res) =>{
    
}