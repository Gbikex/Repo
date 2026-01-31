export default function App() {
  return (
    <div className="app">
      <p>Welcome from App.js</p>
      <Header />
      <Forms />
      <Tasks />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <div className="header">
      <h1>Hello from Header</h1>
    </div>
  );
}

function Forms() {
  return (
    <div className="forms">
      <div className="forms__btn">
        <button> Add Task</button>
      </div>
      <p>Hello from Form</p>
      <input className="input" type="text" />
      <input className="input" type="text" />
      <input className="input" type="text" />
      <input className="input" type="text" />
      <input className="input" type="text" />
    </div>
  );
}

function Tasks() {
  return (
    <div className="tasks">
      <p>Hello from Tasks</p>
    </div>
  );
}

function Footer() {
  return (
    <div className="footer">
      <p>Hello from Footer</p>
    </div>
  );
}
