import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<div className="container-nav" id="container-nav">
			<div className="cell-left" id="left">
				<Link to="/" className="button-left">
					Inicio
				</Link>
				<Link to="/clientes" className="button-left">
					Clientes
				</Link>
				<Link to="/oportunidades" className="button-left">
					Oportunidades
				</Link>
				<Link to="/calendario" className="button-left">
					Calendario
				</Link>
				<Link to="/informes" className="button-left">
					Informes
				</Link>
			</div>

			<div className="cell-right" id="right">
				<p>Nombre de Usuario</p>
			</div>
		</div>
	);
};
