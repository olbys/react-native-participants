import {Activite} from "./activite";
import ActiviteResult = Activite.ActiviteResult;
import {SatisfactionEvaluation} from "./satisfactionEvaluation";


export interface UserDataSession {
    userDataSessionUid: string;
    userUid: string;
    sessionUid: string;
    evaluation: EvaluationResult;
    activiteResults: ActiviteResult[];
    emargements: Emargement[];
}


export interface EvaluationResult {
    preFormation: ActiviteResult;
    satisfaction: SatisfactionEvaluation.ResultSatisfactionEvaluation;
    acquis: ActiviteResult;
}

export interface Emargement {
    activiteUid: string;
    status: boolean;
}
