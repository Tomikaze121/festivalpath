import { Component } from '@angular/core';

@Component({
  selector: 'app-rewards',
  templateUrl: './rewards.page.html',
  styleUrls: ['./rewards.page.scss'],
  standalone:false,
})
export class RewardsPage {
  userTips = [
    {
      title: 'Shortcut Behind Stage 3',
      description: 'Saves 15 mins walking through artist alley.',
      timeLeft: '2h 30m'
    },
    {
      title: 'Food Court Path',
      description: 'Avoids congestion near the sponsor booths.',
      timeLeft: '5h 10m'
    }
  ];
}
