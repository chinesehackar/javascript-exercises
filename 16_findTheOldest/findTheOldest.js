const findTheOldest = function(people) {
    const mapped = people.map(person => {
        if (person.yearOfDeath == undefined) {
            const d = new Date()
            const year = d.getFullYear();
            person.yearOfDeath = year;
        }
        return person;
    })
    const sortAge = mapped.sort((a , b) => {
        return (b.yearOfDeath - b.yearOfBirth) - (a.yearOfDeath - a.yearOfBirth);
    })
    return sortAge[0];
};

//for person of people, take person.death - person.birth

//if yearofdeath then year of death - year of birth. return person object

// Do not edit below this line
module.exports = findTheOldest;
