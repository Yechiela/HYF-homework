/*Event application*/
function getEventWeekday(day) {
    const today=new Date();
    let nextday=new Date();
    nextday.setDate(nextday.getDate()+day);
    const eventDay=nextday.getDay();
    const days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    return days[eventDay];
}