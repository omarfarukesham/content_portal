import Button from '@/components/ui/Button';
import CopyToClipboard from 'react-copy-to-clipboard';
import { toast } from 'react-toastify';

const ContentAddConcatenatedURL = ({ contents = [] }) => {
  const concatenatedURL = contents.reduce(
    (finalURL, e) => finalURL + (finalURL ? '|' : '') + e.url,
    '',
  );

  const copiedToast = () => {
    toast.success('Copied to clipboard');
  };

  if (!concatenatedURL) {
    return null;
  }

  return (
    <div>
      <div className='flex flex-col gap-1'>
        <strong>Concatenated URL (&apos;|&apos; Separated):</strong>
        <div className='text-gray'>{concatenatedURL}</div>
        <div>
          <CopyToClipboard text={concatenatedURL}>
            <Button variant='secondary' size='small' onClick={copiedToast}>
              Copy to Clipboard
            </Button>
          </CopyToClipboard>
        </div>
      </div>
    </div>
  );
};

export default ContentAddConcatenatedURL;
