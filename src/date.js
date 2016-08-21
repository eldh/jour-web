const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July',
  'August', 'September', 'October', 'November', 'December']

export function getDateString(date) {
  return `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`
}

export function getDateFromString(str) {
  return new Date(...str.split('-'))
}

export function getHumanDateString(dateStr) {
  const date = getDateFromString(dateStr)
  return `${days[date.getDay()]}, ${months[date.getMonth()]} ${date.getDate()}`
}

export function getShortHumanDateString(dateStr) {
  const date = getDateFromString(dateStr)
  return `${months[date.getMonth()]} ${date.getDate()}`
}
