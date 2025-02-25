import Form from '@/components/form/Form';
import FormDropdown from '@/components/form/form-dropdown/FormDropdown';
import Button from '@/components/ui/Button';
import { CONTENT_FILE_TYPES } from '@/configuration/constants';
import { useDirectUploadContent } from '@/services/content/useContentService';
import { useState } from 'react';
import ContentAddConcatenatedURL from './ContentAddConcatanatedURL';
import ContentAddContentsPreview from './ContentAddContentsPreview';
import ContentAddFormContents from './ContentAddFormContents';

const ContentAddForm = () => {
  const [contents, setContents] = useState([]);
  const { mutate } = useDirectUploadContent();

  const uploadContent = (data, index) => {
    mutate(data, {
      onSuccess: (response) => {
        const updatedContents = [...contents];
        updatedContents[index].isLoading = false;
        updatedContents[index].url = response.data;
        setContents(updatedContents);
      },
      onError: (error) => {
        const updatedContents = [...contents];
        updatedContents[index].isLoading = false;
        updatedContents[index].error = error;
        setContents(updatedContents);
      },
      onSettled: () => {
        const updatedContents = [...contents];
        if (index < contents.length - 1) {
          uploadContent(updatedContents[index + 1], index + 1);
        }
      },
    });
  };

  const handleSubmit = (formData) => {
    let updatedContents = [...contents];

    updatedContents.forEach((content) => {
      content.isLoading = true;
      content.fileType = formData.fileType;
    });
    setContents(updatedContents);
    uploadContent(updatedContents[0], 0);
  };

  return (
    <div className='bg-white w-full overflow-auto'>
      <Form onSubmit={handleSubmit} className='p-10 flex flex-col gap-10'>
        <h4 className='text-center'>Add New Content</h4>

        <FormDropdown
          name='fileType'
          label='Select Content Type'
          placeholder='Content Type'
          options={CONTENT_FILE_TYPES.map((type) => ({
            label: type.replaceAll('_', ' '),
            value: type,
          }))}
          validations={{ required: 'Select Content Type' }}
        />

        <ContentAddFormContents setContents={setContents} />
        <ContentAddContentsPreview contents={contents} />
        <ContentAddConcatenatedURL contents={contents} />

        <div className='flex justify-center'>
          <Button type='submit'>Upload</Button>
        </div>
      </Form>
    </div>
  );
};

export default ContentAddForm;
