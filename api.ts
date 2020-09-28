import {Users} from "./types/users";
import {Sessions} from "./types/sessions";
import {Clients} from "./types/clients";
import {Parcours} from "./types/parcours";
import {Activite} from "./types/activite";
import {UserDataSession} from "./types/UserDataSession";
import {ModuleTemplate} from "./types/moduleTemplate";
import {Ressource} from "./types/ressources";
import {SatisfactionEvaluation} from "./types/satisfactionEvaluation";
import {PDF} from "./types/pdf";
import {Evenements} from "./types/evenements";


export type DeepPartial<T> = T extends Function
	? T
	: T extends object
		? { [P in keyof T]?: DeepPartial<T[P]> }
		: T;

export namespace Api {
	export interface Consultant {
		"/api/consultants/create": {
			method: "post";
			args: {
				body: {
					password: string;
				};
			};
			response: {
				result: "ok";
				consultant: Users.Consultant;
			};
		}; // Vérifié

		"/api/consultants/update": {
			method: "post";
			args: {
				body: {
					consultant: Users.Consultant;
				};
			};
			response: {
				result: "ok";
				consultant: Users.Consultant;
			};
		}; // vérifié

		"/api/consultants/delete": {
			method: "post";
			args: {
				body: {
					userUid: string;
				};
			};
			response: {
				result: "ok";
			};
		}; // vérifié

		"/api/consultants/get": {
			method: "post";
			args: {
				body: {
					userUid: string;
				};
			};
			response: {
				result: "ok";
				consultant: Users.Consultant;
			};
		}; //vérifié

		"/api/consultants/all": {
			method: "post";
			args: {
				body: {};
			};
			response: {
				result: "ok";
				consultants: Users.Consultant[];
			};
		}; // vérifié

		"/api/consultants/sessions/all": {
			// find where userUid in groups[*].modules[*].consultantUids
			method: "post";
			args: {
				body: {
					userUid: string;
				};
			};
			response: {
				result: "ok";
				sessions: Sessions.SessionFormationExtended[];
			};
		}; // vérifié
	} // vérifié

	export interface Entreprises {
		"/api/entreprises/create": {
			method: "post";
			args: {
				body: {};
			};
			response: {
				result: "ok";
				entreprise: Clients.Entreprise;
			};
		}; // vérifié

		"/api/entreprises/update": {
			method: "post";
			args: {
				body: {
					entreprise: Clients.Entreprise;
				};
			};
			response: {
				result: "ok";
				entreprise: Clients.Entreprise;
			};
		}; // vérifié

		"/api/entreprises/delete": {
			method: "post";
			args: {
				body: {
					entrepriseUid: string;
				};
			};
			response: {
				result: "ok";
			};
		}; // véréfié + TODO intervention Arthur

		"/api/entreprises/get": {
			method: "post";
			args: {
				body: {
					entrepriseUid: string;
				};
			};
			response: {
				result: "ok";
				entreprise: Clients.EntrepriseExtended;
			};
		}; // vérifié

		"/api/entreprises/all": {
			method: "post";
			args: {
				body: {};
			};
			response: {
				result: "ok";
				entreprises: Clients.Entreprise[];
			};
		}; // vérifié

		"/api/entreprises/sessions/all": {
			method: "post";
			args: {
				body: {
					entrepriseUid: string;
				};
			};
			response: {
				result: "ok";
				sessions: Sessions.SessionFormationExtended[];
			};
		}; // vérifié

		"/api/entreprises/participants/all": {
			method: "post";
			args: {
				body: {
					entrepriseUid: string;
				};
			};
			response: {
				result: "ok";
				participants: Users.Participant[];
			};
		}; // vérifié

		"/api/entreprises/participants/create": {
			method: "post";
			args: {
				body: {
					entrepriseUid: string;
					dataNewParticipants: {
						firstName: string;
						lastName: string;
						tel: string;
						email: string;
					}[];
				};
			};
			response: {
				result: "ok";
				participants: Users.Participant[];
			};
		}; // vérifié
	} // vérifié

	export interface Parcours {
		// Upload
		"/api/parcours/addThumbnail": {
			method: "post";
			args: {
				body: {
					parcoursUid: string;
				};
			};
			response: {
				result: "ok";
				parcours: Parcours.Parcours;
			};
		}; // vérifié

		"/api/parcours/all": {
			method: "post";
			args: {
				body: {};
			};
			response: {
				result: "ok";
				parcours: Parcours.ParcoursExtended[];
			};
		}; // vérifié

