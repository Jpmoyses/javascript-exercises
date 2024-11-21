const findTheOldest = function(people) {
    let sorted = people.sort((a, b) => {
        if (a.yearOfDeath === undefined || b.yearOfDeath === undefined) {
            let date = new Date();
            a.yearOfDeath === undefined ? a.yearOfDeath = date.getFullYear() : b.yearOfDeath = date.getFullYear();
        }
        return (a.yearOfDeath - a.yearOfBirth) > (b.yearOfDeath - b.yearOfBirth) ? -1 : 1;
    })
    return sorted[0];
};

// Do not edit below this line
module.exports = findTheOldest;
