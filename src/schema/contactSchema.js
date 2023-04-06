export const contactSchema = [
    {
        id:"first name",
        label: "First Name",
        maxLength:10,
        required:true,
        type:"text"
    },
    {
        id:"last name",
        label: "Last Name",
        maxLength:10,
        required:false,
        type:"text"
    },
    {
        id:"email",
        label: "Email",
        required:true,
        type:"email"
    },
    {
        id:"phoneNumber",
        label: "Phone Number",
        required:true,
        type:"text",
        pattern:/^\(?([0-9]{3})\)?[-]?([0-9]{3})[-]?([0-9]{4})$/
    },
    {
        id:"password",
        type:"password",
        required:true,
    }
]