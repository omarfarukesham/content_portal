import EyeIcon from '@/assets/icons/EyeIcon';
import Button from '@/components/ui/Button';
import { useNavigate } from 'react-router-dom';

const ContentTableActionBtn = ({ data }) => {
  const navigate = useNavigate();

  return (
    <div className='flex gap-3 pl-6 justify-center'>
      <Button
        variant='table-action'
        onClick={() => navigate('/admin/content/' + data.id + '/view')}
      >
        <EyeIcon className='fill-gray-8' />
      </Button>
    </div>
  );
};

export default ContentTableActionBtn;
