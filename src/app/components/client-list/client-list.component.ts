import { Component, OnInit } from '@angular/core';
import { ButtonComponent } from "../button/button.component";
import { CommonModule } from '@angular/common';
import { Company } from '../../../models/company.model';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CompanyService } from '../../services/company.service';
import { Client } from '../../../models/client.model';
import { ClientService } from '../../services/client.service';
import { HeaderComponent } from "../header/header.component";
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { SpeedDialModule } from 'primeng/speeddial';
import { MenuItem, MessageService } from 'primeng/api';

@Component({
    selector: 'app-client-list',
    standalone: true,
    templateUrl: './client-list.component.html',
    styleUrl: './client-list.component.css',
    imports: [ButtonComponent, CommonModule, HeaderComponent, TableModule, ButtonModule, RouterModule, SpeedDialModule]
})
export class ClientListComponent implements OnInit {
    company: Company | undefined;
    clients: Client[] = [];
    items: MenuItem[] | undefined

    constructor(
        private route: ActivatedRoute,
        private companyService: CompanyService,
        private clientService: ClientService,
    ) {}


    ngOnInit(): void {
        const id = +this.route.snapshot.paramMap.get('id')!;
        this.companyService.getCompany(id).subscribe(data => {
          this.company = data;
          this.clients = data.clients || [];
        });
    }

    deleteClient(id: number): void {
        this.clientService.deleteClient(id).subscribe(() => {
          this.clients = this.clients.filter(client => client.id !== id);
        });
      }
}
