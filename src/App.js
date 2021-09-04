import "./App.scss";
import Navbar from "./navbar/Navbar";
import Footer from "./footer/Footer";
import Menu from "./utils/Menu";

function App() {
	return (
		<div className="app">
			{/* <h1>App</h1> */}
			<Navbar />
			<Footer />
			{/* <Menu /> */}
		</div>
	);
}

export default App;
