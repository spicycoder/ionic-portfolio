import { Injectable } from '@angular/core';
import { Skill } from '../models/skill';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Experience } from '../models/experience';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  public getSkills(): Observable<Skill[]> {
    return this.http.get<Skill[]>("../../assets/data/skills.json");
  }

  public getExperiences(): Observable<Experience[]> {
    return this.http.get<Experience[]>("../../assets/data/experience.json");
  }

}
