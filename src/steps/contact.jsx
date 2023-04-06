import { useForm } from 'react-hook-form';
import { useAppState } from '../appState/State';
import { useNavigate } from 'react-router-dom';
import {Field, Form, Input, Button} from '../form/Form';

export const Contact = () => {
    const [state, setState] = useAppState();
    const {
        handleSubmit,
        register,
        watch,
        formState:{errors}
    } = useForm({defaultValues:state, mode:"onSubmit"});

    const watchPassword  =  watch("password");
    const navigate = useNavigate();

    const saveData = (data)=>{
        setState({...state,...data});
        navigate("/education");
    }

  return (
    <Form onSubmit={handleSubmit(saveData)}>
        <fieldset>
            <legend>Contact</legend>
            <Field label="First name" error={errors?.firstName}>
                <Input
                    {...register("firstName",{required: "First name is required!",maxLength:10})}
                    type="text"
                    id="first-name"
                />
            </Field>
            <Field label="Last name" error={errors?.lastName}>
                <Input
                    {...register("lastName",{maxLength:10})}
                    type="text"
                    id="last-name"
                />
            </Field>
            
            <Field label="Email" error={errors?.email}>
                <Input
                    {...register("email",{required:"Email is required!"})}
                    id="email"
                    type="email"
                />
            </Field>
            <Field label="Phone Number" error={errors?.phone}>
                <Input
                    {...register("phone",{required:"Phone Number is required!",          
                    pattern: {
                        value:/^\(?([0-9]{3})\)?[-]?([0-9]{3})[-]?([0-9]{4})$/,
                        message:"Please enter a valid US phone number!"
                    },
                    
                })}
                    id="phone"
                />
            </Field>
            
            <Field label="Password" error={errors?.password}>
                <Input
                    {...register("password",{required:"Password is required!"})}
                    type="password"
                    id="password"
                />
            </Field>
            <Field label="Confirm password" error={errors?.confirmPassword}>
                    <Input
                        {...register("confirmPassword", {
                            required: "Confirm the password",
                            validate: (value) =>
                                value === watchPassword || "The passwords do not match",
                        })}
                        type="password"
                        id="password-confirm"
                    />
                </Field>
                <Button>Next {">"}</Button>
        </fieldset>
    </Form> 
  )
}

