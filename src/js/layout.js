import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import { Clientes } from "./views/Clientes";
import { Oportunidades } from "./views/Oportunidades";
import { Calendario } from "./views/Calendario";
import { Informes } from "./views/Informes";
import { Demo } from "./views/demo";
import { Single } from "./views/single";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { ClientCards } from "./component/ClientCards";
import { AddClients } from "./component/AddClients";

//create your first component
export const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div className="d-flex flex-column h-100">
			<BrowserRouter>
				<ScrollToTop>
					<Navbar />
					<ClientCards />
					<AddClients />
					<Switch>
						<Route exact path="/" component={Home} />
						<Route exact path="/clientes" component={Clientes} />
						<Route exact path="/oportunidades" component={Oportunidades} />
						<Route exact path="/calendario" component={Calendario} />
						<Route exact path="/informes" component={Informes} />
						<Route render={() => <h1>Not found!</h1>} />
					</Switch>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
