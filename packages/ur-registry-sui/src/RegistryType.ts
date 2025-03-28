import { RegistryType } from "@keystonehq/bc-ur-registry";

export const ExtendedRegistryTypes = {
  SUI_SIGN_REQUEST: new RegistryType("sui-sign-request", 7101),
  SUI_SIGNATURE: new RegistryType("sui-signature", 7102),
  SUI_SIGN_HASH_REQUEST: new RegistryType("sui-sign-hash-request", 7103),
};
