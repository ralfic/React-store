export default function getAuthData(): {
  id: number | null;
  token: string | null;
} {
  const authString = localStorage.getItem('persist:auth');
  const auth = authString ? JSON.parse(authString) : null;

  return { id: auth.id, token: auth.token.replace(/"/g, '') };
}
