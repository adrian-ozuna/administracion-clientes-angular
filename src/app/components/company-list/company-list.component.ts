import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { Company } from '../../../models/company.model';
import { CompanyService } from '../../services/company.service';
import { CommonModule, NgFor } from '@angular/common';
import { ButtonComponent } from "../button/button.component";
import { HeaderComponent } from "../header/header.component";
import { Form, FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { RouterModule } from '@angular/router';


@Component({
    selector: 'app-company-list',
    standalone: true,
    templateUrl: './company-list.component.html',
    styleUrl: './company-list.component.css',
    imports: [CommonModule, ButtonComponent, HeaderComponent, FormsModule, TableModule, ButtonModule, RouterModule],
    schemas: [
      CUSTOM_ELEMENTS_SCHEMA
    ]
})
export class CompanyListComponent implements OnInit {
  companies: Company[] = [];

  constructor(private companyService: CompanyService) {}

  ngOnInit(): void {
    this.companyService.getCompanies().subscribe((data) => {
      this.companies = data;
    })
  }

  deleteCompany(id: number): void {
    this.companyService.deleteCompany(id).subscribe(() => {
      this.companies = this.companies.filter(company => company.id !== id);
    });
  }

  onSubmit(form: Form): void {}
}
