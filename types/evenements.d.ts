export namespace Evenements {

	export interface ParticipantInstance {
		nom: string;
		prenom: string;
		mail: string;
		telephone?: string;
		entreprise?: string;
		fonction?: string;
	}
	export type EventType = "Conférence" | "Webinaire";

	export interface Evenement{
		evenementUid: string;
		ressourceUid: string;
		nom: string;
		type: EventType; 
		horaire: string;
		duree: string;
		nombreParticipantMax: number;
		Localisation: string;
		participants: ParticipantInstance[]; 
		presentation: string;
		prive: boolean;
		roomUid?: string;
		nomAnimateur?: string;
		biographie?: string;
	}
}
