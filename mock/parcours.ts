import {Parcours} from "../types/parcours";
import {getSeriesOf} from "../utils/utils";
import {ModuleTemplate} from "../types/moduleTemplate";
import {activiteUids, getActivityInstance} from "./activites";
import {Activite} from "../types/activite";

const faker = require("faker");


const consultantUids: string[] = getSeriesOf<string>(faker.random.uuid, 3);
/////////////////// ModuleTemplate
const moduleTemplateUids: string[] = getSeriesOf<string>(faker.random.uuid, 3);
export const getModuleTemplate = (): ModuleTemplate.ModuleTemplate => {
    return {
        moduleTemplateUid: faker.random.arrayElement(moduleTemplateUids),
        meta: {
            description: faker.random.words(),
            dureeModule: faker.random.number(),
            nom: faker.random.word(),
            thumbnail: faker.image.animals(),
        },
        consultantUids: consultantUids,
        activiteUids: activiteUids,
    }
}

////////////////// ModuleInstance
export const getModuleInstance = (): ModuleTemplate.ModuleInstance => {
    return {
        originModuleUid: faker.random.arrayElement(moduleTemplateUids),
        meta: {
            description: faker.random.words(),
            dureeModule: faker.random.number(),
            nom: faker.random.word(),
            thumbnail: faker.image.animals(),
        },
        consultantUids: consultantUids,
        activites: getSeriesOf<Activite.ActiviteInstance>(getActivityInstance, 3),
    }
}
export const getModuleInstanceExtended = (): ModuleTemplate.ModuleInstanceExtended => {
    return {
        ...getModuleInstance(),
        consultants: []
    };
}

/////////////// PARCOURS
const parcoursUID: string[] = getSeriesOf<string>(faker.random.uuid, 3);
export const getParcours = (): Parcours.Parcours => {
    return {
        parcoursUid: faker.random.arrayElement(parcoursUID),
        evaluations: {
            preFormation: {
                activiteUid: faker.random.uuid(),
            },
            satisfactionUids: [faker.random.uuid()],
            acquis: {
                activiteUid: faker.random.uuid(),
            },
        },
        meta: {
            duration: faker.random.number(),
            nom: faker.random.word(),
            pedagogieType: "e-learning",
            thumbnail: faker.image.cats(),
            type: "Formation & Atelier"
        },
        moduleTemplateUids: moduleTemplateUids,
    }
}
export const parcours: Parcours.Parcours[] = getSeriesOf<Parcours.Parcours>(getParcours, 3);
export const getExtended = (parcourUid: string): Parcours.ParcoursExtended => {
    let instance: Parcours.Parcours = parcours.find(
        (item) => item.parcoursUid === parcourUid
    ) as Parcours.Parcours;
    return {
        ...instance,
        modulesExtended: []
    };
};