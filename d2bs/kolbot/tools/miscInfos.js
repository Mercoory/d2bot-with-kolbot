function main() {

	let miscInfosType = "1",
		fps_active = false;

	this.scriptEvent = function (miscInfosTypeMsg) {
		if (miscInfosTypeMsg.split(" ")[0] == "miscInfos") {
			miscInfosType = miscInfosTypeMsg.split(" ")[1];
		}
	};
	addEventListener("scriptmsg", this.scriptEvent);

	while (true) {
		switch (miscInfosType) {
			case "0":
				me.overhead(" ");
				while (miscInfosType == "0") { delay(20); };
				let self = getScript(true);
				self.stop();
				break;
			case "1":
				if (!fps_active) { say("/fps"); fps_active = true; }
				break;
			case "2":
				if (fps_active) { say("/fps"); fps_active = false; }
				me.overhead("Character X:" + me.x + " Y:" + me.y);
				break;
			case "3":
				me.overhead("Mouse X:" + getMouseCoords(2)[0] + " Y:" + getMouseCoords(2)[0]);
				break;
		}
		delay(20)
	};
}