import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAxiosSecure from '../../../hooks/useAuth/useAxiosSecure';
import useAuth from '../../../hooks/useAuth/useAuth';

const StaffDashboardHome = () => {

    const axiosSecure = useAxiosSecure()
    const {user} = useAuth()
    const {data : issues = []} = useQuery({
        queryKey: ['assigned-issues',user.email],
        queryFn: async() => {
            const res = await axiosSecure.get(`/issues/staffs?staffEmail=${user.email}`)
            return res.data
        }
    })

    const ResolvedIssue = issues.filter(issue => issue.IssueStatus === 'Resolved')
      const todayString = new Date().toDateString();

  const TodayIssues = issues.filter(issue => {
    if (!issue.assignDate) return false;
    return new Date(issue.assignDate).toDateString() === todayString;
  });
    return (
        <div>
            <h1>Assigned Issues: {issues.length}</h1>
            <h1>Resolved Issues: {ResolvedIssue.length}</h1>
            <h1>Todays Issues: {TodayIssues.length}</h1>
        </div>
    );
};

export default StaffDashboardHome;