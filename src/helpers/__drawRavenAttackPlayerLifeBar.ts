import { ravenCanvas } from "../components/canvas";
import { PositionCoordinatesProps } from "../constants/__doggo";

const { CTX } = ravenCanvas;

function __drawRavenAttackPlayerLifeBar() {
  const boxWidth: number = 300;
  const boxHeight: number = 50;
  const borderRadius: number = 20;
  let counter: number = 50;
  const fillWidth: number = (counter / 100) * boxWidth;

  const lifeBarPosition: PositionCoordinatesProps = {
    x: ravenCanvas.WIDTH - boxWidth - 50,
    y: 50,
  };

  const fillGradient: CanvasGradient = CTX.createLinearGradient(
    lifeBarPosition.x,
    lifeBarPosition.y,
    lifeBarPosition.x + boxWidth,
    lifeBarPosition.y,
  );
  fillGradient.addColorStop(0, "lightgreen");
  fillGradient.addColorStop(1, "red");

  CTX.lineWidth = 3;
  CTX.shadowColor = "transparent";
  CTX.shadowOffsetX = 0;
  CTX.shadowOffsetY = 0;
  CTX.shadowBlur = 0;

  CTX.strokeStyle = "black";
  CTX.beginPath();
  CTX.moveTo(lifeBarPosition.x + borderRadius, lifeBarPosition.y);
  CTX.arcTo(
    lifeBarPosition.x + boxWidth,
    lifeBarPosition.y,
    lifeBarPosition.x + boxWidth,
    lifeBarPosition.y + boxHeight,
    borderRadius,
  );
  CTX.arcTo(
    lifeBarPosition.x + boxWidth,
    lifeBarPosition.y + boxHeight,
    lifeBarPosition.x,
    lifeBarPosition.y + boxHeight,
    borderRadius,
  );
  CTX.arcTo(
    lifeBarPosition.x,
    lifeBarPosition.y + boxHeight,
    lifeBarPosition.x,
    lifeBarPosition.y,
    borderRadius,
  );
  CTX.arcTo(
    lifeBarPosition.x,
    lifeBarPosition.y,
    lifeBarPosition.x + boxWidth,
    lifeBarPosition.y,
    borderRadius,
  );
  CTX.closePath();
  CTX.stroke();

  // Save the current context state
  CTX.save();

  // Create a clipping region based on the fill width
  CTX.beginPath();
  CTX.moveTo(lifeBarPosition.x + borderRadius, lifeBarPosition.y);
  CTX.arcTo(
    lifeBarPosition.x + fillWidth,
    lifeBarPosition.y,
    lifeBarPosition.x + fillWidth,
    lifeBarPosition.y + boxHeight,
    borderRadius,
  );
  CTX.arcTo(
    lifeBarPosition.x + fillWidth,
    lifeBarPosition.y + boxHeight,
    lifeBarPosition.x,
    lifeBarPosition.y + boxHeight,
    borderRadius,
  );
  CTX.arcTo(
    lifeBarPosition.x,
    lifeBarPosition.y + boxHeight,
    lifeBarPosition.x,
    lifeBarPosition.y,
    borderRadius,
  );
  CTX.arcTo(
    lifeBarPosition.x,
    lifeBarPosition.y,
    lifeBarPosition.x + fillWidth,
    lifeBarPosition.y,
    borderRadius,
  );
  CTX.closePath();
  CTX.clip();

  // Fill the clipped region with the fill color
  CTX.fillStyle = fillGradient;
  CTX.fillRect(lifeBarPosition.x, lifeBarPosition.y, boxWidth, boxHeight);

  // Restore the context state
  CTX.restore();
}

export default __drawRavenAttackPlayerLifeBar;
