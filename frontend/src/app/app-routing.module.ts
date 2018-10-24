// import { ExploreComponent } from './classify/explore/explore.component';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ClassifyComponent } from './classify/classify.component';
import { HomeComponent } from './home/home.component';
import { DatabaseComponent } from './database/database.component';
import { AboutComponent } from './about/about.component';
import { AdminComponent } from './admin/admin.component';
import { ForumComponent } from './forum/forum.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ProfileComponent } from './profile/profile.component';
import { NewQuestionComponent } from './forum/new-question/new-question.component';
import { AllQuestionsComponent } from './forum/all-questions/all-questions.component';
import { SelectedQuestionComponent } from './forum/selected-question/selected-question.component';

export const router: Routes = [
	{
		path: '',
		children: [
			{ path: '', component: HomeComponent },
			{ path: 'classify', component: ClassifyComponent },
			{ path: 'home', component: HomeComponent },
			{ path: 'database', component: DatabaseComponent },
			{ path: 'about', component: AboutComponent },
			{ path: 'admin', component: AdminComponent },
			{ path: 'instructions', component: AboutComponent },
			{
				path: 'forum',
				component: ForumComponent,
				children: [
					{ path: '', component: AllQuestionsComponent },
					{ path: 'selected_question', component: SelectedQuestionComponent },
					{ path: 'new_question', component: NewQuestionComponent }
				]
			},
			{ path: 'login', component: LoginComponent },
			{ path: 'signup', component: SignupComponent },
			{ path: 'profile', component: ProfileComponent }
			// { path: 'explore', component: ExploreComponent}
		]
	}
];

export const AppRoutingModule: ModuleWithProviders = RouterModule.forRoot(router, { useHash: true });
