const jwt = require("jsonwebtoken");

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
    const request = await fetch("http://localhost:3001/sign_in/default", {
        method: "POST",
        body: JSON.stringify(req.body)
    })
    const user = await request.json();

    if(user) res.status(200).json(user);
}

exports.sign_up_default = async (req, res) => {
    const request = await fetch("http://localhost:3001/sign_up/default", {
        method: "POST",
        body: JSON.stringify(req.body)
    })
    const user = await request.json();
    res.status(200).json(user);
}