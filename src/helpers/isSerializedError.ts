type SerializedError = {
  name?: string;
  data?: string;
  code?: string;
  stack?: string;
};

export default function isSerializedError(
  error: unknown
): error is SerializedError {
  return (
    typeof error === 'object' &&
    error !== null &&
    ('data' in error || 'name' in error || 'code' in error)
  );
}
