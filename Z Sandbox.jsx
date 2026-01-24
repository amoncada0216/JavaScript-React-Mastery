function App() {
  const [state, setState] = React.useState({ a: { x: 1 } });

  console.log(state.a.x);

  return (
    <button
      onClick={() => {
        const next = { ...state };
        next.a.x = 2;
        setState(next);
      }}
    >
      Update
    </button>
  );
}

// initial render: 1
// click once: 2
