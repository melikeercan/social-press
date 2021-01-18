import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {MatAutocompleteSelectedEvent} from '@angular/material/autocomplete';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {Content} from '../../models/content.model';

@Component({
    selector: 'app-search-bar',
    templateUrl: './search-bar.component.html',
    styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
    storeForm: FormGroup;
    sources: Array<string>;
    searchText: FormControl = new FormControl('', Validators.required);

    options: string[] = ['Title 1', 'Title 2', 'Title 3'];

    filteredOptions: Observable<string[]>;

    constructor(private formBuilder: FormBuilder) {}

    ngOnInit(): void {
        this.initForm();

        // this is useful to iterate over the form group
        this.sources = Object.keys(this.storeForm.controls.selectedSources.value);

        this.filteredOptions = this.searchText.valueChanges.pipe(
            startWith(''),
            map(title => title ? this._filter(title) : this.options.slice())
        );
    }

    initForm(): void {
        this.storeForm = this.formBuilder.group({
            searchText: this.searchText,
            selectedSources: this.getSelectedSources()
        });
    }

    getSelectedSources(): FormGroup {
        return this.formBuilder.group({
            Instagram: true,
            Twitter: true,
            Youtube: true
        });
    }

    getErrorMessage(): string {
        return this.storeForm.controls.searchText.hasError('required') ? 'You must enter a value' : '';
    }

    onSearch(): void {
        console.log('clicked');
        console.log(this.storeForm.controls.searchText.value);
        console.log(this.storeForm.controls.selectedSources.value);
    }

    displayFn(content: string): string {
        return content ? content : '';
    }

    private _filter(title: string): string[] {
        const filterValue = title.toLowerCase();
        return this.options.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
    }
}
