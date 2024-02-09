require("dotenv").config()
const jwt=require('jsonwebtoken')
const bcrypt=require('bcrypt')


const {addaccount,enter,connection}=require('../../database/index')
const { authenticateToken } =require('../middleware/token')
const secretKey = process.env.JWT_SECRET;
console.log(secretKey,"secretkey")

module.exports.Addaccount = async (req, res) => {

  try { const password=req.body.password
  const hashed=await bcrypt.hash(password,10)
  const values = {
    name:req.body.name,
    email:req.body.email,
    password:hashed
  }
   
  
  addaccount(values, (err, results) => {
    if (err) {
      console.log(err) 
    }
    const token=jwt.sign({name:req.body.name},secretKey)
     res.send({results,token})
  })
}catch(err){console.log(err)
}
};



    

module.exports.login = function (req, res) {
  const sql = 'SELECT * FROM login WHERE email = ?';
  const email = req.body.email;
  const password = req.body.password;

  connection.query(sql, [email], async function(err, results) {
    if (err) {
      console.error(err); // Log the actual error
      return res.status(500).send({ error: 'Database error' }); 
    }

    if (results.length > 0) {
      const user = results[0];
      const hashedPwd = user.password;
      try {
        const isMatch = await bcrypt.compare(password, hashedPwd);
        if (isMatch) {
          const token = jwt.sign({ email: user.email }, secretKey);
          return res.send({ message: 'User exists', token });
        } else {
          console.log("Incorrect email or password");
          return res.status(401).send({ error: 'Incorrect email or password' });
        }
      } catch (error) {
        console.error(error);
        return res.status(500).send({ error: 'Internal server error' }); 
      }
    } else {
      console.log("User not found");
      return res.status(404).send({ error: 'User not found' });
    }
  });
};