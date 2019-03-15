/*WEATHERS WEARS*/
function getClothesToWear(temp){
    if (temp>=60) {
        return "Too hot to go out! you will melt!"
    } else if (temp >=40) {
        return "You should top-less or half-naked"
    } else if (temp>=30) {
        return "T-Shirt is good!"
    } else if (temp>=20) {
        return "Sweater is ok!"
    } else if (temp>=0) {
        return "You should dress like Eskimo!"
    } else {
        return "Too cold to go out! you will die!"
    }
}