import React from "react";
import Notificaciones from "../component/Notificaciones";

export const Informes = () => {
	return (
		<div className="container-lay" id="lay">
			<div className="functionality" id="functionality">
				<h1>funcionalidad</h1>
			</div>
			<div className="notification" id="notification">
				<Notificaciones />
			</div>
		</div>
	);
};
