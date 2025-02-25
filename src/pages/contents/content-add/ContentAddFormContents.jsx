import FormFileUploadByDrag from '@/components/form/FormFileUploadByDrag';

const ContentAddFormContents = ({ setContents }) => {
  const handleFilesChange = (files) => {
    const filesArray = files.map((file) => ({
      file: file,
      fileType: null,
      url: null,
      isLoading: false,
      error: null,
    }));

    setContents(filesArray);
  };

  return (
    <FormFileUploadByDrag
      name='files'
      placeholder='Select Files'
      className='w-full h-40'
      multiple={true}
      type='image'
      onChange={handleFilesChange}
    />
  );
};

export default ContentAddFormContents;