		"/api/parcours/get": {
			method: "post";
			args: {
				body: {
					parcoursUid: string;
				};
			};
			response: {
				result: "ok";
				parcours: Parcours.ParcoursExtended;
			};
		}; // vérifié

		"/api/parcours/create": {
			method: "post";
			args: {
				body: {};
			};
			response: {
				result: "ok";
				parcours: Parcours.ParcoursExtended;
			};
		}; // vérifié

		"/api/parcours/update": {
			method: "post";
			args: {
				body: {
					parcours: DeepPartial<Parcours.ParcoursExtended> & {
						parcoursUid: string;
					};
				};
			};
			response: {
				result: "ok";
				parcours: Parcours.ParcoursExtended;
			};
		}; // vérifié

		"/api/parcours/delete": {
			method: "post";
			args: {
				body: {
					parcoursUid: string;
				};
			};
			response: {
				result: "ok";
			};
		}; // vérifié
	} // vérifié

	export interface PDF {
		"/api/parcours/pdf/:model": {
			method: "post";
			args: {
				param: {
					model: PDF.HtmlTemplates;
				};
				body: {
					data: PDF.HtmlGeneric;
				};
			};
			response: ReadableStream;
		};
	} // vérifié


	export interface SatisfactionEvaluation {
		"/api/evaluationDeSatisfactions/all": {
			method: "post";
			args: {
				body: {};
			};
			response: {
				result: "ok";
				evaluationDeSatisfactions: SatisfactionEvaluation.SatisfactionEvaluation[];
			};
		}; // vérifié

		"/api/evaluationDeSatisfactions/get": {
			method: "post";
			args: {
				body: {
					satisfactionEvaluationUid: string;
				};
			};
			response: {
				result: "ok";
				evaluationDeSatisfaction: SatisfactionEvaluation.SatisfactionEvaluation;
			};
		}; // vérifié

		"/api/evaluationDeSatisfactions/create": {
			method: "post";
			args: {
				body: {};
			};
			response: {
				result: "ok";
				evaluationDeSatisfaction: SatisfactionEvaluation.SatisfactionEvaluation;
			};
		}; // vérifié

		"/api/evaluationDeSatisfactions/update": {
			method: "post";
			args: {
				body: {
					evaluationDeSatisfaction: DeepPartial<SatisfactionEvaluation.SatisfactionEvaluation> & {
						satisfactionEvaluationUid: string;
					};
				};
			};
			response: {
				result: "ok";
				evaluationDeSatisfaction: SatisfactionEvaluation.SatisfactionEvaluation;
			};
		}; // vérifié

		"/api/evaluationDeSatisfactions/delete": {
			method: "post";
			args: {
				body: {
					satisfactionEvaluationUid: string;
				};
			};
			response: {
				result: "ok";
			};
		}; // vérifié
	} // vérifié

	export interface Modules {
		// Upload
		"/api/modules/addThumbnail": {
			method: "post";
			args: {
				body: {
					moduleUid: string;
				};
			};
			response: {
				result: "ok";
				module: ModuleTemplate.ModuleTemplate;
			};
		}; // vérifié

		"/api/modules/all": {
			method: "post";
			args: {
				body: {};
			};
			response: {
				result: "ok";
				modulesExtended: ModuleTemplate.ModuleTemplateExtended[];
			};
		}; // vérifié

		"/api/modules/get": {
			method: "post";
			args: {
				body: {
					moduleUid: string;
				};
			};
			response: {
				result: "ok";
				modulesExtended: ModuleTemplate.ModuleTemplateExtended;
			};
		}; // vérifié

		"/api/modules/create": {
			method: "post";
			args: {
				body: {};
			};
			response: {
				result: "ok";
				module: ModuleTemplate.ModuleTemplate;
			};
		}; // vérifié

		"/api/modules/update": {
			method: "post";
			args: {
				body: {
					module: DeepPartial<ModuleTemplate.ModuleTemplate> & {
						moduleUid: string;
					};
				};
			};
			response: {
				result: "ok";
				modulesExtended: ModuleTemplate.ModuleTemplateExtended;
			};
		}; // vérifié

		"/api/modules/delete": {
			method: "post";
			args: {
				body: {
					moduleUid: string;
				};
			};
			response: {
				result: "ok";
			};
		}; // vérifié 
	} // vérifié

	export interface Ressources {
		"/api/ressources/addImage": {
			method: "post";
			args: {
				body: {
					ressourceUid: string;
				};
			};
			response: {
				result: "ok";
				ressource: Ressource.Ressource;
			};
		}; // vérifié

