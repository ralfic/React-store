import ChangeDetailsForm from './changeForms/ChangeDetailsForm';
import ChangePasswordForm from './changeForms/ChangePasswordForm';

export default function AccountDetails() {
  return (
    <div className="flex flex-col gap-5">
      <ChangeDetailsForm />
      <ChangePasswordForm />
    </div>
  );
}
