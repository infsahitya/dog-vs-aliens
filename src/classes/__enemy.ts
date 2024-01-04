import { enemyCanvas } from "../components/canvas";

interface EnemyProps {
  updateEnemy: () => void;
  drawEnemy: () => void;
}

class __enemy implements EnemyProps {
  private sx: number;
  private sy: number;
  private sw: number;
  private sh: number;
  private speed: number;

  constructor() {
    this.sx = Math.random() * enemyCanvas.WIDTH;
    this.sy = Math.random() * enemyCanvas.HEIGHT;
    this.sw = 100;
    this.sh = 100;
    this.speed = Math.random() * 4 - 2;
  }

  updateEnemy() {
    this.sx += this.speed;
    this.sy += this.speed;
  }

  drawEnemy() {
    enemyCanvas.CTX.strokeRect(this.sx, this.sy, this.sw, this.sh);
  }
}

export default __enemy;
