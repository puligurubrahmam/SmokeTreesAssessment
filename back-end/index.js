const express = require('express')
const cors = require('cors');
require('./db/config');
const User = require('./db/User');
const app = express();
app.use(express.json());
app.use(cors());
app.post('/store',async (req,res)=>
{
    try {
        const { name, street, city, state, zip_code } = req.body;
        const userNameExists = await User.findOne({name})
        if(userNameExists)
        {
          const updatedUser =  await User.findOneAndUpdate(
                {name},
                {$push:{addresses:{street, city, state, zip_code}}},
                { new: true }
            )
            res.status(201).json(updatedUser);
        }
        else
        {
            const user = new User({ name,addresses:{street, city, state, zip_code}});
            const userResult = await user.save();
            res.status(201).json(userResult);
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.listen(5000,()=>
{
    console.log("Server running at http://localhost:5000......");
})