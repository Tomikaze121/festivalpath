import { Component } from '@angular/core';
import { FirestoreService } from '../services/firestore.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.page.html',
  styleUrls: ['./report.page.scss'],
  standalone: false
})
export class ReportPage {
  shortcut = {
    name: '',
    description: '',
    lat: null,
    lng: null
  };

  constructor(private firestore: FirestoreService) {}

  submitShortcut() {
    if (!this.shortcut.name || !this.shortcut.lat || !this.shortcut.lng) return;

    const data = {
      ...this.shortcut,
      timestamp: Date.now(),
      expiresAt: Date.now() + 4 * 60 * 60 * 1000 // 4 hours
    };

    this.firestore.addShortcut(data).then(() => {
      alert('Shortcut submitted!');
      this.shortcut = { name: '', description: '', lat: null, lng: null };
    });
  }
}
