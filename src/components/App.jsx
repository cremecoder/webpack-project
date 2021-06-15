import "../styles/index.scss"
import Child from "./Child"
import bolt from "../images/thunder-icon.svg"

function App() {
  return (
    <>
      <section className="hero"></section>
      <main>
        <h1>Hi React</h1>
        <img src={bolt} alt="thunder-bolt" width="250" />
        <Child name="bob" age="97" />
      </main>
    </>
  )
}

export default App
