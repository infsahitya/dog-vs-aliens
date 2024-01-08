import { PositionCoordinatesProps } from "../constants/__doggo";

function __initEnemyAnimationStates(
  spriteFramesCount: number,
  spriteWidth: number,
): PositionCoordinatesProps[] {
  return Array.from({ length: spriteFramesCount }, (_, index) => {
    return { x: index * spriteWidth, y: 0 };
  });
}

export default __initEnemyAnimationStates;
