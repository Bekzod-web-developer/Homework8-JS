let cars = [{
    model: "Lacetti",
    color: "white",
    cost: 13000
},
{
    model: "malibu",
    color: "white", 
    cost: 24000, 
},
{
    model: "Vaz 2107",
    color: "black", 
    cost: 55000, 
},
{
    model: "Rolls Roys",
    color: "Red",
    cost: 23000
},
{
    model: "Lamborgini",
    color: "blue",
    cost: 30000 
},
{
    model: "cobalt",
    color: "black", 
    cost: 1000, 
},
{
    model: "nexia",
    color: "red", 
    cost: 6000, 
},
{
    model: "taxo",
    color: "darkblue",
    cost: 85000,
},
{
    model: "captiva",
    color: "white",
    cost: 25000,
},
{
    model: "trailblazer",
    color: "black",
    cost: 70000,
},
{
    model: "Toyota supra",
    color: "orange",
    cost: 50000
},
{
    model: "Dodge",
    color: "blueviolet",
    cost: 30000
},
{
    model: "Porsche taycan",
    color: "white",
    cost: 15000
},
{
    model: "tesla",
    color: "grey",
    cost: 5000
},
{
    model: "R34 GTR",
    color: "blue",
    cost: 7000
},
{ 
   model: "BMW M4 competition",
   color: "black",
   cost: 40000
}]
let cheap = cars.filter(item => item.cost < 7000)
console.log(cheap)


let arr = [4,16,19,22,11,144,967,19124]
let even = arr.filter(item => item % 2 === 0)
let odd = arr.filter(item => item % 2 ===1)
console.log(
    odd + " " + "and" + " " +even 
)

let people = [
    {
        id: Math.random(),
        name: 'Timur',
        info: {
            school: '235',
            faculity: 'SMM'
        },
    },
    {
        id: Math.random(),
        name: 'Imran',
        info: {
            school: 'ne izvestno',
            faculity: 'programming'
        },
    },
    {
        id: Math.random(),
        name: 'Aminjon',
        info: {
            school: '444',
            faculity: 'Dizayn'
        },
    },
    {
        id: Math.random(),
        name: 'Maxmud',
        info: {
            school: '777',
            faculity: '3dsmax'
        },
    },
    {
        id: Math.random(),
        name: 'Muxammad',
        info: {
            school: '5555',
            faculity: 'Backend'
        },
    },
    {
        id: Math.random(),
        name: 'Timur',
        info: {
            school: '235',
            faculity: 'SMM'
        },
    },
    {
        id: Math.random(),
        name: 'Imran',
        info: {
            school: 'ne izvestno',
            faculity: 'programming'
        },
    },
    {
        id: Math.random(),
        name: 'Aminjon',
        info: {
            school: '444',
            faculity: 'Dizayn'
        },
    },
    {
        id: Math.random(),
        name: 'Maxmud',
        info: {
            school: '777',
            faculity: '3dsmax'
        },
    },

    {
        id: Math.random(),
        name: 'Maxmud',
        info: {
            school: '777',
            faculity: '3dsmax'
        },
    },
    {
        id: Math.random(),
        name: 'Muxammad',
        info: {
            school: '5555',
            faculity: 'Backend'
        },
    },
]

//let categories = [
//    {
//        course: ' SMM',
//        count: 0
//    },
//    {
//        course: 'PROGRAMMING',
//        count: 0
//    },
//    {
//        course: '     3DSMAX',
//        count: 0
//    },
//    {
//        course: ' DIZAYN',
//        count: 0
//    },
//    {       
//        course: '   BACKEND',
//        count: 0
//    },
//]
let Dizayn = people.filter(item => item.info.faculity === 'Dizayn')
let BackEnd = people.filter(item => item.info.faculity === 'Backend')
let DsMax = people.filter(item => item.info.faculity === '3dsmax')
let Programming =  people.filter(item => item.info.faculity === 'programming')
console.log(
    Dizayn +
    BackEnd +
    DsMax +
    Programming

)
