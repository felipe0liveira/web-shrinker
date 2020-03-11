import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ShrinkerService } from './services/shrinker-service/shrinker.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  shrinkForm: FormGroup;

  constructor(public shrinker: ShrinkerService) {
    this.shrinkForm = new FormGroup({
      url: new FormControl('https://felipe0liveira.dev/', [Validators.minLength(8), Validators.required])
    });
  }

  async submit() {
    const short = await this.shrinker.shrink(this.shrinkForm.value.url);
    const url = `http://localhost:5000/shrink/${short}`;

    if (confirm(`Your URL was shrinked and it\'s available at:\n${url}\n\nDo you want to access?`)) {
      window.open(url);
    }
  }
}
