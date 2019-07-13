import { NgModule } from '@angular/core';
import { BnNgFileExplorerComponent } from './bn-ng-file-explorer.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PathBreadcrumbComponent } from './path-breadcrumb/path-breadcrumb.component';
import { FolderComponent } from './folder/folder.component';
import { FileComponent } from './file/file.component';
import { BnNgFileExplorerService } from './bn-ng-file-explorer.service';
import { RenameComponent } from './rename/rename.component';

@NgModule({
  declarations: [BnNgFileExplorerComponent, PathBreadcrumbComponent, FolderComponent, FileComponent, RenameComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: [BnNgFileExplorerService],
  exports: [BnNgFileExplorerComponent]
})
export class BnNgFileExplorerModule { }
