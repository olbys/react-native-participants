import {Users} from "./users";
import {Activite} from "./activite";

export namespace ModuleTemplate {
    export interface ModuleMeta {
        nom: string;
        description: string;
        dureeModule: string;
        thumbnail: string;
    }

    export interface ModuleTemplate {
        moduleTemplateUid: string;
        meta: ModuleMeta;

        consultantUids: string[]; //Mapping documentUser

        activiteUids: string[]; //Mapping
    }

    export interface ModuleTemplateExtended extends ModuleTemplate {
        consultants: Users.Consultant[]; //Mapping
        activites: Activite.Activite[]; //Mapping
    }

    export interface ModuleInstance {
        originModuleUid: string
        meta: ModuleMeta;

        consultantUids: string[]; //Mapping

        activites: Activite.ActiviteInstance[]; //Instance
    }

    export interface ModuleInstanceExtended extends ModuleInstance {
        consultants: Users.Consultant[]; //Mapping
    }
}
