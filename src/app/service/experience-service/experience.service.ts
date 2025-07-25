import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Experience {
  id?: number;
  role: string;
  company: string;
  jobType: 'FULL_TIME' | 'PART_TIME' | 'INTERNSHIP' | 'FREELANCE';
  startDate: Date;
  endDate?: Date;
  description: string;
  location:string;
}


@Injectable({
  providedIn: 'root'
})
export class ExperienceService {
  private apiUrl = 'http://localhost:9091/api/experiences';

  constructor(private http: HttpClient) { }

  getExperiences(): Observable<Experience[]> {
    return this.http.get<Experience[]>(this.apiUrl);
  }

  getExperienceById(id: number): Observable<Experience> {
    return this.http.get<Experience>(`${this.apiUrl}/${id}`);
  }

  addExperience(experience: Experience): Observable<Experience> {
    return this.http.post<Experience>(this.apiUrl, experience, {
      withCredentials: true
    });
  }

  updateExperience(id: number, experience: Experience): Observable<Experience> {
    return this.http.put<Experience>(`${this.apiUrl}/${id}`, experience, {
      withCredentials: true
    });
  }

  deleteExperience(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`, {
      withCredentials: true
    });
  }
}
