import { Component, input } from '@angular/core';

@Component({
  selector: 'app-page-header',
  styleUrl: './page-header.css',
  templateUrl: './page-header.html',
})
export class PageHeaderComponent {
  readonly eyebrow = input.required<string>();
}