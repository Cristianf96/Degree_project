import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-records',
  templateUrl: './records.page.html',
  styleUrls: ['./records.page.scss'],
})
export class RecordsPage implements OnInit {
  public records: string;

  slides = [
    {
      title:'MADERA',
      img:'assets/img/MADERAS-PNG.png',
      // eslint-disable-next-line max-len
      information: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.Morbi at arcu. Nunc varius orci in erat. Fusce venenatis est eget arcu sodales tempor. Ut lobortis augue sed elit. Nam neque. Sed et lorem a nunc ultrices molestie. Sed vitae nisi ut odio ornare sollicitudin. Vivamus eget lacus. Morbi consequat, lectus non porttitor porttitor, lorem arcu tincidunt ante, eu laoreet lorem mi ut velit. Vestibulum non neque.'
    },
    {
      title:'METALES',
      img:'assets/img/METALES-PNG.png',
      // eslint-disable-next-line max-len
      information: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Morbi at arcu. Nunc varius orci in erat. Fusce venenatis est eget arcu sodales tempor. Ut lobortis augue sed elit. Nam neque. Sed et lorem a nunc ultrices molestie. Sed vitae nisi ut odio ornare sollicitudin. Vivamus eget lacus. Morbi consequat, lectus non porttitor porttitor, lorem arcu tincidunt ante, eu laoreet lorem mi ut velit. Vestibulum non neque.'
    },
    {
      title:'PAPEL Y CARTON',
      img:'assets/img/PAPELESYCARTON-PNG.png',
      // eslint-disable-next-line max-len
      information: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Morbi at arcuS. Nunc varius orci in erat. Fusce venenatis est eget arcu sodales tempor. Ut lobortis augue sed elit. Nam neque. Sed et lorem a nunc ultrices molestie. Sed vitae nisi ut odio ornare sollicitudin. Vivamus eget lacus. Morbi consequat, lectus non porttitor porttitor, lorem arcu tincidunt ante, eu laoreet lorem mi ut velit. Vestibulum non neque.'
    },
    {
      title:'PLASTICOS',
      img:'assets/img/PLASTICOS-PNG.png',
      // eslint-disable-next-line max-len
      information: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Morbi at arcuS. Nunc varius orci in erat. Fusce venenatis est eget arcu sodales tempor. Ut lobortis augue sed elit. Nam neque. Sed et lorem a nunc ultrices molestie. Sed vitae nisi ut odio ornare sollicitudin. Vivamus eget lacus. Morbi consequat, lectus non porttitor porttitor, lorem arcu tincidunt ante, eu laoreet lorem mi ut velit. Vestibulum non neque.'
    },
    {
      title:'TEXTILES',
      img:'assets/img/TEXTILES-PNG.png',
      // eslint-disable-next-line max-len
      information: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Morbi at arcuS. Nunc varius orci in erat. Fusce venenatis est eget arcu sodales tempor. Ut lobortis augue sed elit. Nam neque. Sed et lorem a nunc ultrices molestie. Sed vitae nisi ut odio ornare sollicitudin. Vivamus eget lacus. Morbi consequat, lectus non porttitor porttitor, lorem arcu tincidunt ante, eu laoreet lorem mi ut velit. Vestibulum non neque.'
    },
    {
      title:'VIDRIOS',
      img:'assets/img/VIDRIOS-PNG.png',
      // eslint-disable-next-line max-len
      information: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Morbi at arcuS. Nunc varius orci in erat. Fusce venenatis est eget arcu sodales tempor. Ut lobortis augue sed elit. Nam neque. Sed et lorem a nunc ultrices molestie. Sed vitae nisi ut odio ornare sollicitudin. Vivamus eget lacus. Morbi consequat, lectus non porttitor porttitor, lorem arcu tincidunt ante, eu laoreet lorem mi ut velit. Vestibulum non neque.'
    }
  ];

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.records = this.activatedRoute.snapshot.paramMap.get('id');
  }

}
