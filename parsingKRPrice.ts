const parsingKRPrice = (price: number): string => {
  if (typeof price === 'number'){
    const convertedPrice: string = price.toLocaleString('ko-kr');
    
    return convertedPrice;
  } else {
    throw new Error('Please check your type of argument. It muse be Number');
  }
};