import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [{ path: 'welcome', loadChildren: () => import('./welcome/welcome.module').then(m => m.WelcomeModule) },
{ path: 'whoWeAre', loadChildren: () => import('./who-we-are/who-we-are.module').then(m => m.WhoWeAreModule) },
{ path: 'whereWeWork', loadChildren: () => import('./where-we-work/where-we-work.module').then(m => m.WhereWeWorkModule) },
{ path: 'contactUs', loadChildren: () => import('./contact-us/contact-us.module').then(m => m.ContactUsModule) },
{ path: 'studentStories', loadChildren: () => import('./student-stories/student-stories.module').then(m => m.StudentStoriesModule) },
{ path: 'give', loadChildren: () => import('./give/give.module').then(m => m.GiveModule) },
{ path: 'digitalLearning', loadChildren: () => import('./digital-learning/digital-learning.module').then(m => m.DigitalLearningModule) },
{ path: 'workWithFacts', loadChildren: () => import('./work-with-facts/work-with-facts.module').then(m => m.WorkWithFactsModule) },
{ path: 'comittedToData', loadChildren: () => import('./comitted-to-data/comitted-to-data.module').then(m => m.ComittedToDataModule) },
{ path: 'whatWeDo', loadChildren: () => import('./what-we-do/what-we-do.module').then(m => m.WhatWeDoModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
