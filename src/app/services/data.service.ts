import { Injectable } from '@angular/core';
import { Skill } from '../models/skill';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  public getSkills(): Observable<Skill[]> {
    return this.http.get<Skill[]>("../../assets/data/skills.json");
  }

}
