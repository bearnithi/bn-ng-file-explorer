import { Component, OnInit, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
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


  constructor(private fileExplorerService: BnNgFileExplorerService) { }

  ngOnInit() {

  }

  /**
   * Deletes the folder from the array
   */
  deleteFolder() {
    this.fileExplorerService.deleteFolder(this.folderIndex);
    this.action.emit('DELETED');
  }

  /**
   * Edits the folder name and hides the input box
   */
  editFolder() {
    this.folder.edit = false;
    this.fileExplorerService.editFolder(this.folderIndex);
    this.action.emit('UPDATED');
  }

  /**
   * Selects the folder on click
   */
  selectFolder() {
    this.fileExplorerService.selectFolder = this.folderIndex;
    this.action.emit('SELECTED');
  }

  /**
   * get the subfolders and adds the current folder to the path.
   */
  getFolders(): void {
    this.fileExplorerService.selectFolder = this.folderIndex;
    this.fileExplorerService.path = this.folder;
    this.fileExplorerService.getSubFolders();
  }

}
