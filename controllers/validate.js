exports.form = (req,res) => {
    const {content} = req.body;

    if (content === "") {
        return res.render("papaFrom", {
            "clientVar": "You have nothing to say ..."
        })
    } else {
        console.log(req.body);
        return res.render("papaForm", {
            "clientVar": content 
        })
    }
}