import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {SearchService} from '../../services/search.service';

@Component({
    selector: 'app-search-bar',
    templateUrl: './search-bar.component.html',
    styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
    trends: Array<string>;
    storeForm: FormGroup;
    sources: Array<string>;
    searchText: FormControl = new FormControl('', Validators.required);

    options: string[] = ['JoeBiden', 'Trump', 'Inauguration'];

    filteredOptions: Observable<string[]>;

    constructor(private formBuilder: FormBuilder,
                private searchService: SearchService) {}

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
        this.searchService.makeRequest(this.storeForm.controls.searchText.value);
    }

    displayFn(content: string): string {
        return content ? content : '';
    }

    private _filter(title: string): string[] {
        const filterValue = title.toLowerCase();
        return this.options.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
    }
}
