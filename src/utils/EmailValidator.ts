export type EmailValidationResult = {
  isValid: boolean;
  normalized: string;
  errors: string[];
};

export class EmailValidator {
  private static readonly MAX_LENGTH = 254;
  private static readonly LOCAL_PART_MAX = 64;
  private static readonly LABEL_MAX = 63;

  private static readonly BASIC_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  private static readonly ASCII_REGEX = /^[\x20-\x7E]+$/;
  private static readonly LOCAL_ALLOWED_REGEX =
    /^[A-Za-z0-9.!#$%&'*+/=?^_`{|}~-]+$/;
  private static readonly DOMAIN_ALLOWED_REGEX = /^[A-Za-z0-9.-]+$/;

  static validate(input: string): EmailValidationResult {
    const errors: string[] = [];
    const normalized = EmailValidator.normalize(input);

    if (!normalized) {
      return { isValid: false, normalized, errors: ["Email is required."] };
    }

    if (!EmailValidator.ASCII_REGEX.test(normalized)) {
      errors.push("Email must contain only ASCII characters.");
    }

    if (normalized.length > EmailValidator.MAX_LENGTH) {
      errors.push("Email exceeds maximum length.");
    }

    if (!EmailValidator.BASIC_REGEX.test(normalized)) {
      errors.push("Email format is invalid.");
    }

    const [localPart, domain] = normalized.split("@");

    if (!localPart || !domain) {
      errors.push("Email must contain a local part and a domain.");
    } else {
      if (localPart.length > EmailValidator.LOCAL_PART_MAX) {
        errors.push("Local part exceeds maximum length.");
      }

      if (localPart.startsWith(".") || localPart.endsWith(".")) {
        errors.push("Local part must not start or end with a dot.");
      }

      if (localPart.includes("..")) {
        errors.push("Local part must not contain consecutive dots.");
      }

      if (!EmailValidator.LOCAL_ALLOWED_REGEX.test(localPart)) {
        errors.push("Local part contains invalid characters.");
      }

      if (!EmailValidator.DOMAIN_ALLOWED_REGEX.test(domain)) {
        errors.push("Domain contains invalid characters.");
      }

      if (domain.startsWith("-") || domain.endsWith("-")) {
        errors.push("Domain must not start or end with a hyphen.");
      }

      if (domain.includes("..")) {
        errors.push("Domain must not contain consecutive dots.");
      }

      const labels = domain.split(".");
      if (labels.some((label) => label.length === 0)) {
        errors.push("Domain must not contain empty labels.");
      }

      if (labels.some((label) => label.length > EmailValidator.LABEL_MAX)) {
        errors.push("Domain label exceeds maximum length.");
      }

      const tld = labels[labels.length - 1];
      if (!tld || tld.length < 2) {
        errors.push("Top-level domain is too short.");
      }
    }

    return { isValid: errors.length === 0, normalized, errors };
  }

  static isValid(input: string): boolean {
    return EmailValidator.validate(input).isValid;
  }

  static normalize(input: string): string {
    return (input || "").trim().toLowerCase();
  }
}
