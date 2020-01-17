import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<div className="container-1" id="containerNavbar">
			<div className="cell-1" id="containerCell1">
				<button className="buttonNav" id="btinicio">
					Inicio
				</button>
				<button className="buttonNav" id="btleads">
					Leads
				</button>
				<button className="buttonNav" id="btcalendario">
					Calendario
				</button>
				<button className="buttonNav" id="btmetricas">
					Métricas
				</button>
				<button className="buttonNav" id="btinformes">
					Informes
				</button>
			</div>

			<div className="cell-2" id="containerCell2">
				<div className="dropdown">
					<button class="dropbtn" id="btdropdownnav">
						Opciones
					</button>
					<div className="dropdown-content" id="dropdown-content">
						<a href="#">Link 1</a>
						<a href="#">Link 2</a>
						<a href="#">Link 3</a>
					</div>
				</div>
			</div>
		</div>
	);
};
