import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import { MemberdataService } from './Services/memberdata.service';
interface dataType{
  name:string,
  id:number,
  Indian:boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'project-2';
  name= "ashwini"
  disable= false;
  condition=true; //if-else condition
  color='green'; //else-if or multiple condition
  color1='back'; //switch-case
  user=['Ashwini','Kumud','Kritika','Tanavi'] //for loop
  userDetails=[
    { name:'Ashwini', email:'ashwini@.com',phone:'2344545676' },
    { name:'Kumud', email:'Kumud@.com',phone:'3446651243' },
    { name:'Kritika', email:'Kritika@.com',phone:'6465756455' },
    { name:'Tanavi', email:'Tanavi@.com',phone:'7657123456' },
];
arr=[
  { name:'Ashwini', email:'ashwini@.com',phone:'2344545676',Skill: ['C','C++','Java'] },
    { name:'Kumud', email:'Kumud@.com',phone:'3446651243',Skill: ['C','C++','Java'] },
    { name:'Kritika', email:'Kritika@.com',phone:'6465756455',Skill: ['C','C++','Java'] },
    { name:'Tanavi', email:'Tanavi@.com',phone:'7657123456',Skill: ['C','C++','Java'] },
];
  getName()
  {
    alert("Sucessfully Done");
  }
  getData(val:string)
  {
    console.warn(val);
  }
  displayVal='';
  getValue(val:string)
  {
    console.warn(val);
    this.displayVal=val;
  }
  /***************counter*********************/
 count=0;
 counter(type:string)
 {
    type=== 'add' ? this.count++:this.count--;
 }
 /***************property binding vs interpolation*****************/
 /*****************************Style Binding************************************/
 h1color="blue";
 bgcolor="red";

 updateStyle()
 {
    this.h1color="purple";
    this.bgcolor="green";
 }
 /*************************************Basic Form***************************************/
 userData:any={};

 displayData(data:NgForm)
 {
  console.warn(data)
  this.userData=data
 }
 /***************************************Toggle********************************************/
 show=true;
 toggle()
 {
      this.show=!this.show;
 }
 /************************************Todo List*******************************************/
 todoArr:any[]=[];
 addTask(i:string)
 {
    this.todoArr.push({id:this.todoArr.length,name:i});
    console.warn(this.todoArr)
 }
 RemoveTask(id:number)
 {
  console.warn(id)
  this.todoArr=this.todoArr.filter(i=>i.id!==id);
 }
 /********************************Pass data child to Component *************************************/
 transferData=10;
 UpdateChild()
 {
  this.transferData= Math.floor(Math.random()*10)
 }
 /******************************************Reusable Component***********************************************************/
 resueData=[
  { name:'Ashwini',email:'ashwini@test.com' },
  { name:'Kritika',email:'Kritika@test.com' },
  { name:'Kumud',email:'Kumud@test.com' },
  { name:'Tanavi',email:'Tanavi@test.com' },
 ]
 /***************************************************Send Data Child To Parent Component*********************************************************************/
 udateData(item:any)
 {
    console.warn(item)
 }
  /***************************************************Template Refernce Varibale*********************************************************************/
  getVal(item:string)          //reference type HTMLinputElement we can directly use it
  {
      console.warn(item)
  }
    /***************************************************Basic of Pipes in Angular*********************************************************************/
    user_name='Kritika';
    today=Date();
  /***************************************************Advance of Pipes in Angular*********************************************************************/
  user_detail={
    name:'Tanushri',
    age:23
  }
    /***************************************************Template Driven Form *********************************************************************/
    userLogin(item:any)
    {
      console.warn(item)
    }
    /***************************************************Template Driven Form *********************************************************************/
    signInForm= new FormGroup({                          //control our form
      userid: new FormControl('',[Validators.required, Validators.email]),      // we can use validator pattern alsolike [a-zA-Z]+-$   //we can set defualt value in('value')          //control user field only
      userpass: new FormControl('',[Validators.required, Validators.minLength(7)]),                             // control password field only
      // phone: new FormControl('',[Validators.required,Validators.minLength(10) ])
    })

    signInuser()
    {
      console.warn(this.signInForm.value)
    }
    get userid()
    {
      return this.signInForm.get('userid')
    }
    get userpass()
    {
      return this.signInForm.get('userpass')
    }
    // get phone()
    // {
    //   return this.signInForm.get('phone')
    // }
    /**********************************Services**************/
    memberData=[
      {name:'ashwini',email:'ashwini@dm.com'},
      {name:'kritika',email:'kritika@dm.com'},
      {name:'kumud',email:'kumud@dm.com'},

    ]
    /******************************************************* */
    member:any;
    constructor (private memberdata:MemberdataService)
    {
      memberdata.member().subscribe((data)=>{
        console.warn("data",data);
        this.member=data
    });
    }
    /**************************************************************** */
    getUserFormData(data:any)
    {
        this.memberdata.addUser(data).subscribe((result)=>{
          console.warn(result);
        });
    }

/***********************************Model******************** */
modelData()
{
  const data:dataType={
    name:'Ashwini',
    id:100,
    Indian:true,
  }

}
}