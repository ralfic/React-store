export default function ErrorMessageForm({ message }: { message?: string }) {
  return (
    <span className="text-red-500 text-sm first-letter:uppercase">
      {message}
    </span>
  );
}
