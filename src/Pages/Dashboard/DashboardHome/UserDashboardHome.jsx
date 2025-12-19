import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAuth from '../../../hooks/useAuth/useAuth';
import useAxiosSecure from '../../../hooks/useAuth/useAxiosSecure';

const UserDashboardHome = () => {

    const {user} = useAuth()
    const axiosSecure = useAxiosSecure()
    const {data : issues = []} = useQuery({
        queryKey: ['my-issues',user.email],
        queryFn: async() => {
            const res = await axiosSecure.get(`/issues?email=${user.email}`)
            return res.data;
        }
    })

    const pendingIssues = issues.filter(issue=> issue.IssueStatus === 'Pending')
    const InprogressIssues = issues.filter(issue=> issue.IssueStatus === 'In Progress')
    const ResolvedIssues = issues.filter(issue=> issue.IssueStatus === 'Resolved')

    return (
        <div>
            <h1>My Issues: {issues.length}</h1>
            <h1>Pending Issues: {pendingIssues.length}</h1>
            <h1>In Progress Issues: {InprogressIssues.length}</h1>
            <h1>Resolved Issues: {ResolvedIssues.length}</h1>
        </div>
    );
};

export default UserDashboardHome;