import NoDataFound from '@/components/layout/NoDataFound';
import DataTable from '@/components/table/data-table/DataTable';
import getFormattedDate from '@/utilities/getFormattedDate';
import ContentTableActionBtn from './ContentTableActionBtn';

const ContentsTable = ({ data }) => {
  const columns = [
    {
      label: 'SL No.',
      key: 'serial',
    },
    {
      label: 'URL',
      key: 'url',
    },
    {
      label: 'Created By',
      key: 'createdBy',
    },
    {
      label: 'Created At',
      key: 'createdAt',
      content: (value) => getFormattedDate(value, true),
    },
    {
      label: <div className='text-center'>Action</div>,
      content: (_, rowData) => <ContentTableActionBtn data={rowData} />,
    },
  ];

  return (
    <div className='h-full flex flex-col overflow-auto'>
      <DataTable columns={columns} data={data} />
      {data.length === 0 && <NoDataFound />}
    </div>
  );
};

export default ContentsTable;
