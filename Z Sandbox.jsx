function App() {
  const [count, setCount] = React.useState(0)

  const obj = { value: count }

  React.useEffect(() => {
    console.log("effect", obj.value)

    return () => {
      console.log("cleanup", obj.value)
    }
  }, [obj])

  console.log("render", count)

  return (
    <button onClick={() => setCount(count + 1)}>
      Click
    </button>
  )
}

// 1st render logs "render 0", after commit logs "effect 0"
// user clicks so set counts = 1
// 2nd render runs, logs "render 1", after commit logs "effect 1", then logs "cleanup 0"
