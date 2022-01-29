import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmailComposer } from '@ionic-native/email-composer/ngx';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
})
export class ContactPage implements OnInit {
  public contact: string;
  subject = '';
  body = '';

  constructor(private activatedRoute: ActivatedRoute, public emailComposer: EmailComposer) { }

  ngOnInit() {
    this.contact = this.activatedRoute.snapshot.paramMap.get('id');
  }

  send(){
    const email = {
      to: 'cb961218@gmail.com',
      cc: [],
      bcc: [],
      attachments: [],
      subject: this.subject,
      body: this.body,
      isHtml: false,
      app: 'gmail'
    };
    this.emailComposer.open(email);
  }

}
