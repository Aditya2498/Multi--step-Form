import React,{forwardRef} from 'react';

export const Field = ({children, label, error})=>{
    const id = getChildId(children);

    return(
        <div className='col-sm-12 mb-3'>
            <label htmlFor={id} className='form-label'>
                {label}
            </label>
            {children}
            {error && <small className='error'>{error.message}</small>}
            {error && error.type=="maxLength" ? <small className='error'>"Max Length Exceded</small> : ''}
        </div>
    )
}

export const getChildId = (children)=>{
    const child = React.Children.only(children);

    if("id" in child?.props){
        return child.props.id;
    }
}

export const Input = React.forwardRef((props,ref)=>{
    return <input ref={ref} className='form-control' {...props}/>
})

export const Button = forwardRef(({children,variant="primary",...props},ref)=>{
    return(
        <button className={`btn btn-${variant}`} {...props}>
            {children}  
        </button>
    )
});

export const Form = ({children, ...props})=>{
    return(
        <form className='row' {...props} noValidate>
            {children}
        </form>
    )
}

