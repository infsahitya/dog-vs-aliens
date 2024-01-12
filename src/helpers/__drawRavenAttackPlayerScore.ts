import { ravenCanvas } from "../components/canvas";
import { ravenAttackPlayerScore } from "../states";

const { CTX } = ravenCanvas;

function __drawRavenAttackPlayerScore() {
  CTX.font = "bold 50px Arial";
  CTX.shadowColor = "black";
  CTX.shadowOffsetX = 1;
  CTX.shadowOffsetY = 1;
  CTX.shadowBlur = 4;

  CTX.fillStyle = "black";
  CTX.fillText(`Score ${ravenAttackPlayerScore}`, 51, 76);
  CTX.fillStyle = "white";
  CTX.fillText(`Score ${ravenAttackPlayerScore}`, 50, 75);
}

export default __drawRavenAttackPlayerScore;
