import { ExploreModule } from './classify/explore/explore.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { MdInputModule } from '@angular/material';
import { MdCardModule } from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { HomeComponent } from './home/home.component';
// import { DatabaseComponent } from './database/database.component';
import { AboutComponent } from './about/about.component';

// APP modules
import { ClassifyModule } from './classify/classify.module';
import { HomeModule } from './home/home.module';
import { DatabaseModule } from './database/database.module';

// import {NgCytoscapeModule} from "ng2-cytoscape/dist";

// Visualization
// import { NgxChartsModule } from '@swimlane/ngx-charts';
// import { NgMasonryGridModule } from 'ng-masonry-grid';

// Services
import { DataService } from '../services/data.service';
import { NcbiService } from '../services/ncbi.service';
import { AdminService } from '../services/admin.service';
import { AuthService } from '../services/auth.service';
import { Session } from '../services/session.service';
import { DiscussionService } from '../services/discussion.service';
import { CookieService } from 'angular2-cookie/core';

import 'hammerjs';
import { AdminComponent } from './admin/admin.component';
import { CommentsComponent } from './app/classify/comments/comments.component';
import { LoginComponent } from './login/login.component';
import { ForumComponent } from './forum/forum.component';
import { SignupComponent } from './signup/signup.component';
import { ProfileComponent } from './profile/profile.component';

// primeng
import { GrowlModule } from 'primeng/primeng';
import { EditorModule } from 'primeng/primeng';
// import { NgxMasonryModule } from 'ngx-masonry';
import { ChipsModule } from 'primeng/primeng';
import { ListboxModule } from 'primeng/primeng';
import { ButtonModule } from 'primeng/primeng';
import { ConfirmDialogModule } from 'primeng/primeng';
import { ConfirmationService } from 'primeng/primeng';

import { NewQuestionComponent } from './forum/new-question/new-question.component';
import { AllQuestionsComponent } from './forum/all-questions/all-questions.component';
import { SelectedQuestionComponent } from './forum/selected-question/selected-question.component';
import { EditQuestionComponent } from './forum/edit-question/edit-question.component';
// import { QuillModule } from 'ngx-quill';

import { MasonryModule } from 'angular2-masonry';
import { QuillModule } from 'ngx-quill';
@NgModule({
	declarations: [
		AppComponent,
		AboutComponent,
		// jqxChartComponent,
		AdminComponent,
		CommentsComponent,
		LoginComponent,
		ForumComponent,
		SignupComponent,
		ProfileComponent,
		NewQuestionComponent,
		AllQuestionsComponent,
		SelectedQuestionComponent,
		EditQuestionComponent
	],
	imports: [
		BrowserModule,
		FormsModule,
		HttpModule,
		ClassifyModule,
		ExploreModule,
		DatabaseModule,
		HomeModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		NoopAnimationsModule,
		MaterialModule,
		// NgxChartsModule,
		ReactiveFormsModule,
		MdInputModule,
		GrowlModule,
		EditorModule,
		// NgxMasonryModule,
		MdCardModule,
		ChipsModule,
		ListboxModule,
		ButtonModule,
		ConfirmDialogModule,
		MasonryModule,
		QuillModule

		// NgMasonryGridModule
		// QuillModule
		// NgCytoscapeModule
	],
	providers: [
		DataService,
		NcbiService,
		AdminService,
		AuthService,
		Session,
		CookieService,
		DiscussionService,
		ConfirmationService
	],
	bootstrap: [ AppComponent ]
})
export class AppModule {}
