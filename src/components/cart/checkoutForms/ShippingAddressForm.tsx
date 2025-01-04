import FormInput from '@/components/uikit/FormInput';

export default function ShippingAddressForm() {
  return (
    <div className="border border-black rounded-md py-10 px-6 flex flex-col gap-6 dark:border-white dark:bg-neutral-600">
      <h2 className="font-Poppins text-xl font-medium">Shipping Address</h2>
      <FormInput
        label="Stress Address"
        placeholder="Stress Address"
        name="stressAddress"
        required
      />
      <FormInput
        label="Country"
        placeholder="Country"
        name="country"
        required
      />
      <FormInput
        label="Town / City"
        placeholder="Town / City"
        name="town_city"
        required
      />
      <div className="flex gap-6">
        <FormInput label="State" placeholder="State" name="state" />
        <FormInput label="Zip Code" placeholder="Zip Code" name="zipCode" />
      </div>
    </div>
  );
}
