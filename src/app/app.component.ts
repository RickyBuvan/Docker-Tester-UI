import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
	title = 'Docker-Tester-UI';

	collatzConjecture() {
		window.open("http://localhost:8080/collatzConjecture/42");
	}
}