'use server';

export async function submitContactForm(formData: FormData) {
    //!SECTION-Simulate An Delay
    await new Promise((resolve) => setTimeout(resolve, 1000))

    const name = formData.get('name')
    const email = formData.get('email')
    const message = formData.get('message')
    

    //!SECTION-Sending Message Using Console.log ...
    console.log('Form Successfully Submitted', { name, email, message })
    
    return {
        message: 'Thanks For Contacting Us! I will get back to you soon'
    }
}
