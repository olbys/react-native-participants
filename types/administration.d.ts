export namespace Administration {
    export type TypeActionFormation = "A" | "B" | "C"; // TODO : Arthur : replace with right values

    export interface Article {
        designation: string;
        quantite: number;
        prixuht: number;
        prixht: number;
    }

    export interface Person {
        firstname: string;
        lastname: string;
    }

    export interface Total {
        totalht: number;
        tva: number;
        totalttc: number;
    }

    export interface Avoir extends Total {
        dateAvoir: string;
        numeroAvoir: number;
        destinataire: string;
        addresseDestinataire: string;
        intitule: string;
        client?: string;
        description?: string;
        articles: Article[];
    }

    export interface Devis extends Total {
        dateDevis: string;
        destinataire: string;
        addresseDestinataire: string;
        intitule: string;
        typeAction: TypeActionFormation;
        duree: string;
        dateDebut: string;
        dateFin: string;
        lieuFormation: string;
        effectif: number;
        articles: Article[];
    }

    export interface Facture extends Total {
        dateFacture: string;
        numeroFacture: number;
        destinataire: string;
        addresse: string;
        intitule: string;
        lieu: string;
        debut: string;
        fin: string;
        duree: string;
        formateurs: Person[];
        articles: Article[];
        dateEcheance: string;
    }
}
