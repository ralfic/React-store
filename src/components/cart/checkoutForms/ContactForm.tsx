import FormInput from '@/components/uikit/FormInput';

export default function ContactForm() {
  return (
    <div className="border border-black rounded-md py-10 px-6 flex flex-col gap-6 dark:border-white dark:bg-neutral-600">
      <h2 className="font-Poppins text-xl font-medium">Contact Infomation</h2>
      <div className="flex gap-6">
        <FormInput
          label="First name"
          placeholder="First name"
          name="firstName"
          required
        />
        <FormInput
          label="Last name"
          placeholder="Last name"
          name="lastName"
          required
        />
      </div>
      <FormInput
        label="Phone Number"
        placeholder="Phone Number"
        name="phoneNumber"
        required
      />
      <FormInput label="Email address" placeholder="Your Email" name="email" />
    </div>
  );
}
