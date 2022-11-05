import { NextApiRequest, NextApiResponse } from 'next';
import NextAuth from 'next-auth'
import GitHubProvider from "next-auth/providers/github";

const options = {
    providers: [
        GitHubProvider({
            clientId: process.env.GITHUB_ID || "",
            clientSecret: process.env.GITHUB_SECRET || ""
        }),
    ],
}

export default (req: NextApiRequest, res: NextApiResponse<any>) => NextAuth(req, res, options)