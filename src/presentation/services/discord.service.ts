import { envs } from "../../config";


export class DiscordService {

    private readonly discordWebhookUrl = envs.DISCORD_WEBHOOK_URL;


    constructor(){}


    async notify(message: string){
        const body = {
            content: message,
        }

        const res = await fetch(this.discordWebhookUrl,{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(body),
        });

        if (!res) {
            console.log('Error sending message to DISCORD');
            return false;
        }

        return true;
    }

}