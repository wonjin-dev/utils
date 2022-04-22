const scaledSize = (size: number): number => {
  const baselineWidth: number = 1920;
  const baselineHeight: number = 1080;
  const baseratio: number = baselineWidth / baselineHeight;

  const screenWidth: number = window.outerWidth;
  const screenHeight: number = window.outerHeight;
  const screenRatio: number = screenWidth/screenHeight;

  const ratio: number = screenRatio/baseratio;
  const scaled: number = size * ratio;

  return scaled;
};