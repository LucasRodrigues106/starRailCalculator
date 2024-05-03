export interface ISkill {
    icon: string,
    name: string,
    type: string,
    tag: string,//ex.: single target,blast,AoE
    energyGeneration: number
    scalling: number[][]
}