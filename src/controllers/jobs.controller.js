import Jobs from "../models/jobs.model.js";

import Applicants from "../models/applicants.model.js";

export default class JobsController {

    getLandedJobs(req, res) {
        let totalJobs = Jobs.getJobs();
        // console.log(totalJobs);
        res.render('landedJobs', { jobs: totalJobs,userEmail:req.session.userEmail });
    }
    postLandedJobs(req, res)
    {
        // console.log('post landed jobs')
        // console.log(req.body);
        if (!Array.isArray(req.body.skillRequired)) {
            // Convert skill to an array
            req.body.skillRequired = [req.body.skillRequired];
        }
        Jobs.addNewJob(req.body);
        let totalJobs = Jobs.getJobs();
        res.render('landedJobs', { jobs: totalJobs,userEmail:req.session.userEmail });
    }
    getaddJob(req, res)
    {
        res.render('newJob',{userEmail:req.session.userEmail});
    }
    getSpecificJob(req, res) {
        const id = req.params.id;
        let job = Jobs.findJob(id);
        // console.log(job)
        if (job) {
            res.render('specificJob',{jobDetails:job,userEmail:req.session.userEmail});
        }
        else{
            res.status(404).send('no jobs found');
        }
    }
    submitResume(req, res)
    {
        const id = req.params.id;
        let job = Jobs.findJob(id);
        // console.log(req.body);
        
        if (job) {
            let data = req.body;
            let pdfFile = 'cvs/'+req.file.filename;
            Applicants.addApplicants(data.id, data.name, data.email, data.contactnumber, pdfFile);
            Jobs.increaseApplicants(id);
            res.render('specificJob',{jobDetails:job,userEmail:req.session.userEmail});
        }
        else{
            res.status(404).send('no jobs found');
        }
    }

    getAllApplicants(req, res)
    {
        let jobId = req.params.id;
        let applicants = Applicants.getAllApplicants(jobId);
        res.render('applicants',{application:applicants,userEmail:req.session.userEmail});
    }

    getDeleteJob(req, res)
    {
        let id = req.params.id;
        let job = Jobs.findJob(id);
        // console.log(job)
        if (job) {
            Jobs.deleteJob(id);
            let totalJobs = Jobs.getJobs();
            // console.log(totalJobs);
            res.render('landedJobs', { jobs: totalJobs,userEmail:req.session.userEmail });
        }
        else{
            res.status(404).send('no jobs found');
        }
    }
    getUpdateJob(req,res)
    {
        // console.log(req.params.id);
        let id = req.params.id;
        let job = Jobs.findJob(id);
        if (job) {
        res.render('updateJob',{job:job,userEmail:req.session.userEmail });
            
        }
        else{
            res.status(404).send('no jobs found');
        }
    }
    postupdateJob(req,res)
    {
        if (!Array.isArray(req.body.skillRequired)) {
            // Convert skill to an array
            req.body.skillRequired = [req.body.skillRequired];
        }
        Jobs.UpdateJob(req.body);
        let id = req.params.id;
        let job = Jobs.findJob(id);
        if (job) {
            res.render('specificJob',{jobDetails:job,userEmail:req.session.userEmail});
        }
        else{
            res.status(404).send('no jobs found');
        }
    }
}