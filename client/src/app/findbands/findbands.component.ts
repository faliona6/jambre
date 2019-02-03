import { Component, OnInit } from '@angular/core';
import AOS from 'aos';
import 'aos/dist/aos.css';

@Component({
  selector: 'app-findbands',
  templateUrl: './findbands.component.html',
  styleUrls: ['./findbands.component.css', '../app.component.css'],
})
export class FindbandsComponent implements OnInit {

  ngOnInit() {
  	AOS.init();
  }

}
