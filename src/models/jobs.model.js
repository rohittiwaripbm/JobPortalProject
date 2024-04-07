let jobs = [];
let jobOne = {
    id: 1,
    jobName: 'Software Developer',
    companyName: 'Global IT',
    jobType: 'Tech',
    jobSalary: '32000',
    jobLocation: 'Gurgaon',
    jobOpening: 5,
    applicants: 0,
    skillRequired: ['DSA', 'Python', 'HTML', 'GO', 'CSS', 'JavaScript']
};

let jobTwo = {
    id: 2,
    jobName: 'Associate',
    companyName: 'Hexaware',
    jobType: 'Non-Tech',
    jobSalary: '25000',
    jobLocation: 'Chennai',
    jobOpening: 10,
    applicants: 0,
    skillRequired: ['English', 'Hindi', 'Good Typing Speed']
}
jobs.push(jobOne, jobTwo);

export default class Jobs {
    static getJobs() {
        return jobs;
    }
    static findJob(id) {
        let getJob = jobs.find((j) => j.id == id);
        if (getJob) {
            return getJob;
        }
        else {
            return null;
        }
    }
    static increaseApplicants(id) {
        let findJob = jobs.find(j => j.id == id);
        if (findJob) {
            // findJob.applicants++;
            let index = jobs.findIndex(k => k.id == id);
            jobs[index].applicants++;
            // console.log(jobs);
            return true;
        }
        else {
            return null;
        }
    }
    static addNewJob(jobObject) {
        let newJob = {
            id: jobs.length+1,
            jobName: jobObject.jobName,
            companyName: jobObject.companyName,
            jobType: jobObject.jobType,
            jobSalary: jobObject.jobSalary,
            jobLocation: jobObject.jobLocation,
            jobOpening: jobObject.jobOpening,
            applicants: 0,
            skillRequired: jobObject.skillRequired

        }
        jobs.push(newJob);
    }
    static deleteJob(id)
    {
        const index = jobs.findIndex(j=>j.id==id);
        jobs.splice(index,1);
    }
    static UpdateJob(jobObj)
    {
        console.log(jobObj);
        const index = jobs.findIndex(j=>j.id==jobObj.id);
        jobs[index] = jobObj;
        // return products[index];
    }
}