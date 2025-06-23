import { Component, OnInit } from '@angular/core';
import { FirestoreService } from '../services/firestore.service';

@Component({
  selector: 'app-rewards',
  templateUrl: './rewards.page.html',
  styleUrls: ['./rewards.page.scss'],
  standalone: false
})
export class RewardsPage implements OnInit {
  shortcuts: any[] = [];
  Date = Date; 

  constructor(private firestore: FirestoreService) {}

  ngOnInit() {
  this.firestore.getShortcuts().subscribe(data => {
    console.log('🔥 Raw shortcuts:', data);
    const now = Date.now();
    this.shortcuts = data.filter(s =>
      s.name && s.lat && s.lng && s.expiresAt > now
    );
  });
}

}


