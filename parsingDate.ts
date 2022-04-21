const parsingDate = () => {
  const curr: Date = new Date();
  const utc: number = curr.getTime() + (curr.getTimezoneOffset() * 60 * 1000);
  const timeMsDiff: number = 9 * 60 * 60 * 1000;
  const koreaTime: Date = new Date(utc + timeMsDiff);
  const now: string = String(koreaTime);
  const split: string[] = now.split(' ');
  const dayNow: string[] = split[4].split(':');

  const parseMM = (month: string): string => {
    if (month === 'Jan') {
      return '1';
    }
    else if (month === 'Feb') {
      return '2';
    }
    else if (month === 'Mar') {
      return '3';
    }
    else if (month === 'Apr') {
      return '4';
    }
    else if (month === 'May') {
      return '5';
    }
    else if (month === 'Jun') {
      return '6';
    }
    else if (month === 'Jul') {
      return '7';
    }
    else if (month === 'Aug') {
      return '8';
    }
    else if (month === 'Sep') {
      return '9';
    }
    else if (month === 'Oct') {
      return '10';
    }
    else if (month === 'Nov') {
      return '11';
    }
    else if (month === 'Dec') {
      return '12';
    }
    else {
      throw new Error ('invalid param');
    }
  }

  const format = {
    YYYY: split[3],
    MM: parseMM(split[1]),
    DD: split[2],
    Days: split[0],
    hh: dayNow[0],
    mm: dayNow[1],
    ss: dayNow[2],
  };

  const date: string = `${format.YYYY}-${format.MM}-${format.DD}`;
  const time: string = `${format.hh}:${format.mm}`;
  const full: string = `${format.YYYY}-${format.MM}-${format.DD} ${format.hh}:${format.mm}`;

  return {format, date, time, full};
};