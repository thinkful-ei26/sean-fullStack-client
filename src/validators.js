export const required = value => value ? undefined : 'Required';
export const notEmpty = value => value.trim() ? undefined : 'Cannot be empty';
export const isTrimmed = value => value.trim() === value ? undefined : 'Cannot start or end with whitespace';
export const length = length => value => {
  if (length.min && value.length < length.min) return `Must be at least ${length.min} characters long`;
  if (length.max && value.length > length.max) return `Must be at most ${length.max} characters long`;
}
export const matches = field => (value, allFields) => field in allFields && value === allFields[field]
  ? undefined : 'Does not match';