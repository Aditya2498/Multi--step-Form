import { useForm } from "react-hook-form";
import { useAppState } from "../appState/State";
import { useNavigate } from "react-router-dom";
import { Button, Field, Form, Input } from "../form/Form";


export const About = () => {
    const [state, setState] = useAppState();
    const { handleSubmit, register } = useForm({ defaultValues: state });
    const navigate = useNavigate();

    const saveData = (data) => {
        setState({ ...state, ...data });
        navigate("/confirm");
    };

  return (
    <Form onSubmit={handleSubmit(saveData)}>
            <fieldset>
                <legend>About</legend>
                <Field label="About me">
                  <textarea
                      {...register("about")}
                      id="about"
                      className="form-control"
                  />
                </Field>
                <div className="button-row">
                    <Button variant="secondary" onClick={() => navigate("/education")}>
                        {"<"} Previous
                    </Button>
                    <Button>Next {">"}</Button>
                </div>
            </fieldset>
        </Form>
  )
}

