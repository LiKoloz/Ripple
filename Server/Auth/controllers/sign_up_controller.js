exports.sign_up_default =async (req, res) => {
    const a = await fetch("http://localhost:3000/users/create", {
        method: "POST",
        body: JSON.stringify(req.body)
    })
    const user = await a.json();
    res.status(200).json(user);
}