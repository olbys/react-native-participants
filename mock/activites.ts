import {Activite} from "../types/activite";
import {getRandomIndex, getSeriesOf} from "../utils/utils";


const faker = require("faker");

export const activiteUids: string[] = getSeriesOf<string>(faker.random.uuid, 3);
export const activitesActions: Activite.ActiviteAction[] =
    [
        {
            activiteUid: faker.random.arrayElement(activiteUids),
            type: "Renvoyer document",
            ressourceUid: faker.random.uuid(),
        } as Activite.RenvoyerDocument,
        {
            type: "Quizz",
            ressource: getSeriesOf((): {
                enonce: string;
                status: boolean
            } => {
                return {
                    enonce: faker.random.words(),
                    status: faker.random.boolean(),
                }
            }, 3)
        }
    ]
export const getActivityInstance = (): Activite.ActiviteInstance => {
    return {
        meta: {
            description: faker.random.words(),
            dureeActivite: faker.random.number(),
            nom: faker.random.word(),
            thumbnail: faker.image.animals(),
        },
        originActiviteUid: faker.random.arrayElement(activiteUids),
        action: activitesActions[getRandomIndex(activitesActions)],
    }
}




