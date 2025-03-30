import React, { createContext, useContext, useState, ReactNode } from 'react';

interface Job {
  id: string;
  title: string;
  companyName: string;
  salary: string;
  companyLogo: string;
}

interface JobContextType {
  savedJobs: Job[];
  appliedJobs: string[]; // Store job IDs of applied jobs
  addJobToSaved: (job: Job) => void;
  removeJobFromSaved: (jobId: string) => void;
  markJobAsApplied: (jobId: string) => void; // Function to mark job as applied
}

const JobContext = createContext<JobContextType | undefined>(undefined);

export const JobProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [savedJobs, setSavedJobs] = useState<Job[]>([]);
  const [appliedJobs, setAppliedJobs] = useState<string[]>([]); // Track applied jobs

  const addJobToSaved = (job: Job) => {
    const isAlreadySaved = savedJobs.some((savedJob) => savedJob.id === job.id);
    if (!isAlreadySaved) {
      setSavedJobs([...savedJobs, job]);
    }
  };

  const removeJobFromSaved = (jobId: string) => {
    const updatedJobs = savedJobs.filter((job) => job.id !== jobId);
    setSavedJobs(updatedJobs);
  };

  // Mark a job as applied by adding it to the appliedJobs state
  const markJobAsApplied = (jobId: string) => {
    if (!appliedJobs.includes(jobId)) {
      setAppliedJobs([...appliedJobs, jobId]);
    }
  };

  return (
    <JobContext.Provider value={{ savedJobs, appliedJobs, addJobToSaved, removeJobFromSaved, markJobAsApplied }}>
      {children}
    </JobContext.Provider>
  );
};

export const useJobContext = () => {
  const context = useContext(JobContext);
  if (!context) {
    throw new Error('useJobContext must be used within a JobProvider');
  }
  return context;
};
