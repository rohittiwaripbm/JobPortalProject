let jobApplicants = [];

export default class Applicants{
    static addApplicants(id, name, email, contactnumber, resumeFile)
    {
        let newApplicant = {
            jobId:id,
            applicantid:jobApplicants.length+1,
            applicantName : name,
            applicantEmail : email,
            applicantContact: contactnumber,
            applicantResume: resumeFile
        }
        jobApplicants.push(newApplicant);
        console.log(jobApplicants)
    }

    static getAllApplicants(jobId) {
        // Filter applicants based on jobId
        const filteredApplicants = jobApplicants.filter(applicant => applicant.jobId === jobId);
        return filteredApplicants;
    }
}