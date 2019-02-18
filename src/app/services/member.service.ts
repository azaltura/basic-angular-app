import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class MemberService {

  constructor(private httpClinet: HttpClient) { }

  memberData(): Observable<any> {
    return this.httpClinet.get(environment.serverUrlAuth + 'members')
      
    }
  }
