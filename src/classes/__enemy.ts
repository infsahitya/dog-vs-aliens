export interface ENEMY_PROPS {
  update: (deltaTime: number) => void;
  draw: () => void;
}

class __enemy implements ENEMY_PROPS {
  update(deltaTime: number) {}
  draw() {}
}

export default __enemy;
