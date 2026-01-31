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
      <p>Hello from Form</p>
      <input type="text" />
      <input type="text" />
      <input type="text" />
      <input type="text" />
      <input type="text" />
    </div>
  );
}

function Tasks() {
  return (
    <div>
      <p>Hello from Tasks</p>
    </div>
  );
}

function Footer() {
  return (
    <div>
      <p>Hello from Footer</p>
    </div>
  );
}
