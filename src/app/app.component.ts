import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng-file-explorer';
  folders: Array<any> = [{
    name: 'Nithi',
    type: 'FOLDER',
    subFolders: [
      {
        name: 'sub 1',
        subFolders: [
          {
            name: 'song1.mp3',
            type: 'FILE',
            parentFolder: ''
          },
          {
            name: 'song2.mp3',
            type: 'FILE',
            parentFolder: ''
          },
          {
            name: 'song3.mp3',
            type: 'FILE',
            parentFolder: ''
          }
        ],
        type: 'FOLDER',
        parentFolder: ''
      }, {
        name: 'sub 2',
        subFolders: [],
        type: 'FOLDER',
        parentFolder: ''
      }, {
        name: 'sub 3',
        subFolders: [],
        type: 'FOLDER',
        parentFolder: ''
      }
    ],
    parentFolder: ''
  }, {
    name: 'Jeff',
    subFolders: [],
    type: 'FOLDER',
    parentFolder: ''
  }, {
    name: 'Ragav',
    subFolders: [],
    type: 'FOLDER',
    parentFolder: ''
  }, {
    name: 'song.mp3',
    type: 'FILE',
    parentFolder: ''
  }]
}
