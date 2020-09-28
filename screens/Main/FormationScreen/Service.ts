import {Sessions} from "../../../types/sessions";
import {post} from "../../../utils/network";

export function getSessionsMine(): Promise<{
    result:  "ok" | "invalid_cretdentials",
    sessions: Sessions.SessionFormationExtended[]
}> {
  return post('/api/participants/sessions/mine', {});
}



