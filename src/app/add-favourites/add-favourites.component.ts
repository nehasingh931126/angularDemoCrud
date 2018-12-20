import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators,FormArray,NgForm} from '@angular/forms';
import { patternValidator,numberValidation} from '../shared/pattern-validator';
import { IFavContactSchema } from '../favSchema';
import { FavContactServiceService } from '../fav-contact-service.service';
import { ActivatedRoute,Router } from '@angular/router';


@Component({
  selector: 'app-add-favourites',
  templateUrl: './add-favourites.component.html',
  styleUrls: ['./add-favourites.component.css']
})
export class AddFavouritesComponent implements OnInit {
  	favForm:FormGroup;
	favConDetails:IFavContactSchema;
	formData;
	editId:Number = 0;
	id:any;
	editFlag:Boolean = false;
	onEditData;

	//imageArray: Array<string> = ['image/jpeg', 'image/pdf', 'image/jpg'];
	constructor(private favConService:FavContactServiceService ,private route: ActivatedRoute,private router: Router) { }
  	ngOnInit() {
		this.route.params.subscribe(params => {
			this.editId = params['id'] == undefined ? 0 : +params['id'] ;
		});
		if(this.editId > 0 ) { 
			this.editFlag = true;
			this.id = +this.editId - 1;
			this.onEditData = this.favConService.getContact(this.id);	
			if(this.onEditData === undefined){
				this.router.navigate(['addFav']);
			}
		}

		this.favForm = new FormGroup({
			'first_name':new FormControl(this.editFlag == true ? this.onEditData.first_name : null,[Validators.required,patternValidator(/^\d+$/)]),
			'middle_name':new FormControl(this.editFlag == true ? this.onEditData.middle_name : null),
			'last_name':new FormControl(this.editFlag == true ? this.onEditData.last_name : null,[Validators.required]),
			'mobile_number':new FormControl(this.editFlag == true ? this.onEditData.mobile_number : null,[Validators.required]),
			'contact_number':new FormControl(this.editFlag == true ? this.onEditData.contact_number : null,[Validators.pattern(/^\d+$/),Validators.min(1),Validators.max(234234234),Validators.maxLength(2)]),
			'email':new FormControl(this.editFlag == true ? this.onEditData.email : null,[Validators.required,Validators.email]),
			//'doc':new FormControl(null,[Validators.required]),
			'notes':new FormControl(this.editFlag == true ? this.onEditData.notes : null,[Validators.required]),
			//'hobbies':new FormArray([]),
			'calling_rate': new FormControl(this.editFlag == true ? this.onEditData.calling_rate : 'frequent',[Validators.required]),
			'optradio': new FormControl(null,[Validators.required])
		});
	}

	// onFileChange(event) {
	// 	let reader = new FileReader();
	//     if(event.target.files && event.target.files.length > 0) {
	//       let file = event.target.files[0];
	//       reader.readAsDataURL(file);
	//       reader.onload = () => {
	//         this.formData = {
	//           	filename: file.name,
	//           	filetype: file.type,
	//           	value: reader.result.split(',')[1]
	//         }
	//       };
	//     }
	// }
	  
	// addHobbies(){
	// 	const control = new FormControl(null, Validators.required);
	// 	(<FormArray>this.favForm.get('hobbies')).push(control)
	// }

	
	onSubmit(){
		this.favConDetails = this.favForm.value;
		if(this.editId > 0){
			this.id = +this.editId - 1;
			this.favConService.updateContact(this.id,this.favConDetails);	
		}else{
			this.favConDetails = this.favForm.value;
			this.favConService.addContacts(this.favConDetails);
		}
		this.router.navigate(['listing']);
		this.favForm.reset();
	}
	
}
