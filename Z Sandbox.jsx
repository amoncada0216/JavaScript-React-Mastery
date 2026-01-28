async function test() {
  console.log("A");

  const value = await Promise.resolve(1);

  console.log("B", value);

  return value;
}

console.log("C");

test().then((v) => {
  console.log("D", v);
});

console.log("E");


// C
// A
// E
// B 1
// D 1