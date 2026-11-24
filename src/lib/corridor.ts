export type TilePose = { x: number; y: number; scale: number; opacity: number; z: number; transform: string };

const clamp01 = (value: number) => Math.min(1, Math.max(0, value));

// progress 0→1 walks a tile along a sweeping arc from the far bottom-left to the near top-right.
export function tilePose(progress: number, width: number, height: number, pointerX: number, pointerY: number): TilePose {
  // Tiles grow as they travel, so spacing must grow too or the near ones pile up.
  const travel = progress ** 1.45;
  const x = width * (0.12 + 0.74 * travel) - 110;
  const y = height * (0.9 - 0.72 * travel) - Math.sin(travel * Math.PI) * height * 0.14 - 60;
  const scale = 0.42 + 0.82 * progress ** 1.15;
  // Fade out early so the nearest tiles never sit under the nav.
  const opacity = Math.min(clamp01(progress / 0.1), clamp01((1 - progress) / 0.13));
  const rotateX = 10 - 8 * progress - pointerY * 6;
  const rotateY = -34 + 14 * progress + pointerX * 8;
  const rotateZ = -12 + 20 * progress;
  return {
    x,
    y,
    scale,
    opacity,
    z: Math.round(progress * 100),
    transform: `translate3d(${x.toFixed(1)}px, ${y.toFixed(1)}px, 0) perspective(1100px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) rotateZ(${rotateZ.toFixed(2)}deg) scale(${scale.toFixed(3)})`,
  };
}