		"/api/ressources/addDocument": {
			method: "post";
			args: {
				body: {
					ressourceUid: string;
				};
			};
			response: {
				result: "ok";
				ressource: Ressource.Ressource;
			};
		}; // vérifié

		"/api/ressources/addVideo": {
			method: "post";
			args: {
				body: {
					ressourceUid: string;
				};
			};
			response: {
				result: "ok";
				ressource: Ressource.Ressource;
			};
		}; // vérifé

		"/api/ressources/all": {
			method: "post";
			args: {
				body: {};
			};
			response: {
				result: "ok";
				ressources: Ressource.Ressource[];
			};
		}; // vérifié

		"/api/ressources/get": {
			method: "post";
			args: {
				body: {
					ressourceUid: string;
				};
			};
			response: {
				result: "ok";
				ressource: Ressource.Ressource;
			};
		}; // vérifié

		"/api/ressources/create": {
			method: "post";
			args: {
				body: {};
			};
			response: {
				result: "ok";
				ressource: Ressource.Ressource;
			};
		}; // vérifié

		"/api/ressources/update": {
			method: "post";
			args: {
				body: {
					ressource: DeepPartial<Ressource.Ressource> & {
						ressourceUid: string;
					};
				};
			};
			response: {
				result: "ok";
				ressource: Ressource.Ressource;
			};
		}; // vérifié

		"/api/ressources/delete": {
			method: "post";
			args: {
				body: {
					ressourceUid: string;
				};
			};
			response: {
				result: "ok";
			};
		}; // vérifié
	} // vérifié

	export interface Activite {
		"/api/activites/addThumbnail": {
			method: "post";
			args: {
				body: {
					activiteUid: string;
				};
			};
			response: {
				result: "ok";
				activite: Activite.Activite;
			};
		}; // vérifié

		"/api/activites/all": {
			method: "post";
			args: {
				body: {};
			};
			response: {
				result: "ok";
				activites: Activite.Activite[];
			};
		}; // vérifié

		"/api/activites/create": {
			method: "post",
			args: {
				body: {
					activite: Activite.Activite;
				}
			};
			response: {
				result: "ok";
				activite: Activite.Activite;
			}
		} // vérifié

		"/api/activites/get": {
			method: "post";
			args: {
				body: {
					activiteUid: string;
				};
			};
			response: {
				result: "ok";
				activite: Activite.Activite;
			};
		}; // vérifié

		"/api/activites/update": {
			method: "post";
			args: {
				body: {
					activite: Activite.Activite;
				};
			};
			response: {
				result: "ok";
				activite: Activite.Activite;
			};
		}; // vérifié

		"/api/activites/delete": {
			method: "post";
			args: {
				body: {
					activiteUid: string;
				};
			};
			response: {
				result: "ok";
			};
		}; // vérifié
	} // vérifié

	export interface Users {
		"/adi/users/addAvatar": {
			method: "post";
			args: {
				userUid: string;
			};
			response: {
				result: "ok";
				user: Users.UserGeneric;
			};
		}; // vérifié

		"/api/users/resetPassword": {
			method: "post";
			args: {
				body: {
					email: string;
				}
			};
			response: {
				result: "ok";
			}
		} // vérifié

		"/api/users/changePassword": {
			method: "post";
			args: {
				body: {
					token: string;
					password: string;
				}
			};
			response: {
				result: "ok";
				user: Users.UserGeneric
			}
		} // vérifié

		"/api/users/participants/all": {
			method: "post";
			args: {
				body: {};
			};
			response: {
				result: "ok";
				users: Users.Participant[];
			};
		}; // vérifié
	} // vérifié

	export interface Auth {
		"/api/auth/login": {
			method: "post";
			args: {
				body: {
					email: string;
					password: string;
				};
			};
			response: {
				result: "ok";
				activite: {
					result: string;
					user: {
						firstName: string;
						lastName: string;
						email: string;
						role: string;
					};
					token: string;
				};
			};
		}; // vérifié

		"/api/auth/logout": {
			method: "post";
			args: {
				body: {};
			};
			response: {
				result: "ok";
			};
		}; // vérifié
	} // vérifié

	export interface Statistique {
		"/api/statistique/infoBoardManager": {
			method: "post";
			args: {
				body: {};
			};
			response: {
				result: "ok";
				info: {
					caTotalAnnee: number;
					joursRestantAFacturer: number;
					nbEntreprises: number;
					nbParticipants: number;
					nbSessions: number;
					nbSessionsAVenir: number;
					nbParcours: number;
					nbConsultants: number;
				};
			};
		}; // vérifié
	} // vérifié

