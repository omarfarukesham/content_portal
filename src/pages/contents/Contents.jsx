import PageContainer from '@/components/layout/PageContainer';
import ContentsBody from './ContentsBody';
import ContentsHeader from './ContentsHeader';

const Contents = () => {
  return (
    <PageContainer className='flex flex-col gap-3'>
      <ContentsHeader />
      <ContentsBody />
    </PageContainer>
  );
};

export default Contents;
