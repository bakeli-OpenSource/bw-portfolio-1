import React from 'react';
import { ContainerCard, ContainerInput, ContainForm, FormContain } from '../../Style/styleAccueil';
import Input from '../Banniere/Input';
import Bouton from '../Banniere/Bouton';

function Form() {
  return (
    <ContainForm>
      <FormContain>
      <form>
        <ContainerCard alignItems gap>
          <Input namelabel={'Email'} placeholder={'Please enter your email'} id={'email'} />
          <Input namelabel={'Mobile'} placeholder={'Enter mobile'} id={'mobile'} />
          <Input
            namelabel={'Message'}
            area
            rows={'5'}
            placeholder={'Enter your message'}
            id={'message'}
          />
          <ContainerInput>
            <Bouton name={'Submit'} padding={"16px 24px"} width/>
          </ContainerInput>
        </ContainerCard>
      </form>
      </FormContain>
    </ContainForm>
  );
}

export default Form;
