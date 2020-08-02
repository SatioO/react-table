import * as namor from "namor";


const RELATIONSHIP = ["SINGLE", "MARRIED"];
export function generateRandomData(total) {
  const data = [];

  for (let i = 0; i < total; i++) {
    data.push({
      name: namor.generate({ words: 3, saltLength: 0 }),
      userId: Math.floor(Math.random() * 1000000),
      clientName: namor.generate({ words: 2, saltLength: 3 }),
      mobile: Math.floor(Math.random() * 10000000000),
      age: Math.random() * (60 - 18) + 18,
      relationship: RELATIONSHIP[Math.round(Math.random())]
    })
  }

  return data;
}