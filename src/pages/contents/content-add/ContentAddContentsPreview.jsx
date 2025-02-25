import PageError from '@/components/layout/PageError';
import Button from '@/components/ui/Button';
import LoadingSpinner from '@/components/ui/LoadingSpinner';
import ImagePreview from '@/components/upload/ImagePreview';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { toast } from 'react-toastify';

const ContentAddContentsPreview = ({ contents }) => {
  const copiedToast = () => {
    toast.success('Copied to clipboard');
  };

  return (
    <div className='flex flex-col gap-5 overflow-x-hidden'>
      {contents?.map((content, index) => (
        <div key={index} className='flex-1 flex flex-col md:flex-row gap-2'>
          <ImagePreview
            className='w-48 h-24 object-cover'
            url={URL.createObjectURL(content.file)}
          />

          <div className='flex flex-col justify-center'>
            {content.isLoading && <LoadingSpinner />}
            {!content.isLoading && content.url && (
              <div className='flex flex-col gap-1'>
                <strong>URL:</strong>
                <div className='text-gray'>{content.url}</div>
                <div>
                  <CopyToClipboard text={content.url}>
                    <Button
                      variant='secondary'
                      size='small'
                      onClick={copiedToast}
                    >
                      Copy to Clipboard
                    </Button>
                  </CopyToClipboard>
                </div>
              </div>
            )}
            {!content.isLoading && content.error && (
              <PageError message={content?.error?.message} />
            )}
            {!content.isLoading && !content.url && (
              <div className='text-gray'>Not uploaded yet</div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ContentAddContentsPreview;
