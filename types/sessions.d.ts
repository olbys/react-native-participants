import {Clients} from "./clients";
import {Parcours} from "./parcours";
import {ModuleTemplate} from "./moduleTemplate";
import {Users} from "./users";
import {PDF} from "./pdf";

export namespace Sessions {
    export interface SessionGroup {
        dateDebut: string;
        dateFin: string;

        participantUids: string[]; // User uids

        // Deep copy du template à la création de la session
        modules: ModuleTemplate.ModuleInstance[];
    }

    export interface SessionGroupExtended extends SessionGroup {
        participants: Users.Participant[];
        modulesExtended: ModuleTemplate.ModuleInstanceExtended[];
    }

    export interface SessionFormation {
        sessionUid: string;

        // Le parcours template de cette formation
        parcoursUid: string; // Uid
        entrepriseUid: string;

        groups: SessionGroup[];

        // ignore
        convention?: PDF.Convention;
        // ignore
        programme?: PDF.Programme;
    }

    export interface SessionFormationExtended extends SessionFormation {
        // Le parcours template de cette formation
        parcours: Parcours.ParcoursExtended;
        // ignore
        entreprise?: Clients.EntrepriseExtended;

        //groups: SessionGroup[];
        groupsExtended: SessionGroupExtended[];
    }

    export interface EvaluationNote {
        note: number; // Note entre 1 et 5
        commentaire: string;
    }
}
