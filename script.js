/**
 * Created by h205p2 on 9/20/17.
 */


function myFunction() {
    var zodiac = null;
    var month = document.getElementById("months").value;
    var day = document.getElementById("days").value;
    var name = document.getElementById("noName").value;
    var birthYear = document.getElementById("birthYear").value;
    var daysAreValid = false;
    var day2 = dayst(day);
    var month2 = monthHas(month);
    var distFrom2017 = 2017 - birthYear;
    var chineseZodiac = null;
    if(birthYear > 0 && birthYear != "") {
        if(distFrom2017 % 12 == 0) {
            chineseZodiac = "rooster";
        } else if(distFrom2017 % 12 == 1) {
            chineseZodiac = "monkey";
        } else if(distFrom2017 % 12 == 2) {
            chineseZodiac = "sheep";
        } else if(distFrom2017 % 12 == 3) {
            chineseZodiac = "horse";
        } else if(distFrom2017 % 12 == 4) {
            chineseZodiac = "snake";
        } else if(distFrom2017 % 12 == 5) {
            chineseZodiac = "dragon";
        } else if(distFrom2017 % 12 == 6) {
            chineseZodiac = "rabbit";
        } else if(distFrom2017 % 12 == 7) {
            chineseZodiac = "tiger";
        } else if(distFrom2017 % 12 == 8) {
            chineseZodiac = "ox";
        } else if(distFrom2017 % 12 == 9) {
            chineseZodiac = "rat";
        } else if(distFrom2017 % 12 == 10) {
            chineseZodiac = "pig";
        } else if(distFrom2017 % 12 == 11) {
            chineseZodiac = "dog";
        }
    }

    if(day > month2) {
        final = "That's not a valid day for that month!"
    } else {
        daysAreValid = true;
    }//gives the validity of the day for the month
    if(daysAreValid == true) {
        if(month == 1) {
            if(day>=20) {
                zodiac = "Aquarius";
            } else {
                zodiac = "Capricorn";
            }
        } else if(month == 2) {
            if(day>=19) {
                zodiac = "Pisces";
            } else {
                zodiac = "Aquarius";
            }
        } else if(month == 3) {
            if(day>=21) {
                zodiac = "Aries";
            } else {
                zodiac = "Pisces";
            }
        } else if(month == 4) {
            if (day >= 20) {
                zodiac = "Taurus";
            } else {
                zodiac = "Aries";
            }

        } else if(month == 5) {
            if(day>=21) {
                zodiac = "Gemini";
            } else {
                zodiac = "Taurus";
            }

        } else if(month == 6) {
            if(day>=21) {
                zodiac = "Cancer";
            } else {
                zodiac = "Gemini";
            }
        } else if(month == 7) {
            if(day>=23) {
                zodiac = "Leo";
            } else {
                zodiac = "Cancer";
            }
        } else if(month == 8) {
            if(day>=23) {
                zodiac = "Virgo";
            } else {
                zodiac = "Leo";
            }
        } else if(month == 9) {
            if(day>=23) {
                zodiac = "Libra";
            } else {
                zodiac = "Virgo";
            }
        } else if(month == 10) {
            if(day>=23) {
                zodiac = "Scorpio";
            } else {
                zodiac = "Libra";
            }
        } else if(month == 11) {
            if(day>=22) {
                zodiac = "Sagittarius";
            } else {
                zodiac = "Scorpio";
            }
        } else if(month == 12) {
            if (day>=22) {
                zodiac = "Sagittarius";
            } else {
                zodiac = "Capricorn";
            }
        }
    }//gives zodiac = zodiac

    var final2 = null;
    var final0 = null;
    if(zodiac == "Aquarius") {
        final2 = "You'll get wet.";
        final0 = '<img src="http://www.astrology-zodiac-signs.com/images/aquarius.jpg" alt="Zodiac" style="width:304px;height:304px;">'
    } else if(zodiac == "Pisces") {
        final2 = "You'll smell fishy.";
        final0 = '<img src="http://www.astrology-zodiac-signs.com/images/pisces.jpg" alt="Zodiac" style="width:304px;height:304px;">'
    } else if(zodiac == "Aries") {
        final2 = "You'll run into walls a lot.";
        final0 = '<img src="http://www.astrology-zodiac-signs.com/images/aries.jpg" alt="Zodiac" style="width:304px;height:304px;">'
    } else if(zodiac == "Taurus") {
        final2 = "You'll have a short temper.";
        final0 = '<img src="http://www.astrology-zodiac-signs.com/images/taurus.jpg" alt="Zodiac" style="width:304px;height:304px;">'
    } else if(zodiac == "Gemini") {
        final2 = "You'll meet your soulmate.";
        final0 = '<img src="http://www.astrology-zodiac-signs.com/images/gemini.jpg" alt="Zodiac" style="width:304px;height:304px;">'
    } else if(zodiac == "Cancer") {
        final2 = "You'll get cancer.";
        final0 = '<img src="http://www.astrology-zodiac-signs.com/images/cancer.jpg" alt="Zodiac" style="width:304px;height:304px;">'
    } else if(zodiac == "Leo") {
        final2 = "you'll be territorial.";
        final0 = '<img src="http://www.astrology-zodiac-signs.com/images/leo.jpg" alt="Zodiac" style="width:304px;height:304px;">'
    } else if(zodiac == "Virgo") {
        final2 = "you'll feel pure.";
        final0 = '<img src="http://www.astrology-zodiac-signs.com/images/virgo.jpg" alt="Zodiac" style="width:304px;height:304px;">'
    } else if(zodiac == "Libra") {
        final2 = "You'll be a moderator.";
        final0 = '<img src="http://www.astrology-zodiac-signs.com/images/libra.jpg" alt="Zodiac" style="width:304px;height:304px;">'
    } else if(zodiac == "Scorpio") {
        final2 = "You'll be unhealthy";
        final0 = '<img src="http://www.astrology-zodiac-signs.com/images/scorpio.jpg" alt="Zodiac" style="width:304px;height:304px;">'
    } else if(zodiac == "Sagittarius.") {
        final2 = "You'll be in love.";
        final0 = '<img src="http://www.astrology-zodiac-signs.com/images/sagittarius.jpg" alt="Zodiac" style="width:304px;height:304px;">'
    } else if(zodiac == "Capricorn") {
        final2 = "You'll be great.";
        final0 = '<img src="http://www.astrology-zodiac-signs.com/images/capricorn.jpg" alt="Zodiac" style="width:304px;height:304px;">'
    }
    var final = "you were born on the " + day2 + " of " + monthCall(month) + ", " + name + "!";
    var final1 = "Your Zodiac sign is " + zodiac + ", and your chinese zodiac is " + chineseZodiac + "!";
    document.getElementById("demo").innerHTML = final;
    document.getElementById("demo0").innerHTML = final0;
    document.getElementById("demo1").innerHTML = final1;
    document.getElementById("demo2").innerHTML = final2;
}
function dayst(param1) {
    if(param1 == 1) {
        return "1st";
    } else if(param1 == 2) {
        return "2nd";
    } else if(param1 == 3) {
        return "3rd";
    } else if(param1 == 21) {
        return "21st";
    } else if(param1 == 22) {
        return "22nd";
    } else if(param1 == 23) {
        return "23rd";
    } else if(param1 == 31) {
        return "31st";
    } else {
        return param1 + "th";
    }
}
//returns the day plus "st" "nd" "rd" or "th"
//ie: 4 becomes 4th
function monthHas(param1) {
    if (param1 == 8 || param1 == 3 || param1 == 1 || param1 == 7 || param1 == 5 || param1 == 10 || param1 == 12) {
        return 31;
    } else if (param1 == 2) {
        return 28;
    } else {
        return 30;
    }
}//returns the value of the days in the month
function monthCall(param1) {
    if(param1 == 1) {
        return "January";
    } else if(param1 == 2) {
        return "February";
    } else if(param1 == 3) {
        return "March";
    } else if(param1 == 4) {
        return "April";
    } else if(param1 == 5) {
        return "May";
    } else if(param1 == 6) {
        return "June";
    } else if(param1 == 7) {
        return "July";
    } else if(param1 == 8) {
        return "August";
    } else if(param1 == 9) {
        return "September";
    } else if(param1 == 10) {
        return "October";
    } else if(param1 == 11) {
        return "November";
    } else if(param1 == 12) {
        return "December";
    }
}
