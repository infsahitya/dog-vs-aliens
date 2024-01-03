import DOG_PLAYER_SPRITE from "../../assets/sprites/shadow_dog.png";

type AnimationStatesConfig =
  | Record<
      (typeof spriteStates)[number]["name"],
      { location: { x: number; y: number }[] }
    >
  | Record<never, never>;

const playerImage: HTMLImageElement = new Image();
playerImage.src = DOG_PLAYER_SPRITE;

const staggerFrame: number = 5;

const spriteWidth: number = 575;
const spriteHeight: number = 523;

const spriteStates = [
  { name: "idle", framesCount: 7 },
  { name: "jump", framesCount: 7 },
  { name: "fall", framesCount: 9 },
  { name: "run", framesCount: 9 },
  { name: "dizzy", framesCount: 11 },
  { name: "sit", framesCount: 5 },
  { name: "roll", framesCount: 7 },
  { name: "bite", framesCount: 7 },
  { name: "ko", framesCount: 12 },
  { name: "getHit", framesCount: 4 },
] as const;

const animationStates: AnimationStatesConfig = {};

spriteStates.forEach((state, index) => {
  const framesLocation: { x: number; y: number }[] = Array.from(
    { length: state.framesCount },
    (_, innerIndex) => {
      return {
        x: innerIndex * spriteWidth,
        y: index * spriteHeight,
      };
    },
  );

  // @ts-ignore
  animationStates[state.name] = { location: framesLocation };
});

console.log(animationStates);

export default {
  playerImage,
  spriteWidth,
  spriteHeight,
  staggerFrame,
  spriteStates,
  animationStates,
};
