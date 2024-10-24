import reactLogo from "./assets/react.svg";

function App() {

  return (
    <>
      <main>
        <div className="reactInfo">
          <img src={reactLogo} alt="react-logo" />
          <h2 className="sectionTitle">
            Fun facts about React
          </h2>
          <ul>
            <li>
              Was first released in 2013
            </li>
            <li>
              Was originally created by Jordan Walke
            </li>
            <li>
              Has well over 100K starts on Github
            </li>
            <li>
              Is maintained by Facebook
            </li>
            <li>
              Powers thousands of enterprise apps, including mobile apps
            </li>
          </ul>
        </div>
      </main>
    </>
  )
}

export default App
