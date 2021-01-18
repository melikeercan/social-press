import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  search = new FormControl('', [Validators.required]);

  storeForm: FormGroup;
  sources: Array<string>;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.initForm();

    // this is useful to iterate over the form group
    this.sources = Object.keys(this.storeForm.controls.selectedSources.value);
  }

  initForm(): void {
    this.storeForm = this.formBuilder.group({
      name: '',
      selectedSources: this.getSelectedSources()
    });
  }

  getSelectedSources(): FormGroup {
    return this.formBuilder.group({
      Instagram: true,
      Twitter: false,
      Youtube: true
    });
  }

  getErrorMessage(): string {
    return this.search.hasError('required') ? 'You must enter a value' : '';
  }

  onSaveStore(): void {
    console.log('clicked');
  }
}
