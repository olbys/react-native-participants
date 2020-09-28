import {formats} from "../defaultValues";

export namespace Ressource {
	export type VideoFormats = typeof formats.Video[number];
	export type ImageFormats = typeof formats.Image[number];
	export type DocumentFormats = typeof formats.Document[number];

	export type Category = keyof typeof formats;

	export type RessourceType =
		| {
		type: "Video";
		format?: VideoFormats;
		url?: string;
	}
		| {
		type: "Image";
		format?: ImageFormats;
		url?: string;
	}
		| {
		type: "Document";
		format?: DocumentFormats;
		url?: string;
	};

	export interface Ressource {
		ressourceUid: string;
		informations: RessourceType;
		description: string;
		name: string;
		// TODO Arthur fix file
		fileUid: string;
	}
}
