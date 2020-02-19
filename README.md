Material Button (Angular)
===
Angular Material Button

Installation
====
Install lms-btn with npm:
```
$ npm install --save lms-btn
```

Usage
===
```
<lms-button 
disabled="false"  
buttonText="Save" 
(click)="save()">
</lms-button>
```
Steps to Follow 
===
* Install Angular Material.
```
 $ ng add @angular/material@8.2.3
```
* Import ```lms-btn``` module in ```app.module.ts``` file.
```
import { BtnModule } from 'lms-btn';

imports: [
  ...,
    BtnModule
  ],
```
* In ```app.component.html``` , add the following 

```
<lms-button 
disabled="false"  
buttonText="Save" 
(click)="save()">
</lms-button>
```
* In ```app.component.ts``` , add the following 

```
export class AppComponent {
  
  title = 'app-component';
 
 save() {
 console.log('Button Clicked!');
 }

}
```
* Final Result looks like 

![Look of lms-btn](https://user-images.githubusercontent.com/40655047/74837754-329b2300-5348-11ea-9c31-2205d77cf796.png)



Params
===

 Name| Type | Description
------------ | ------------- | -------------
disabled | Boolean | Set to ```true``` to disable button
buttonText | String | Sets label to button
click | fn() | Click on Button will call this function



Happy Coding ! :stuck_out_tongue_closed_eyes:

