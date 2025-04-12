import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Company } from '../models/company';
import { Vacancy } from '../models/vacancy';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  base_url = 'http://localhost:8000/api';

  constructor(private client: HttpClient) {}

  getCompanies(): Observable<Company[]> {
    return this.client.get<Company[]>(`${this.base_url}/companies/`);
  }

  getCompanyVacancies(id: number): Observable<Vacancy[]> {
    return this.client.get<Vacancy[]>(`${this.base_url}/companies/${id}/vacancies`);
  }
}
