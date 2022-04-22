import {Dimensions} from 'react-native';

const scaledSize = (size: number): number => {
  const {width, height} = Dimensions.get('window');
  const baselineWidth: number = 270;
  const baselineHeight: number = 555;
  const baseRatio: number = baselineHeight / baselineWidth;
  const screenRatio:number = height / width;
  
  const scaled:number = screenRatio / baseRatio;

  return scaled;
};