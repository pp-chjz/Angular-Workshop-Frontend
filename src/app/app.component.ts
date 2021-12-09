import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy{
  
  mobileQueryMax: MediaQueryList;

  private _mobileQueryListener: ()=> void;
  
  //DI
  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher){ //changeDetectorRef = มีการเปลี่ยนแปลงไรบ้าง
    this._mobileQueryListener = () => changeDetectorRef.detectChanges(); //ดักฟังการเปลี่ยนแปลง
    this.mobileQueryMax = media.matchMedia('(max-width: 600px)')
    this.mobileQueryMax.addEventListener('change',this._mobileQueryListener)
  }
  ngOnDestroy(): void {
    this.mobileQueryMax.removeEventListener('change',this._mobileQueryListener)
  }

  onSayHi(text: String){
    // alert(text)
  }
}
