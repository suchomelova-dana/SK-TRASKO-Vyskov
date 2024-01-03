import {CompetitionType, TrenerskaTrida} from "@/interfaces/enums";

interface MenuItem {
    name: string,
    link: string,
}

interface ZavodyBtn {
    image: string,
    name: CompetitionType,
    path: string,
    btnColor: string,
    bgColor: string
}

interface Competition {
    name: string,
    date: string,
    club?: string,
    results?: string,
    invitation?: string
}

interface Coach {
    name: string,
    level: TrenerskaTrida,
    degree: string
}

interface JudgesList {
    list: Coach[],
    color: string,
    heading: string
}

export {MenuItem, ZavodyBtn, Competition, Coach, JudgesList}

