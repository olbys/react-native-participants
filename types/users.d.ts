import { DeepPartial } from "../api";

export namespace Users {
    export type UserGeneric =
        | Users.Consultant
        | Users.UserDef
        | Users.Manager
        | Users.Participant;

    export type Role = "USER" | "CONSULTANT" | "MANAGER" | "PARTICIPANT";

    export interface UserDef {
        userUid: any;
        firstName: string;
        lastName: string;
        email: string;
        avatarUid: string;
        role: Role;
    }

    export interface Consultant extends UserDef {
        role: "CONSULTANT";

        personnel: {
            nom: string;
            prenom: string;
            fonction: string;
            telPerso: string;
            emailPerso: string;
            adresse: string;
            codePostal: string;
        };

        professionel: {
            emailPro: string;
            telPro: string;
            status: {
                independant: boolean;
                salarie: boolean;
            };
            commentaire: string;
            contraintes: string;
            tarifJour: string;
            tarifForfait: string;
            tarificationAcceptee: string;
            certification: string;
        };

        specialites: Specialite[];
    }

    export interface Participant extends UserDef {
        role: "PARTICIPANT";
        // TODO : Métadonnées du participant
    }

    export interface Manager extends UserDef {
        role: "MANAGER";
    }

    export type Theme =
        | "Management"
        | "Communication"
        | "Développement personnel"
        | "Nutrition"
        | "Sophrologie";

    export interface Specialite {
        theme: Theme;
        public: "directeurs" | "managers" | "salariés" | "autres";
    }
}
