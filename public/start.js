/**
* Initial script for https://matthias.beitl.net/
*/

(function() {
	"use strict";

	if (navigator.serviceWorker) {
		navigator.serviceWorker.register("/sw.js");
		if (!navigator.onLine) {
			var msg = document.querySelector("[role=alert]");
			if (msg) {
				msg.remove();
			}
			msg = document.createElement("section");
			msg.setAttribute("class", "screen");
			msg.setAttribute("role", "alert");
			msg.textContent = "You are ";
			msg.appendChild(function () {
				var status = document.createElement("i");
				status.textContent = "offline";
				return status;
			}());
			document.querySelector("body").prepend(msg);
		}
	}

})();