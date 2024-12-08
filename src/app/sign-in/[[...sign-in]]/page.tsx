import { SignIn } from '@clerk/nextjs'
import { dark } from '@clerk/themes'

export default function SignInPage() {
  return (
    <div className='flex justify-center items-center min-h-screen'>
        <SignIn
      appearance={{
        elements:{
            formButtonPrimary:'bg-blue-500 hover:bg-blue-600 text-sm normal-case'
        },
        baseTheme: dark,
      }}
      path="/sign-in"
    />
    </div>
  )
}