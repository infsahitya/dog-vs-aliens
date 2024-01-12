import { setRavenAttackGameOver } from ".";

type AttackRavenLifeProps = {
  ravenAttackPlayerLife: number;
  updateRavenAttackPlayerLife: (state: "+" | "-") => void;
};

export let {
  ravenAttackPlayerLife,
  updateRavenAttackPlayerLife,
}: AttackRavenLifeProps = {
  ravenAttackPlayerLife: 100,
  updateRavenAttackPlayerLife: (state: "+" | "-"): void => {
    if (state === "+" && ravenAttackPlayerLife < 100)
      ravenAttackPlayerLife += 5;
    if (state === "-" && ravenAttackPlayerLife > 0) ravenAttackPlayerLife -= 5;

    if (ravenAttackPlayerLife === 0) setRavenAttackGameOver(true);
  },
};
