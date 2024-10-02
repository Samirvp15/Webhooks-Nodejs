import { GitHubIssuePayload, GitHubStarPayload } from "../../interfaces";


export class GitHubService {

    constructor() { }


    onStar(payload: GitHubStarPayload): string {

        let message: string;
        const { action, sender, repository } = payload;


        return message = `User ${sender.login} ${action} star on ${repository.full_name} `;

    }

    onIssue(payload: GitHubIssuePayload): string {

        const { action, issue } = payload;

        if (action === 'opened') {
            const message = `An issue was openened with this title ${issue.title}`;
            return message;

        }

        if (action === 'closed') {
            const message = `An issue was closed with this user ${issue.user.login}`;

            return message;

        }

        if (action === 'reopened') {
            const message = `An issue was reopened with this user ${issue.user.login}`;
            return message;

        }

        return `Unhandled action for ${action}`;

    }

}

