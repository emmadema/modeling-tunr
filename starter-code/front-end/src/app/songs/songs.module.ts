import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SongsComponent } from './songs.component';
import { SongsService } from './songs.service';
import { SongIndexComponent } from './song-index/song-index.component';
import { SongNewComponent } from './song-new/song-new.component';
import { SongEditComponent } from './song-edit/song-edit.component';
import { SongShowComponent } from './song-show/song-show.component';

@NgModule({
	imports: [
		CommonModule
	],
	declarations: [
		SongsComponent,
		SongIndexComponent,
		SongNewComponent,
		SongEditComponent,
		SongShowComponent
	],
	providers: [SongsService]
})

export class  SongsModule {}