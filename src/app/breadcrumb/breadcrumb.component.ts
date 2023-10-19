import { Component, OnInit } from '@angular/core';
// import { BreadcrumbService } from './breadcrumb.service';
import { Router } from '@angular/router';
import { BreadcrumbService } from '../breadcrumb.service';

@Component({
  selector: 'app-breadcrumb',
  template: `
    <ng-container *ngFor="let breadcrumb of breadcrumbs; let last = last">
      <ng-container *ngIf="!last">
        <a (click)="navigate(breadcrumb)">{{ breadcrumb }}</a> >
      </ng-container>
      <ng-container *ngIf="last">
        {{ breadcrumb }}
      </ng-container>
    </ng-container>
  `,
})
export class BreadcrumbComponent implements OnInit {
  breadcrumbs: string[] = [];

  constructor(private breadcrumbService: BreadcrumbService, private router: Router) {}

  ngOnInit() {
    this.breadcrumbService.breadcrumbs$.subscribe((breadcrumbs) => {
      this.breadcrumbs = breadcrumbs;
    });
  }

  navigate(url: string) {
    this.router.navigateByUrl(url); // Use navigateByUrl to navigate to the specified URL
  }
}
