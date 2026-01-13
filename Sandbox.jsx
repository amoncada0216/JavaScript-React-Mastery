const state = {
  count: 0, // count: 0
  config: {
    mode: null
  },
  increment: function () {
    this.count++;
  }
};

const nextState = {
  ...state,             // count: 2
  config: {
    ...state.config
    }   
};

for (let i = 0; i < 2; i++) {
  nextState.increment();
}

let result;

switch (nextState.config.mode ?? "default") {       // mode: null then "default"
  case "default":
    result = nextState.count === 2 ? "OK" : "FAIL"; // count === 2 then result = "OK"
    break;
  case null:
    result = "NULL";
    break;
  default:
    result = "UNKNOWN";
}

console.log(result);            // "OK"
console.log(state.count);       // 0
console.log(nextState.count);   // 2
