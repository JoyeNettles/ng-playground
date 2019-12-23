import {Component, OnInit} from '@angular/core';
import {InstagramService} from '../services/instagram.service';

@Component({
  selector: 'app-instagram-container',
  templateUrl: './instagram-container.component.html',
  styleUrls: ['./instagram-container.component.scss']
})
export class InstagramContainerComponent implements OnInit {

  instaMediaUrls: string[] = [];

  constructor(private instagramService: InstagramService) {
  }

  ngOnInit() {
    this.instagramService.getMedia().pipe().subscribe(media => {
        console.log('start');
        this.instaMediaUrls = media.data.filter(m => m.media_type === 'IMAGE').map(image => image.media_url);
        console.log(this.instaMediaUrls);
      },
      e => console.log('error', e)
    );
  }
}
