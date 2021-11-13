import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection : ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  title = 'users-app';
  showComp : boolean = true;
  constructor(private sanitize : DomSanitizer, private cdRef : ChangeDetectorRef){
    // this.sanitize.
    // this.cdRef.detach()
    // this.cdRef.reattach()
  }
}
