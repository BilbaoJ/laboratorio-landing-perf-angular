import { AfterContentInit, Component, Input } from '@angular/core';
import { Source } from '../../models/source.model';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
})
export class ImgComponent implements AfterContentInit {

  @Input() path = '';
  @Input() alt = '';
  sources: Source[] = [];

  ngAfterContentInit(): void {
    this.generateSizes();
  }

  generateSizes(){
    const splitPath = this.path.split('/');
    const fullName = splitPath.pop();
    const path = splitPath.join('/');
    const splitName = fullName?.split('.') ?? [];
    const ext = splitName.pop();
    const name = splitName.pop();
    this.sources = [
      {
        path: `${path}/${name}-large.webp`,
        media: '(max-width: 2000px)'
      },
      {
        path: `${path}/${name}-medium.webp`,
        media: '(max-width: 640px)'
      },
      {
        path: `${path}/${name}-small.webp`,
        media: '(max-width: 200px)'
      },
      {
        path: `${path}/${name}-large.${ext}`,
        media: '(max-width: 2000px)'
      },
      {
        path: `${path}/${name}-medium.${ext}`,
        media: '(max-width: 640px)'
      },
      {
        path: `${path}/${name}-small.${ext}`,
        media: '(max-width: 200px)'
      },
    ];
  }


}
