import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { BnNgFileExplorerService } from '../bn-ng-file-explorer.service';

@Component({
  selector: 'bn-folder',
  templateUrl: './folder.component.html',
  styleUrls: ['./folder.component.scss']
})
export class FolderComponent implements OnInit {
  @Input() folder: any;
  @Input() folderIndex: any;
  @Output() action = new EventEmitter<any>();

  public paths: Array<any>;

  constructor(private fileExplorerService: BnNgFileExplorerService) { }

  ngOnInit() {

    this.fileExplorerService.pathAdded$.subscribe((paths: Array<any>) => {
      this.paths = paths;
    });
  }



  deleteFolder() {
    this.fileExplorerService.deleteFolder(this.folderIndex);
    this.action.emit('DELETED');
  }

  editFolder() {
    this.folder.edit = false;
    this.fileExplorerService.editFolder(this.folderIndex);
    this.action.emit('UPDATED');
  }

  selectFolder() {
    this.fileExplorerService.selectFolder = this.folderIndex;
    this.action.emit('SELECTED');
  }

  getFolders(): void {
    this.fileExplorerService.selectFolder = this.folderIndex;
    this.fileExplorerService.path = this.folder;
    this.fileExplorerService.getSubFolders();
  }

}
