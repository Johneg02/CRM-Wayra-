import React from "react";
import Notificaciones from "../component/Notificaciones";

export const Calendario = () => {
	return (
		<div className="container-lay" id="lay">
			<div className="functionality" id="functionality">
				<div className="calendar-container" id="calendarContainer">
					<div className=" calendar-header" id="CalendarHeader">
						<span className="calendar-month-year" id="CalendarMonthYear" />
					</div>
					<div className="calendar-dates" id="calendarDates" />
				</div>
			</div>
                { //calendar related code
                    window.onload = function() {
                        var d = new Date ();
                        var month_name = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];
                        var month = d.getMonth(); //0 -11 due to 12 months
                        var year = d.getFullYear();
                        var first_date = month_name[month] + " " + 1 + " " + year;
                        var tmp = new Date(first_date).toDateString();
                        var first_day = tmp.substring(0,3);
                        var day_name = ['Dom','Lun','Mar','Mie','Jue','Vie','Sab'];
                        var day_no = day_name.indexOf(first_day);
                        var days = new Date(year, month+1, 0).getDate();  
                        var calendar = get_calendar(day_no, days);
                        document.getElementById("calendarMonthYear").innerHTML = month_name[month]+" "+ year;
                        document.getElementById("calendarDates").appendChild(calendar); 
                    }
                    function get_calendar(day_no, days) {
                        var table = document.createElement('table');
                        var tr = document.createElement('tr');
                        for (var = 0; c<=6; c++) {
                            var td = document.createElement('td');
                            td.innerHTML = "DLMMJVS"[c];
                            tr.appendChild(td);
                        }
                    }
                    table.appendChild(tr);
                    tr = document.createElement('tr');
                    var c;
                    for (c=0; c<=6; c++) {
                        if(c == day_no) {
                            break;
                        }
                        var td = document.createElement('td');
                        td.innerHTML ="";
                        tr.appendChild(td);
                    }
                    var count = 1;
                    for(; c<=6; c++) {
                        var td = document.createElement('td');
                        td.innerHTML = count;
                        count++;
                        tr.appendChild(td);
                    }
                    table.appendChild(tr);
                    for(var r=3; r<=6; r++) {
                        tr = document.createElement('tr');
                        for(var c=0; c<=6; c++) {
                            if (count > days) {
                                table.appendChild('tr');
                                return table; 
                            }
                            var td = document.createElement('td');
                            td.innerHTML = count; 
                            count++;
                            tr.appendChild(td);
                        }
                        table.appendChild(tr);
                    } 
                }
			<div className="notification" id="notification">
				<Notificaciones />
			</div>
		</div>
	);
};
