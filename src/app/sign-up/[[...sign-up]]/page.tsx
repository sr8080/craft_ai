import { SignUp } from '@clerk/nextjs'
import { dark } from '@clerk/themes'

export default function SignUpPage() {
  return (
    <div className='flex justify-center items-center min-h-screen'>
        <SignUp
      appearance={{
        elements:{
            formButtonPrimary:'bg-blue-500 hover:bg-blue-600 text-sm normal-case'
        },
        baseTheme: dark,
      }}
      path="/sign-up"
    />
    </div>
    
  )
}