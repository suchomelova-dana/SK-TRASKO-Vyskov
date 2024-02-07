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
    type: CompetitionType
    club?: string,
    results?: string,
}

interface Coach {
    name: string,
    level: TrenerskaTrida,
    degree?: string
}

interface Member {
    name: string,
}

interface JudgesList {
    list: Coach[],
    color: string,
    heading: string
}

interface Document {
    title: string,
    document: string,
}

interface Information {
    date: string;
    pdf: string;
    description?: string;
}

interface VyrocniZprava {
    year: number;
    pdf: string
}

export {MenuItem, ZavodyBtn, Competition, Coach, JudgesList, Member, Document, Information, VyrocniZprava}

