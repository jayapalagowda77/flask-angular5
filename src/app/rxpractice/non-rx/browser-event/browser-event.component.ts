import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-browser-event',
  templateUrl: './browser-event.component.html',
  styleUrls: ['./browser-event.component.css']
})
export class BrowserEventComponent implements OnInit {
  hoverSection: HTMLElement;
  subscribe_evt = false;
  constructor() { }

  ngOnInit() {
    this.hoverSection = document.getElementById('hover');
    this.subscribe();
  }

  unsubscribe() {
    console.log('Called unsubscribe');
    this.subscribe_evt = false;
    this.hoverSection.removeEventListener('mousemove', onMouseMove);
  }

  subscribe() {
    this.subscribe_evt = true;
    this.hoverSection.addEventListener('mousemove', onMouseMove);
  }
}

function onMouseMove(e: MouseEvent) {
  const x = document.getElementById('x');
  const y = document.getElementById('y');
  x.innerText = e.x.toString();
  y.innerText = e.y.toString();
}
