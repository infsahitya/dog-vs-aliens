type AttackRavenGameOverProps = {
  ravenAttackGameOver: boolean;
  setRavenAttackGameOver: (arg: boolean) => void;
};

export let {
  ravenAttackGameOver,
  setRavenAttackGameOver,
}: AttackRavenGameOverProps = {
  ravenAttackGameOver: false,
  setRavenAttackGameOver: (arg: boolean) => {
    ravenAttackGameOver = arg;
  },
};
