import {Administration} from "./administration";

export namespace PDF {

    import Total = Administration.Total;
    export type HtmlTemplates =
        | "convention"
        | "conventionDeFormationProfessionnelle"
        | "emargement"
        | "facture"
        | "devis";

    export type HtmlGeneric =
        | Convention
        | ConventionDeFormationProfessionnelle
        | Emargement
        | FacturePDF
        | DevisPDF;

    export interface Information {
        numeroActivite: string;
        numeroSIRET: string;
        addresseOrganisateur: string;
    }

    export interface ConventionDeFormationProfessionnelle {
        beneficiaire: string;
        addresse: string;
        representant: string;
        action: string;
        duree: number;
        lieu: string;
        datesFormations: {
            date: string;
            horaire1: string;
            horaire2: string;
            emplacement: string;
        }[];
    }

    export interface Convention {
        duree: string;
        profils: string;
        prerequis: string;
        titre: string;
        objectifs: string;
        contenu: string;
        organisation: {
            equipePedagogique: string;
            moyensPedagogiquesEtTechniques: string;
            dispositifDeSuivi: string;
        }
    }

    export interface Programme {
        actionFormation: Administration.TypeActionFormation;
        lieu: string;
        duree: string;
        dates: {
            date: string; // UTC String
            heureDebut: string;
            heureFin: string;
            lieu: string;
        }[];
        programmeDeFormation: string;
        stagiaires: Administration.Person[];
        prix: {
            articles: {
                intitule: string;
                prix: number;
            }[]
            total: Administration.Total;
        };
        modalitesReglement: string;
        moyensPedagogiques: string;
        dedommagement: string;
        litiges: string;
    }

    export interface Emargement extends Information {
        lieu: string;
        date: string;
        formation: string;
        societe: string;
        formateur: string;
        stagiaires: Administration.Person[];
        formateurs: Administration.Person[];
    }

    export interface FacturePDF extends Administration.Facture {
    }

    export interface DevisPDF
        extends Partial<Information>,
            Administration.Devis {
    }
}
