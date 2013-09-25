//import ceylon.js.jquery { JQueryAbs, JQuery }
import ceylon.js.json { JSJSON }
import ceylon.js.language { DataDescriptor, JSObject, createJSObject }


/*shared JQuerySpin spin(JQuery jq) {
	dynamic {
		dynamic native = jq.native;
		if (native.spin == \iundefined || native.spin == \inull) {
			throw Exception("jQuery Spin Library was not found. Did you make sure to include jQuery Spin?");
		} else {
			return JQuerySpin(native);
		}
	}
}

shared abstract class SpinDirection(shared Integer direc) of clockwise | counterclockwise {}

shared object clockwise extends SpinDirection(1) {}
shared object counterclockwise extends SpinDirection(-1) {}


shared class SpinOptions(shared Integer lines = 13, shared Integer length = 20, shared Integer width = 10,
					shared Integer radius = 30, shared Float corners = 1.0, shared SpinDirection direction = clockwise,
					shared String color = "#000", shared Integer|Float speed = 1, shared Integer trail = 60, 
					shared Boolean shadow = false, shared Boolean hardwareAccel = false, shared String className = "spinner",
					shared Integer zIndex = 2000000000, shared Integer|String top = "auto", shared Integer|String left = "auto") {
	
	shared JSJSON toJson() {
		JSObject json = createJSObject();
		dynamic {
			json.native.lines = lines;
			json.native.length = length;
			json.native.width = width;
			json.native.radius = radius;
			json.native.corners = corners;
			json.native.direction = direction.direc;
			json.native.color = color;
			json.native.speed = speed;
			json.native.trail = trail;
			json.native.shadow = shadow;
			json.native.hwaccel = hardwareAccel;
			json.native.zIndex = zIndex;
			json.native.top = top;
			json.native.left = left;
			return JSJSON(json.native);
		}
	}
}

shared abstract class JQuerySpinAbs() extends JQueryAbs() {
	
	shared void spin(SpinOptions? options = null) {
		dynamic {
			if (exists o = options) {
				native.spin(o.toJson());
			} else {
				native.spin();
			}
		}
	}
	
	shared void spinPreset(String name, String? color = null) {
		dynamic {
			native.spin(name, color);
		}
	}
	
	shared void spinStop() {
		dynamic {
			native.spin(false);
		}
	}
	
	shared void spinSetPreset(String name, SpinOptions options) {
		dynamic {
			objectDefineProperty(jQuery.spin.presets, name, DataDescriptor(true, false, true, true, options.toJson())); 	
		}
	}
	
}

shared class JQuerySpin(dynamic n) extends JQuerySpinAbs() {
	shared actual dynamic native;
	dynamic {
		native = n;
	}
}