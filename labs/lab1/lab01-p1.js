import lodash from "lodash";

const holiday = [
    { name: "Christmass", data: new Date("2025-12-25")},
    { name: "Christmass", data: new Date("2025-07-01")},
    { name: "Christmass", data: new Date("2025-04-01")},
];

let today = new Date();

holiday.map((item) => {
    let dateDifference = item.date -today;
    return console.log(Math.ceil(dateDifference / (1000 * 60 * 60 * 24)));
});

let random_holiday = lodash.sample(holiday);
console.log(random_holiday);

console.log(lodash.findIndex(holidays, { name: "Christmas" }));
console.log(lodash.findIndex(holidays, { name: "Canada day" }));
// console.log(lodash.findIndex(holidays, { name: "Christmas" }))

