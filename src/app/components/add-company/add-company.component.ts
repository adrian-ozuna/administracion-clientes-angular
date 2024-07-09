import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { ButtonModule } from 'primeng/button';

@Component({
    selector: 'app-add-company',
    standalone: true,
    templateUrl: './add-company.component.html',
    styleUrl: './add-company.component.css',
    imports: [HeaderComponent, FormsModule, ButtonModule]
})
export class AddCompanyComponent {
    onSubmit(form: any): void {
        console.log('Form submitted!', form.value);
    }
}
