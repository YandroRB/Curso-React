export function formatDate(dateString) {
    const date = new Date(dateString)
    const options = { month: 'long', day: 'numeric', year: 'numeric', hour: 'numeric', minute: '2-digit', hour12: true };
    const parts = new Intl.DateTimeFormat('es', options).formatToParts(date);
  
    let day, month, year, hour, minute, dayPeriod;
    for (const part of parts) {
        switch(part.type) {
            case 'day':
                day = part.value;
                break;
            case 'month':
                month = part.value;
                break;
            case 'year':
                year = part.value;
                break;
            case 'hour':
                hour = part.value;
                break;
            case 'minute':
                minute = part.value;
                break;
            case 'dayPeriod':
                dayPeriod = part.value;
                break;
        }
    }
  
    // Construye el formato deseado
    return `${month} ${day}, ${year} ${hour}:${minute} ${dayPeriod}`;
  }

export function FilterObject(array,filterBy,property){
    return array.filter(element=>element[property]===filterBy);
}