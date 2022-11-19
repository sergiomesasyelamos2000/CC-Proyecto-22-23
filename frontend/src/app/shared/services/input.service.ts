import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';
import { InputModel } from '../components/input/model/input.model';
import { InputType } from '../enums/input-type.enum';

@Injectable({
  providedIn: 'root',
})
/**
 * Service to get InputModels
 * @see {@link input.model}
 * @class
 */
export class InputService {
  /**
   * @return {InputModel} name input model
   */
  public getNameInput(formControl: FormControl): InputModel {
    return {
      type: InputType.TEXT,
      label: 'input.label.name',
      placeholder: 'input.placeholder.name',
      formControl: formControl,
    };
  }

  /**
   * @return {InputModel} surname input model
   */
  public getSurnameInput(formControl: FormControl): InputModel {
    return {
      type: InputType.TEXT,
      label: 'input.label.surname',
      placeholder: 'input.placeholder.surname',
      formControl: formControl,
    };
  }

  /**
   * @return {InputModel} password input model
   */
  public getPasswordInput(formControl: FormControl): InputModel {
    return {
      type: InputType.PASSWORD,
      label: 'input.label.password',
      placeholder: 'input.placeholder.password',
      formControl: formControl,
    };
  }

  /**
   * @return {InputModel} email input model
   */
  public getEmailInput(formControl: FormControl): InputModel {
    return {
      type: InputType.EMAIL,
      label: 'input.label.email',
      placeholder: 'input.placeholder.email',
      formControl: formControl,
    };
  }

  /** 
   * @return {InputModel} ISBN input model
   */
   public getISBNInput(formControl: FormControl): InputModel {
    return {
      type: InputType.TEXT,
      label: 'input.label.ISBN',
      placeholder: 'input.placeholder.ISBN',
      formControl: formControl,
    };
  }

  /**
   * @return {InputModel} ISBN input model
   */
   public getTypeInput(formControl: FormControl): InputModel {
    return {
      type: InputType.TEXT,
      label: 'input.label.type',
      placeholder: 'input.placeholder.type',
      formControl: formControl,
    };
  }
  /**
   * @return {InputModel} description input model
   */
   public getDescriptionInput(formControl: FormControl): InputModel {
    return {
      type: InputType.TEXT,
      label: 'input.label.description',
      placeholder: 'input.placeholder.description',
      formControl: formControl,
    };
  }

   /**
   * @return {InputModel} publicationDate input model
   */
    public getPublicationDateInput(formControl: FormControl): InputModel {
      return {
        type: InputType.TEXT,
        label: 'input.label.publicationDate',
        placeholder: 'input.placeholder.publicationDate',
        formControl: formControl,
      };
    }

    /**
   * @return {InputModel} editors input model
   */
     public getEditorsInput(formControl: FormControl): InputModel {
      return {
        type: InputType.TEXT,
        label: 'input.label.editors',
        placeholder: 'input.placeholder.editors',
        formControl: formControl,
      };
    }

      /**
   * @return {InputModel} autors input model
   */
       public getAutorsInput(formControl: FormControl): InputModel {
        return {
          type: InputType.TEXT,
          label: 'input.label.autors',
          placeholder: 'input.placeholder.autors',
          formControl: formControl,
        };
      }

         /**
   * @return {InputModel} photo link input model
   */
          public getPhotoInput(formControl: FormControl): InputModel {
            return {
              type: InputType.TEXT,
              label: 'input.label.photo',
              placeholder: 'input.placeholder.photo',
              formControl: formControl,
            };
          }
}
