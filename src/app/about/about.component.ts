import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    performance.mark('mark_fully_loaded');
  }
  ngAfterViewChecked() {
    performance.mark('mark_fully_visible');
  }
}
