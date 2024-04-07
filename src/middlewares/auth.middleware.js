export let authentication = (req, res, next)=>{

    if ( req.session.userEmail) {
        next();
    }
    else{
        res.render('error');
    }
}