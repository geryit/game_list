"use client";

// Importing necessary modules and components
import Image from "next/image"; // Component to handle images
import Input from "@/components/Input"; // Input component
import { login } from "@/actions"; // Login action
import SubmitButton from "@/components/SubmitButton"; // SubmitButton component
import { useFormState } from "react-dom"; // Hook to handle form state

// Initial state for the form
const initialState = {
  message: "",
};

/**
 * LoginForm function component.
 *
 * This function component renders a login form with username and password fields.
 * It uses the useFormState hook from react-dom to handle the form state.
 * The login action is passed to the useFormState hook as the form submit handler.
 * The form state includes a 'message' field which is displayed if it exists.
 *
 * @returns {JSX.Element} The login form.
 */
export default function LoginForm() {
  // Use the useFormState hook with the login action and initial state
  const [state, formAction] = useFormState(login, initialState);

  // Render the login form
  return (
    <div className=" w-full max-w-[25.75rem]">
      <div className="flex justify-center">
        <Image src="/logo.svg" alt="Logo" width={70} height={70} priority />
      </div>

      <form className="mt-10" action={formAction} data-testid="form">
        <div>
          <Input label="Username" autoComplete="username" name="username" />
        </div>
        <div className="mt-4">
          <Input
            label="Password"
            autoComplete="current-password"
            type="password"
            name="password"
          />
        </div>
        {state.message && (
          <div className="p-4 bg-red-200 text-red-600 mt-4 rounded">
            {state.message}
          </div>
        )}
        <div className="mt-4">
          <SubmitButton />
        </div>
      </form>
    </div>
  );
}
