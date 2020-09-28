import {Server} from "miragejs"
import {Sessions} from "../types/sessions";
import {sessionsFormationExtend} from "./sessions";

declare global {
    interface Window {
        server: Server;
    }
}

if (window.server) {
    window.server.shutdown()
}
window.server = new Server({
    environment: "development",
    routes() {
        this.post("/api/participants/sessions/mine", (schema, request) => {
            return {
                result: "ok",
                sessions: sessionsFormationExtend as Sessions.SessionFormationExtended[],
            }
        });
        // this.post("/api/participants/sessions", (schema, request) => {
        //     const headers = {}
        //     const plan = JSON.parse(request.requestBody)
        //     return new Response(
        //         200,
        //         headers,
        // });
    },
})

