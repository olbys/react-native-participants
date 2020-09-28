export namespace SatisfactionEvaluation {
	export interface SatisfactionEvaluation {
		satisfactionEvaluationUid: string;
		name: string;
		criteres: (
			| {
			type: "Evaluation";
			libelle: string;
			data: string[];
		}
			| {
			type: "Question";
			libelle: string;
		}
			| {
			type: "Sondage";
			libelle: string;
			data: string[];
		}
			)[];
	}

    export interface ResultSatisfactionEvaluation {
        resultSatisfactionEvaluation: (
            | {
            type: "Evaluation";
            libelle: string;
            result: (
                | "Très satisfaisant"
                | "Satisfaisant"
                | "Moyenne"
                | "Insuffisante"
                )[];
        }
            | {
            libelle: string;
            type: "Question";
            result: string;
        }
            | {
            libelle: string;
            type: "Sondage";
            data: string[];
        }
            )[];
    }
}
