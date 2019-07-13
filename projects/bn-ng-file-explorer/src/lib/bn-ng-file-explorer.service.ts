import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BnNgFileExplorerService {
  private paths: Array<any> = [];
  public pathAdded$: Subject<any> = new Subject<any>();
  public folders$: Subject<any> = new Subject<any>();

  private _folders: Array<any>;
  private subFolders: Array<any>;

  private _selectedFolder: number;

  private selectedPath: any;
  public fileExplorerType: string;

  constructor() { }

  set path(value: any) {
    this.paths.push(value);
    this.selectedPath = value;
    this.pathAdded$.next(this.paths);
  }

  get path() {
    return this.paths;
  }

  set folders(value: Array<any>) {
    this._folders = value;
    this.subFolders = value;
    this.folders$.next(value);
  }

  set selectFolder(folderIndex: number) {
    this._selectedFolder = folderIndex;
  }

  get selectFolder() {
    return this._selectedFolder;
  }

  getSubFolders() {
    this.subFolders = this._folders[this._selectedFolder].subFolders;
    return this.subFolders || [];
  }

}
