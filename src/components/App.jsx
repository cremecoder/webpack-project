import "../styles/index.scss"
import Child from "./Child"

function App() {
  return (
    <>
      <section className="hero"></section>
      <main>
        <h1>Hi React</h1>
        <Child name="sean" age="30" />
      </main>
    </>
  )
}

export default App
