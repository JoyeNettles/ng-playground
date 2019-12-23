import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Instamedia} from '../models/instamedia';

@Injectable({
  providedIn: 'root'
})
export class InstagramService {
  private token = 'IGQVJVb1VkYVR2VzI5TzNZAb2NHZA1VkaFJUa0xCMXprY2pva1VxMXVwUzlIVVRqUDBSbGhfT3RwQVZAieEVVckdiUTlJTGs4M3d3TWdzRkt0cVFPdTdGY215WVVKay1oSmo1NjgxYjV3';
  private retrieveMediaBaseUrl = 'https://graph.instagram.com/me/media?fields=id,media_type,media_url&access_token=';

  constructor(private http: HttpClient) {
  }

  getMedia(): Observable<any> {
    return this.http.get<any>(this.retrieveMediaBaseUrl + this.token);
  }
}
