import PageContainer from '@/components/layout/PageContainer';
import PageHeader from '@/components/layout/PageHeader';
import ContentAddForm from './ContentAddForm';

const ContentAdd = () => {
  return (
    <PageContainer className='flex flex-col gap-3'>
      <PageHeader title='Add Content' />
      <div className='flex-1 w-full flex gap-5 overflow-hidden'>
        <ContentAddForm />
      </div>
    </PageContainer>
  );
};

export default ContentAdd;
