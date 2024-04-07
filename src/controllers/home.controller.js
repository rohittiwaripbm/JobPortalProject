import AdminModel from "../models/admin.model.js";

export default class HomeController{
    getHomePage(req, res)
    {
        return res.render('home',{errors:null,userEmail:req.session.userEmail});
    }

    postHomePage(req, res)
    {
        let verify = AdminModel.getAdmin(req.body.email, req.body.password);
        if (verify) {
            req.session.userEmail = req.body.email;
            return res.render('home', {errors:'Successfully logged in',userEmail:req.session.userEmail});
        }
        return res.render('home', {errors: 'wrong id password',userEmail:req.session.userEmail});
    }
}