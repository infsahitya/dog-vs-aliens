type AttackRavenScoreProps = {
  ravenAttackPlayerScore: number;
  updateRavenAttackPlayerScore: () => void;
};

export let {
  ravenAttackPlayerScore,
  updateRavenAttackPlayerScore,
}: AttackRavenScoreProps = {
  ravenAttackPlayerScore: 0,
  updateRavenAttackPlayerScore: function (): void {
    ++ravenAttackPlayerScore;
  },
};
