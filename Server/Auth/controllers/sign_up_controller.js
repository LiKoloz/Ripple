const axios = require("../custom_axios");

exports.sign_up_default = async (req, res) => {

    console.log(req.body);

    axios.post("http://localhost:3000/users/create", req.body)
        .then((response) => {
            console.log('Response \n' + response);
            res.status(200).json(response.body);
        })
        .catch(err => {
            console.log('Error \n' + err)
            res.status(500).json(err)
        })
}