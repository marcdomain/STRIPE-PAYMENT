import FormField from "./FormField";

const BillingDetailsFields = () => {
  return (
    <>
      <FormField
        name="name"
        label="Name"
        type="text"
        placeholder="John Doe"
        required
      />
      <FormField
        name="email"
        label="Email"
        type="email"
        placeholder="john.doe@example.com"
        required
      />
      <FormField
        name="address"
        label="Address"
        type="text"
        placeholder="185 John Doe St. Suite 550"
        required
      />
      <FormField
        name="city"
        label="City"
        type="text"
        placeholder="San Francisco"
        required
      />
      <FormField
        name="state"
        label="State"
        type="text"
        placeholder="California"
        required
      />
      <FormField
        name="zip"
        label="ZIP"
        type="text"
        placeholder="94103"
        required
      />
    </>
  );
};

export default BillingDetailsFields;
