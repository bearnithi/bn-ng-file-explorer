import { Component, OnInit, Input } from '@angular/core';
import { BnNgFileExplorerService } from '../bn-ng-file-explorer.service';

@Component({
  selector: 'bn-folder',
  templateUrl: './folder.component.html',
  styleUrls: ['./folder.component.scss']
})
export class FolderComponent implements OnInit {
  @Input() folder: any;
  @Input() folderIndex: any;
  public paths: Array<any>;

  constructor(private fileExplorerService: BnNgFileExplorerService) { }

  ngOnInit() {

    this.fileExplorerService.pathAdded$.subscribe((paths: Array<any>) => {
      this.paths = paths;
    });
  }



  deleteFolder(i) {

  }

  editFolder(i) {}

  selectFolder(i) {
    this.fileExplorerService.selectFolder = i;
  }

  getFolders(i: number): void {
    this.fileExplorerService.selectFolder = i;
    // this.fileExplorerService.path = this.folders[i];
    // this.folders = this.fileExplorerService.getSubFolders();
  }

}
