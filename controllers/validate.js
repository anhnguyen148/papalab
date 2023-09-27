exports.form = (req,res) => {
    const {content} = req.body;

    if (content === "") {
        return res.render("index", {
            "clientVar": "You have nothing to say ..."
        })
    } else {
        console.log(req.body);
        return res.render("index", {
            "clientVar": content 
        })
    }
}