import { User } from "./user";

export const USER_DATA : User[] = [{
  firstName : "bill",
  lastName: "gates",
  dob : new Date('Jan 21, 1965'),
  income : 50000,
  isWorking : true,
  company : "Microsoft",
  imageSrc : "./assets/images/bill.jpg",
  votes : 120
},{
  firstName : "steve",
  lastName: "jobs",
  dob : new Date('Aug 1, 1965'),
  income : 0,
  isWorking : false,
  company : "Apple",
  imageSrc : "./assets/images/steve.jpg",
  votes : 130
},{
  firstName : "tim b",
  lastName: "lee",
  dob : new Date('Dec 10, 1965'),
  income : 30000,
  isWorking : true,
  company : "World Wide Web",
  imageSrc : "./assets/images/tim.jpg",
  votes : 80
}]
