import {Users} from "./users";

export namespace Clients {
    export interface Entreprise {
        entrepriseUid: string;

        meta: {
            nom: string
            ville: string
            codePostal: string
            periode: string  // TODO nicolas : remove when Session done.
            themeFormation: string
            nbSalaries: number
            nbManagers: number
            ca: number
            commentaire: string
        },

        responsablesRH: ResponsableRH[];

        participantUids: string[]; // Uid des users
    }

    export interface EntrepriseExtended extends Entreprise{
        participants: Users.Participant[]

}

    interface ResponsableRH {
        nom: string;
        fonction: string;
        telephone: string;
        email: string;
        adresse: string;
        codePostal: string;
        ville: string;
        commentaire: string;
    }
}
