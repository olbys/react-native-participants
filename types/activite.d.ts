import {Ressource} from "./ressources";
import {Users} from "./users";

export namespace Activite {
    // Definit la "validation pour passer à l'activité suivant" lors de l'exécution

    import Participant = Users.Participant;

    export interface QCM {
        type: "QCM";
        ressource: {
            question: {
                enonce: string;
                corrige: string;
                reponses: {
                    content: string;
                    status: boolean; // Bonne réponse if true
                }[];
            };
            melanger: boolean; // if true  Mélanger les propositions
        }[];
    }
    export interface Quizz {
        type: "Quizz";
        ressource: {
            enonce: string;
            status: boolean; // Bonne réponse if true
        }[];
    }
   
    export interface Test {
        type: "Test";
        ressource: {
            choix: string[];
            questions: {
                enonce: string;
                corrige: string;
            }[];
        };
    }
    
    export interface AtelierPresentiel {
        type: "Atelier présentiel";
        ressource: {
            date: string;
            adresse: string;
        };
    } 
    
    export interface RendezVousIndividuels {
        type: "Rendez-vous individuel";
        ressource: {
            interlocuteur: string;
            modalites: string; // TODO : Arthur - plusieurs modalites ?
        };
    }
    
    export interface ClasseVirtuelle{
        type: "Classe virtuelle";
        ressource: {
            groups: {
                date: string
                participants: Participant[]
                data: {
                    visioRoomUid: string
                    channelUid: string
                    tableauUid: string
                }
            }[];
            all: {
                date: string
                data: {
                    visioRoomUid: string
                    channelUid: string
                    tableauUid: string
                }
            }
        };
    }
    
    export interface EspaceCollaboratif {
        type: "Espace collaboratif";
        ressource: {
            group: {
                users: string; // TODO : Arthur : Array ?
            };
        };
    }
    
    export interface RenvoyerDocument {
        type: "Renvoyer document";
    }
   
    export interface RegarderVideo {
        type: "Regarder vidéo";
    }
    
    export interface ConsulterUneImage {
        type: "Consulter une image";
    }
   
    export interface TirerUneCarteDefi {
        type: "Tirer une carte-défi";
    }
    export type ActiviteAction =
        | QCM 
        | Quizz 
        | Test 
        | AtelierPresentiel
        | RendezVousIndividuels 
        | ClasseVirtuelle
        | EspaceCollaboratif 
        | RenvoyerDocument 
        | RegarderVideo
        | ConsulterUneImage
        | TirerUneCarteDefi;

    export type QCMResult = {
        activiteUid: string;
        type: "QCM";
        ressource: {
            question: {
                enonce: string;
                corrige: string;
                reponses: { // Les choix de réponse possibles
                    content: string;
                    status: boolean; // Bonne réponse if true
                    result: boolean;
                }[];
            };
            melanger: boolean; // if true  Mélanger les propositions
        }[];
    };
    export type QuizzResult = {
        activiteUid: string
        type: "Quizz";
        ressource: {
            enonce: string;
            status: boolean; // Bonne réponse if true
            result: boolean;
        }[];
    };
    export type TestResult = {
        activiteUid: string
        type: "Test";
        ressource: {
            choix: string[];
            questions: {
                enonce: string;
                result: string;
            }[];
        };
    };
    export type RenvoyerDocumentResult = {
        activiteUid: string
        type: "Renvoyer document";
        ressourceUid: string;
    };

    export type ActiviteResult =
        | QCMResult
        | QuizzResult
        | TestResult
        | RenvoyerDocumentResult

    export interface ActiviteMeta {
        nom: string;
        description: string;
        dureeActivite: string; // Valeur en minutes
        thumbnail: string;
    }

    export interface Activite {
        activiteUid: string;

        updatedAt: string; // UTC string
        createdAt: string; // UTC string

        meta: ActiviteMeta;

        ressourceUid?: string;

        action: ActiviteAction;
    }


    export interface ActiviteInstance {
        meta: Activite.ActiviteMeta;

        originActiviteUid: string // TODO Arthur à ajouté dans le back end

        ressource?: Ressource.Ressource;

        action: Activite.ActiviteAction;
    }
}
