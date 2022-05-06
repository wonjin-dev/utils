const parsingKRPrice = (price?: number): string => {
  if (typeof price !== 'number' || undefined) {
    throw new Error('Please check your type of argument. It muse be Number');
  } else {
    if (typeof price === undefined) {
      return '0';
    } else {
      const convertedPrice: string = price?.toLocaleString('ko-kr');

      return convertedPrice;
    }
  }
};
