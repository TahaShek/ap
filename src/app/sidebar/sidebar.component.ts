import { Component, HostListener, OnInit } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';

// ... rest of the code ...
interface Menu {
  title: string;
  src: string;
  gap?: boolean;
}
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  animations: [
    trigger('sidebarAnimation', [
      state('open', style({ width: '288px' })),
      state('closed', style({ width: '80px' })),
      transition('open <=> closed', animate('1s'))
    ])
  ]
})
export class SidebarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  open = false;
  menus: Menu[] = [
    { title: 'Dashboard', src: 'Chart_fill' },
    { title: 'Inbox', src: 'Chat' },
    { title: 'Schedule', src: 'Calendar' },
    { title: 'Search', src: 'Search' },
    { title: 'Analytics', src: 'Chart' },
    { title: 'Analytics', src: 'Chart' },
    { title: 'Analytics', src: 'Chart' },
    { title: 'Analytics', src: 'Chart' },
    { title: 'Analytics', src: 'Chart' },
    { title: 'Analytics', src: 'Chart' },
    { title: 'Analytics', src: 'Chart' },
    { title: 'Analytics', src: 'Chart' },
    { title: 'Analytics', src: 'Chart' },
    { title: 'Analytics', src: 'Chart' },
    { title: 'Analytics', src: 'Chart' },
    { title: 'Analytics', src: 'Chart' },
    { title: 'Analytics', src: 'Chart' },
    { title: 'Analytics', src: 'Chart' },
    { title: 'Analytics', src: 'Chart' },
    { title: 'Analytics', src: 'Chart' },
    { title: 'Analytics', src: 'Chart' },
    { title: 'Analytics', src: 'Chart' },
    { title: 'Files', src: 'Folder', gap: true }
  ];

  toggleSidebar(): void {
    this.open = !this.open;
  }


}
