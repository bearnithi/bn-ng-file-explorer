import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng-file-explorer';
  folders: Array<any> = [{
    folderName: 'Nithi',
    subFolders: [
      {
        folderName: 'sub 1',
        subFolders: [],
        parentFolder: ''
      }, {
        folderName: 'sub 2',
        subFolders: [],
        parentFolder: ''
      }, {
        folderName: 'sub 3',
        subFolders: [],
        parentFolder: ''
      }
    ],
    parentFolder: ''
  }, {
    folderName: 'Jeff',
    subFolders: [],
    parentFolder: ''
  }, {
    folderName: 'Ragav',
    subFolders: [],
    parentFolder: ''
  }]
}
