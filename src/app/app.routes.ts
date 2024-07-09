import { Routes } from '@angular/router';
import { AddressListComponent } from './components/address-list/address-list.component';
import { ClientListComponent } from './components/client-list/client-list.component';
import { CompanyListComponent } from './components/company-list/company-list.component';
import { AddCompanyComponent } from './components/add-company/add-company.component';

export const routes: Routes = [
    { path: 'companies', component: CompanyListComponent },
    { path: 'companies/find/:id', component: ClientListComponent },
    { path: 'companies/add', component: AddCompanyComponent },
    { path: 'client/add/', component: AddCompanyComponent },
    { path: 'addresses', component: AddressListComponent },
    { path: '', redirectTo: '/companies', pathMatch: 'full' }
  ];