	export interface Participants {
		"/api/participants/sessions/mine": {
			method: "post";
			args: {};
			response: {
				result: "ok";
				sessions: Sessions.SessionFormationExtended[];
			};
		}; // vérifié

		"/api/participants/userDataSession/get/mine": {
			method: "post";
			args: {
				sessionUid: string;
			};
			response: {
				result: "ok";
				userDataSession: UserDataSession;
			};
		}; // vérifié

		"/api/participants/userDataSession/addRessource": {
			method: "post";
			args: {
				body: {
					userDataSessionUid: string;
					activiteUid: string;
				};
			};
			response: {
				result: "ok";
				userDataSession: UserDataSession;
			};
		}; // vérifié

		"/api/participants/userDataSession/update": {
			method: "post";
			args: {
				userDataSession: DeepPartial<UserDataSession> & {
					userDataSessionUid: string;
				};
			};
			response: {
				result: "ok";
				userDataSession: UserDataSession;
			};
		}; // vérifié
	} // vérifié

	export interface Sessions {
		"/api/sessions/allNextSessions": {
			// return all session where one of groups[].dateDebut or groups[].dateFin > today anq sort by date (min(group[].dateDebut))
			method: "post";
			args: {
				body: {};
			};
			response: {
				result: "ok";
				sessions: Sessions.SessionFormationExtended[];
			};
		}; // vérifié

		"/api/sessions/all": {
			method: "post";
			args: {
				body: {};
			};
			response: {
				result: "ok";
				sessions: Sessions.SessionFormationExtended[];
			};
		}; // vérifié

		"/api/sessions/get": {
			method: "post";
			args: {
				body: {
					sessionUid: string;
				};
			};
			response: {
				result: "ok";
				session: Sessions.SessionFormationExtended;
			};
		}; // vérifié

		"/api/sessions/create": {
			method: "post";
			args: {
				body: {
					entrepriseUid: string;
					parcoursUid: string;
					groups: {
						participantUids: string[];
						dateDebut: string;
						dateFin: string;
					}[];
				};
			};
			response: {
				result: "ok";
			}; // vérifié
		};

		"/api/sessions/update": {
			method: "post";
			args: {
				body: {
					session: DeepPartial<Sessions.SessionFormation> & {
						sessionUid: string;
					};
				};
			};
			response: {
				result: "ok";
				session: Sessions.SessionFormationExtended;
			};
		}; // vérifié

		"/api/sessions/delete": {
			method: "post";
			args: {
				body: {
					sessionUid: string;
				};
			};
			response: {
				result: "ok";
			};
		}; // vérifié

		"/api/sessions/userDataSession/all": { // Réponses
			method: "post";
			args: {
				body: {
					sessionUid: string;
				};
			};
			response: {
				result: "ok";
				userDataSessions: UserDataSession[];
			};
		};
	} // vérifié

	export interface Evenements {
		"/api/evenements/create": {
			method: "post";
			args: {
				body: {}
			};
			response: {
				result: "ok";
				evenement: Evenements.Evenement;
			}
		}

		"/api/evenements/update": {
			method: "post";
			args: {
				body: {
					evenement: DeepPartial<Evenements.Evenement>;
				}
			};
			response: {
				result: "ok";
				evenement: Evenements.Evenement;
			}
		}

		"/api/evenements/get": {
			method: "post";
			args: {
				body: {
					evenementUid: string;
				};
			};
			response: {
				result: "ok";
				evenement: Evenements.Evenement;
			}
		}

		"/api/evenements/all": {
			method: "post";
			args: {
				body: { }
			};
			response: {
				result: "ok";
				evenements: Evenements.Evenement[]
			}
		}

		"/api/evenements/addParticipant": {
			method: "post";
			args: {
				body: {
					evenementUid: string;
					participant: Evenements.ParticipantInstance;
				}
			};
			response: {
				result: "ok";
				evenement: Evenements.Evenement;
			}
		}

		"/api/evenements/addImage": {
			method: "post";
			args:{
				body: {
					evenementUid: string;
				}
			};
			response: {
				result: "ok";
				evenement: Evenements.Evenement;
			}
		}

		"/api/evenements/sendMails": {
			method: "post";
			args: {
				body: {
					evenementUid: string;
				}
			};
			response: {
				result: "ok";
			}
		}
	}
}
