
import AdminModel from "../models/admin.model.js";


export default class AdminController{
    getLogin(req, res)
    {
        res.render('login',{userEmail:req.session.userEmail});
    }
    postLogin(req, res)
    {
        console.log(req.body);
        AdminModel.addAdmin(req.body);
        res.render('login',{userEmail:req.session.userEmail})
    }
    getSignup(req, res)
    {
        res.render('signup',{userEmail:req.session.userEmail})
    }
    getLogout(req, res)
    {
        req.session.destroy((err)=>{
            if(err)
            {
                console.log(err);
            }
            else{
                res.redirect('/');
            }
        })
    }
}