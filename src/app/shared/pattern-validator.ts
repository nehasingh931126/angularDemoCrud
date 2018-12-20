import { FormControl, Validators ,AbstractControl, ValidatorFn, FormGroup } from '@angular/forms';
export function patternValidator(regExp: RegExp): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} | null => {
      const forbidden = regExp.test(control.value);
      return forbidden ? {'forbiddenName': {value: control.value}} : null;
    };
}

export function numberValidation(flag: string): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {
        let resultValue = null;  
        const value = control.value;
        if(flag  == 'POSITIVE_NUMBER'){
            if(value < 0 ){
                console.log(value);
                resultValue = 'invalid';
            }
        }
        if(flag  === 'NEGATIVE_NUMBER'){
            if(value > 0){
                resultValue = 'invalid';
            }
        }
        if(flag === 'EXCLUDE_ZERO'){
            if(value === 0){
                resultValue = 'invalid';
            }
        }
        if(value === ''){
            return null;
        }
        return resultValue === 'invalid' ? {'forbiddenNumericValue': {value: control.value}} : null;
    };
}




