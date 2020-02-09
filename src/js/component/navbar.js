import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<div className="container-nav" id="container-nav">
			<div className="cell-left" id="left">
				<button className="button-left" id="Inicio">
					Inicio
				</button>
				<button className="button-left" id="Leads">
					Leads
				</button>
				<button className="button-left" id="Oportunidades">
					Oportunidades
				</button>
				<button className="button-left" id="Calendario">
					Calendario
				</button>
				<button className="button-left" id="Informes">
					Informes
				</button>
			</div>

			<div className="cell-right" id="right">
				<p>Nombre de Usuario</p>
			</div>
		</div>
	);
};
