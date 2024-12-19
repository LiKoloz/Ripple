const jwt = require("jsonwebtoken");
const axios = require("../custom_axios");

exports.sign_up_default = async (req, res) => {
    
    let jwtToken = '';

    axios.post("http://localhost:3000/users/create", req.body)
        .then(async (response) => {
            for (i in response.data) {
                console.log(i + ' ' + response.data[i]);
            }
            console.log();
            
            jwtToken = await new Promise((resolve, reject) => {
                jwt.sign({ user: JSON.stringify(response.data) }, "secret", (err, token) => {
                    if (err) {
                        console.log('Error: ' + err);
                        reject(err);
                    } else {
                        resolve(token);
                    }
                });
            });
 
            response.data['jwt'] = jwtToken;
            res.status(200).send(JSON.stringify(response.data));
        })
        .catch(err => {
            console.log('Error \n' + err);
            res.status(500).json(err);
        });
    
}