const jwt = require("jsonwebtoken");
const axios = require("../custom_axios");

exports.get_user_by_id = (req, res) => {
    jwt.verify(req.body.token, "secret",async (err, token) => {
        if(err) {
            console.log('Error: ' + err);
            res.status(500).json(err);
        }
        let request = await fetch("http://localhost:3000/users/get/" + req.params.id); // NOTE: 
                                                                    //Изменить что бы подтягивалось из Auth - сервиса
        let user = await request.json();
        res.status(200).json(user);
    })
}

exports.get_user_by_email = (req, res) => {
    jwt.verify(req.body.token, "secret",async (err, token) => { 
        if(err) {
            console.log('Error: ' + err);
            res.status(500).json(err);
        }
        let request = await fetch("http://localhost:3000/users/get/e/" + req.params.email); // NOTE: 
                                                                    //Изменить что бы подтягивалось из Auth - сервиса
        let user = await request.json();
        res.status(200).json(user);
    })
}

exports.sign_in_default = async (req, res) => {
    axios.post("http://localhost:3001/sign_in/default", req.body)
    .then((response) => {
        console.log('Responce data \n' + response.data);
        res.status(200).json(response.body);
    })
    .catch(err => {
        console.log(err)
        res.status(500).json(err)
    })
}

exports.sign_up_default = async (req, res) => {
    axios.post("http://localhost:3001/sign_up/default", req.body)
        .then((response) => {
            console.log('Responce data \n' + response.data);
            res.status(200).json(response.body);
        })
        .catch(err => {
            console.log(err)
            res.status(500).json(err)
        });
}