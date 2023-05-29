import { Component } from '@angular/core';
import { Storage, ref, getDownloadURL } from '@angular/fire/storage';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-class-ads',
  templateUrl: './class-ads.component.html',
  styleUrls: ['./class-ads.component.css']
})
export class ClassAdsComponent {

  pdfUrl: string = '';
  trustedPdfUrl: SafeResourceUrl  = '';
  loaded: boolean = false;

  constructor(private storage: Storage, private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.getVideo();
  }

  getVideo() {
    const videoRef = ref(this.storage, '/diplomado/diplomado.pdf');
    getDownloadURL(videoRef).then(respose => {
      console.log('PDF URL:', respose);
      this.pdfUrl = respose+'+/preview#toolbar=0';
      this.trustedPdfUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.pdfUrl);
      console.log(this.trustedPdfUrl);
      this.loaded = true;
      console.log(this.pdfUrl)


    }).catch(error => console.error());
  }

}
