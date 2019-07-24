import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BnNgFileExplorerService {
  private paths: Array<any> = [{ name: 'Home', isHome: true}];
  public pathAdded$: Subject<any> = new Subject<any>();
  public folders$: Subject<any> = new Subject<any>();
  public subFolders$: Subject<any> = new Subject<any>();

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

  changePath(path) {
    if(path.isHome) {
      this.subFolders$.next(this._folders);
    } else {
      this.subFolders = path.subFolders;
      this.subFolders$.next(this.subFolders);
    }

    const index = this.paths.indexOf(path) + 1;
    this.paths.splice(index);
  }

  getSubFolders() {
    this.subFolders = this.selectedPath.subFolders;
    this.subFolders$.next(this.subFolders || []);
  }

  addFolder(folder: any) {
    if (this.selectedPath) {
      this.subFolders.unshift(folder);
      this.subFolders$.next(this.subFolders);
    } else {
      this._folders.unshift(folder);
      this.subFolders$.next(this._folders);
    }
  }

  deleteFolder(index: number) {
    this.folders.splice(index, 1);
  }

  editFolder(index: number) {

  }

}
