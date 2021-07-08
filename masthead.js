class Masthead {
	constructor(element) {
		this.$ctx = element;
		
		this.selectors = {
			topBar: '.js-top',
		}	

		this.states = {
			mastheadActive: 'masthead--active',
			topBarHidden: 'masthead__top--hidden'
		}

		this.params = {
			scrollOffset: 150,
			headerPadding: 50,
		}
	}
	start() {
		// Elements
		this.$topBar = this.$ctx.querySelector(this.selectors.topBar);

		// Init
		this.setBody();
		
		// Events
		this.scrollEvent = new app.utils.ScrollEvent(window, this.handleTopBarVisibility, this);		
	}

	setBody() {
		const headHeight = this.$ctx.offsetHeight + this.params.headerPadding;
		document.querySelector('body').style.paddingTop = `${headHeight}px`;
		this.handleTopBarVisibility();
	}

	handleTopBarVisibility() {	
		if (window.scrollY < this.params.scrollOffset) {
			this.$topBar.classList.remove(this.states.topBarHidden);
		} else {
			this.$topBar.classList.add(this.states.topBarHidden);
		}
		this.activateMasthead();
	}

	activateMasthead() {
		this.$ctx.classList.add(this.states.mastheadActive);
	}
}