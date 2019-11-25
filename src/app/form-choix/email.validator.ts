import {ValidatorFn, AbstractControl} from "@angular/forms";

export function emailDomainAllowedValidator(domain :string): ValidatorFn{
    return(control: AbstractControl): { [key: string]: any } | null =>{
        return control.value.endsWith(domain) ?
            null : {'forbiddenDomain': extractDomain(control.value)}
    };
}

function extractDomain(email){
    return email.includes('@') ? email.split('@')[1]: 'Unknown domain'
}