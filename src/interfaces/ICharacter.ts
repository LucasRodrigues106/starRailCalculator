import { ISkill } from "./ISkill";

export interface ICharacter {
    iconImage: string,
    name: string,
    rarity: number,
    path: string,
    damageType: string,
    skills: ISkill[]
}