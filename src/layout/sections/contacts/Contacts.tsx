import styled from "styled-components";
import {SectionTitle} from "../../../component/SectionTitle.tsx";
import {Simulate} from "react-dom/test-utils";
import submit = Simulate.submit;
import {Button} from "../../../component/Button.tsx";

export const Contacts = () => {
    return (
        <StyledContacts>
            <SectionTitle>Contact </SectionTitle>
            <StyledForm>
                <Field Placeholder = {'Name'} />
                <Field Placeholder = {'Subject'} />
                <Field  Placeholde = {'Message'} as={"textarea"}/>
                <Button type={'submit'}>SEND MESSAGE</Button>
            </StyledForm>
        </StyledContacts>
    );
};

const StyledContacts = styled.section`
    min-height: 50vh;
  background-color: gray;
`

const StyledForm = styled.form`
  max-width: 500px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 0 auto;
`

const Field = styled.input`
    
`