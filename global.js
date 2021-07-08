// App constructor
class App {
	constructor() {	
		this.breakpoints = {
			mobileMax: 720,
			tabletPMin: 721,
			tabletPMax: 1023,
			tabletLMin: 1024,
			tabletLMax: 1280,
			desktopMin: 1281,
		} 

		this.getScreenSize = () => {
			if (screen.width >= this.breakpoints.desktopMin) {
				return 'desktop';
			} else if (screen.width <= this.breakpoints.tabletLMax && screen.width >= this.breakpoints.tabletLMin) {
				return 'tabletl';
			} else if (screen.width <= this.breakpoints.tabletPMax && screen.width >= this.breakpoints.tabletPMin) {
				return 'tabletp';
			} else if (screen.width <= this.breakpoints.mobileMax) { 
				return 'mobile';
			}
		}

		this.screenSize = this.getScreenSize();

		this.utils = {
			ScrollEvent,
		}

		this.componentNames = {
			Masthead,
			Slider,
			Counters,
		};

		class DynamicComponent {
			constructor (className, args, components) {
				if (typeof components[className] !== 'function') {
					return false;
				}

				return new components[className](args);
			}
		}

		this.comopnents = [];

		this.mountComponents = () => {
			for (const [compName, compClass] of Object.entries(this.componentNames)) {
				if (typeof compClass === 'function') {
					const component = {};
					const domComponents = document.querySelectorAll(`[data-component='${compName}']`);

					if (domComponents.length > 0) {
						domComponents.forEach((domComp) => {
							component.domElement = domComp;
							component.instance = new DynamicComponent(compName, domComp, this.componentNames);
							component.instance.start();
							this.comopnents.push(component);
						});
					}
				}
			}
		}
	}
}

const app = new App(); 
app.mountComponents();
// DEBUG
// console.log(app);
// console.log(app.screenSize)