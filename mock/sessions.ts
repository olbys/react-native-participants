import {Sessions} from "../types/sessions";
import {getRandomIndex, getSeriesOf} from "../utils/utils";
import {ModuleTemplate} from "../types/moduleTemplate";
import {getExtended, getModuleInstance, getModuleInstanceExtended, parcours} from "./parcours";


const faker = require("faker");

export const participantUids: string[] = getSeriesOf<string>(faker.random.uuid, 3);

/////// Session Group
export const getSessionGroup = (): Sessions.SessionGroup => {
    return {
        dateDebut: faker.date.past().toDateString(),
        dateFin: faker.date.past().toDateString(),
        modules: getSeriesOf<ModuleTemplate.ModuleInstance>(getModuleInstance, 2),
        participantUids: participantUids
    }
}
export const groups: Sessions.SessionGroup [] = getSeriesOf(getSessionGroup, 3);
export const getSessionGroupExtended = (group: Sessions.SessionGroup): Sessions.SessionGroupExtended => {
    return {
        ...group,
        participants: [],
        modulesExtended: getSeriesOf(getModuleInstanceExtended, 3),
    };
}


//////// Session Formation
export const getSessionsFormationExtended = (): Sessions.SessionFormationExtended => {
    const parcoursUid = faker.random.arrayElement(parcours).parcoursUid;
    // console.log('item',parcoursUid);
    return {
        entrepriseUid: faker.random.uuid(),
        groups: getSeriesOf(getSessionGroup, 3),
        parcours: getExtended(parcoursUid),
        parcoursUid: parcoursUid,
        sessionUid: faker.random.uuid(),
        groupsExtended: [getSessionGroupExtended(faker.random.arrayElement(groups)),
            getSessionGroupExtended(faker.random.arrayElement(groups))],
    }
}

export const sessionsFormationExtend: Sessions.SessionFormationExtended [] =
    getSeriesOf<Sessions.SessionFormationExtended>(getSessionsFormationExtended, 3);