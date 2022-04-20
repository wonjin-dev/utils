const parsingDate = () => {
  const curr = new Date();
  const utc = curr.getTime() + (curr.getTimezoneOffset() * 60 * 1000);
  const timeMsDiff = 9 * 60 * 60 * 1000;
  const koreaTime = new Date(utc + timeMsDiff);
  const now = String(koreaTime);
  const split = now.split(' ');
  const dayNow = split[4].split(':');

  const parseMM = (month) => {
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
      return console.log('invalid param');
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

  const date = `${format.YYYY}-${format.MM}-${format.DD}`;
  const time = `${format.hh}:${format.mm}`;
  const full = `${format.YYYY}-${format.MM}-${format.DD} ${format.hh}:${format.mm}`;

  return {format, date, time, full};
};