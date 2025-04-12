import { Component, OnInit } from '@angular/core';
import { Company } from '../models/company';
import { CompanyService } from '../services/company.service';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-company-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './company-list.component.html',
  styleUrl: './company-list.component.css'
})
export class CompanyListComponent {
  companies: Company[] = [];
  vacancies: any[] = [];
  selectedCompany: Company | null = null;

  constructor(private companyService: CompanyService) {}

  ngOnInit():void {
    this.companyService.getCompanies().subscribe((data) => {
      this.companies = data;
    })
  }

  selectCompany(company: Company): void {
    this.selectedCompany = company;
    this.companyService.getCompanyVacancies(company.id).subscribe(data => {
      this.vacancies = data;
    });
  }
}
