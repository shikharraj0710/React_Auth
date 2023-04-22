import { sendEmail } from "../util/sendEmail.js";

export const testEmailRoute = {
    path: "/api/test-email",
    method: "post",
    handler: async (req, res) => {
        try {
            await sendEmail({
                to: 'shikharrajm@gmail.com',
                from: "shikharraj921@gmail.com",
                subject: "Does this work?",
                text: "If you\'re reading this....yes!"
            });
            res.sendStatus(200);
        } catch (error) {
            console.log(error);
            res.sendStatus(500);
        }
    }
}