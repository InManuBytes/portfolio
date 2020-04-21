const utils = {
  getLoginDate (date) {
    const days = {
      0: 'Sun',
      1: 'Mon',
      2: 'Tue',
      3: 'Wed',
      4: 'Thu',
      5: 'Fir',
      6: 'Sat'
    }
    const months = {
      0: 'Jan',
      1: 'Feb',
      2: 'Mar',
      3: 'Apr',
      4: 'May',
      5: 'Jun',
      6: 'Jul',
      7: 'Aug',
      8: 'Sep',
      9: 'Oct',
      10: 'Nov',
      11: 'Dec'
    }
    const weekday = days[date.getDay()];
    const month = months[date.getMonth()];
    const day = date.getDate();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    const terminalNo = Math.floor(Math.random()*9)
    const loginDate = `${weekday} ${month} ${day} ${hours}:${minutes}:${seconds} on ttys00${terminalNo}`;
    return loginDate;
  }
}

export default utils;
