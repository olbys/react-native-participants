import {ModuleTemplate} from "./moduleTemplate";

export namespace Parcours {

    type ParcoursType = "Formation" | "Atelier" | "Formation & Atelier";

    type PedagogieType =
        | "presentiel"
        | "distanciel"
        | "e-learning"
        | "blended"
        | "En situation de travail";

    // Parcours de formation (un template)
    interface Parcours {
        parcoursUid: string;

        meta: {
            nom: string;
            type: ParcoursType;
            pedagogieType: PedagogieType;
            duration: number; // On garde les données en heures
            thumbnail: string;
        };

        evaluations: {
            preFormation: {
                activiteUid: string;
            };
            satisfactionUids: string[];
            acquis: {
                activiteUid: string
            };
        };

        moduleTemplateUids: string[];
    }

    // Modification d'un parcours de formation
    interface ParcoursExtended extends Parcours {
        modulesExtended: ModuleTemplate.ModuleTemplateExtended[];
    }

}
