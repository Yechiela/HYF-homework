/*WEATHERS WEARS*/
function getClothesToWear(temp){
    if (temp>=60) {
        return "Too hot to go out or you should go naked!"
    } else if (temp >=40) {
        return "You should top-less or half-naked"
    } else if (temp>=30) {
        return "T-Shirt is the right choice!"
    } else if (temp>=20) {
        return "Sweater is cool!"
    } else if (temp>=0) {
        return "You should dress like an Eskimo!"
    } else {
        return "Too cold to go out! you can become the victim of Queen Elsa!"
    }
}