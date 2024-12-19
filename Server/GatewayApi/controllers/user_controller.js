const jwt = require("jsonwebtoken");
const axios = require("../custom_axios");

exports.get_user_by_id = (req, res) => {
    jwt.verify(req.body.token, "secret",async (err, token) => {
        if(err) {
            console.log('Error: ' + err);
            res.status(500).json(err);
        }
        let request = await fetch("217.114.0.104:3000/users/get/" + req.params.id); // NOTE: 
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
        let request = await fetch("217.114.0.104:3000/users/get/e/" + req.params.email); // NOTE: 
                                                                    //Изменить что бы подтягивалось из Auth - сервиса
        let user = await request.json();
        res.status(200).json(user);
    })
}

exports.sign_in_default = async (req, res) => {
    console.log("12333333333");
    axios.post("217.114.0.104:3001/sign_in/default", req.body)
    .then((response) => {
        console.log('Responce data \n' );
        res.status(200).json(JSON.stringify(response.data));
    })
    .catch(err => {
        console.log(err)
        res.status(500).json(err)
    })
}

exports.sign_up_default = async (req, res) => {
    axios.post("217.114.0.104:3001/sign_up/default", req.body)
        .then((response) => {
            console.log('Responce data \n' + JSON.stringify(response.data));
            let user = JSON.parse(JSON.stringify(response.data));
            res.status(200).json(user);
        })
        .catch(err => {
            console.log(err)
            res.status(500).json(err)
        });
}

exports.check_token = async (req, res) => {
    console.log(req)
    axios.post("217.114.0.104:3001/sign_in/check_token", req.body)
        .then((response) => {
            console.log('Responce data \n' + response.data);
            res.status(200).json(response.body);
        })
        .catch(err => {
            // console.log(err)
            res.status(500).json(err)
        });
}