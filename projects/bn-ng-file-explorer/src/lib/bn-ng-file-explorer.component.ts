import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { BnNgFileExplorerService } from './bn-ng-file-explorer.service';

@Component({
  selector: 'bn-ng-file-explorer',
  templateUrl: './bn-ng-file-explorer.component.html',
  styleUrls: ['./bn-ng-file-explorer.component.scss']
})
export class BnNgFileExplorerComponent implements OnInit {
  public _folders: Array<any> = [];
  public _type: string;

  @Input('file-explorer-type') set fileExplorerType(type: string) {
    this.fileExplorerService.fileExplorerType = type;
    this._type = type;
  }

  @Input('folders') set folders(value: Array<any>) {
    this.fileExplorerService.folders = value || [];
    this._folders = value || [];
  }

  @Output('folder-change') folderChange = new EventEmitter<any>();

  public showPath: boolean;

  constructor(private fileExplorerService: BnNgFileExplorerService) { }

  ngOnInit() {
    this.fileExplorerService.subFolders$.subscribe((subFolders: any) => {
      this._folders = subFolders;
    });
  }

  addFolder(): void {
    const parentFolder = this.fileExplorerService.path[this.fileExplorerService.path.length - 1] || {};

    const newFolder = {
      folderName: 'New Folder',
      parentFolder: parentFolder.Id || '',
      subFolders: []
    };

    this._folders.unshift(newFolder);

    // setTimeout(() => {
    //   this.fileNameInputs.first.nativeElement.focus();
    //   this.fileNameInputs.first.nativeElement.setSelectionRange(0, newFolder.Folder_Name.length);
    // });
  }

  publishAction(action: string, folder: any) {
    this.folderChange.emit({
      action,
      folder
    });
  }

}
