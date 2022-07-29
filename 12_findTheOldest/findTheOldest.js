const findTheOldest = function(people = []) {

    const ordered = people.sort((a,b) => {
        const currentYear = (new Date()).getFullYear();
        let aAge, bAge;
        if (!a.yearOfDeath) {
            aAge = currentYear - a.yearOfBirth;
        } else {
            aAge = a.yearOfDeath - a.yearOfBirth;
        }
        if (!b.yearOfDeath) {
            bAge = currentYear - b.yearOfBirth;
        } else {
            bAge = b.yearOfDeath - b.yearOfBirth;
        }

        return aAge > bAge ? -1 : 1;
    });

    return ordered[0];
};

// Do not edit below this line
module.exports = findTheOldest;
