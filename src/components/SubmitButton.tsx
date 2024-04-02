"use client";
import { useFormStatus } from "react-dom";
import Image from "next/image";

/**
 * SubmitButton is a functional component in React.
 * It uses the useFormStatus hook from react-dom to get the status of the form.
 * The button is disabled when the form is in a pending state.
 * When the form is in a pending state, a spinner image is displayed on the button.
 * Otherwise, the button displays the text "Login".
 *
 * @returns {JSX.Element} A button element with dynamic content based on the form status.
 */
const SubmitButton = () => {
  // useFormStatus is a custom hook that returns the status of the form.
  // The status object has a 'pending' property which is a boolean.
  // It is true when the form is in the process of being submitted.
  const { pending } = useFormStatus();

  return (
    // The button is disabled when the form is pending.
    // The button has several CSS classes for styling.
    // The button's content changes based on the form's status.
    <button
      disabled={pending}
      type="submit"
      className="bg-yellow-550 hover:bg-yellow-400 w-full h-16 rounded flex items-center justify-center"
    >
      {pending ? (
        // When the form is pending, a spinner image is displayed.
        <Image
          src="/spinner.svg"
          alt="Spinner"
          width={14}
          height={14}
          priority
        />
      ) : (
        // When the form is not pending, the button displays the text "Login".
        "Login"
      )}
    </button>
  );
};

export default SubmitButton;
