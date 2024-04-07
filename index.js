import express from 'express';
import path from 'path';
import ejslayouts from 'express-ejs-layouts';
import router from './src/routes/index.route.js';
import session from 'express-session';

let app = express();
app.use(express.urlencoded({extended:true}));



app.use(session({
    secret:'secretkey',
    resave:false,
    saveUninitialized:true,
    cookie:{secure:false}
}));


//for views
app.set('view engine', 'ejs');
app.set('views', path.join(path.resolve(), 'src', 'views'));
app.use(ejslayouts);
//for public static files
app.use('/static', express.static(path.join(path.resolve(),'public')));
app.use('/',router)


app.listen(3200, ()=>{
    console.log('http://localhost:3200/');
})