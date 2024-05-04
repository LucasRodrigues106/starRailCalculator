export interface IDamageCalculator {

    skillMultiplier: number;
    scallingAtribute: number;

    causedCrit: boolean;
    critDamage: number;

    elementalDamage: number;
    allDamageBoost: number[];//buff de ataque extra,pericia,atq basico

    enemyLevel: number;
    characterLevel: number;
    reductionsEnemyDefense: number[];
    ignoredEnemyDefenses: number[];

    weakAgainstTheElement: boolean;
    characterResistancePenetration: number;
    decreaseResistanceEnemy: number;

    allTypesVulnerabilities: number[];//inimigos sofrem mais dano(ex.:topaz pericia => o inimigo marcado sofre mais dano de ataques extras)

    weaknessBroken: boolean;
}