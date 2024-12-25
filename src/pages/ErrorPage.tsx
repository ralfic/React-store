import { Button } from '@/components/uikit/Button';
import { useNavigate } from 'react-router-dom';

export default function ErrorPage() {
  const navigate = useNavigate();
  return (
    <div className="max-w-wrapper mx-auto h-screen flex items-center justify-center w-full">
      <div className="flex flex-col gap-10 justify-center w-full items-center">
        <div className="flex flex-col gap-1">
          <h1 className="text-9xl font-semibold text-center">404</h1>
          <p className="text-2xl text-center">page not found</p>
        </div>
        <Button className="w-fit" size='lg' onClick={() => navigate('/')}>
          Go home
        </Button>
      </div>
    </div>
  );
}
