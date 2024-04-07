import express from 'express';
import HomeController from '../controllers/home.controller.js';
import JobsController from '../controllers/jobs.controller.js';
import AdminController from '../controllers/admin.controller.js';
import { uploadFile } from '../middlewares/file-upload.middleware.js';
import { authentication } from '../middlewares/auth.middleware.js';

const router = express.Router();
let jobsController = new JobsController();
let homeController = new HomeController();
let adminController = new AdminController();
router.get('/',homeController.getHomePage);
router.post('/', homeController.postHomePage);
router.get('/jobs',jobsController.getLandedJobs );
router.get('/jobs/:id', jobsController.getSpecificJob);
router.post('/jobs/:id',uploadFile.single('resumeFile'), jobsController.submitResume);
router.get('/jobs/applicants/:id',authentication,jobsController.getAllApplicants);
router.get('/newJob',authentication,jobsController.getaddJob);
router.post('/jobs',authentication,jobsController.postLandedJobs);
router.get('/login', adminController.getLogin);
router.post('/login', adminController.postLogin);
router.get('/signup', adminController.getSignup)
router.get('/logout',authentication, adminController.getLogout);
router.get('/delete/:id',authentication, jobsController.getDeleteJob);
router.get('/update/:id',authentication, jobsController.getUpdateJob);
router.post('/update/:id',authentication, jobsController.postupdateJob );
export default router;