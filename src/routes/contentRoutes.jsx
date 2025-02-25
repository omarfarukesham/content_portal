/* eslint-disable react-refresh/only-export-components */
import RouteAuthorization from '@/components/layout/RouteAuthorization';
import permissions from '@/configuration/permissions';
import { lazy } from 'react';
const ContentAdd = lazy(() =>
  import('@/pages/contents/content-add/ContentAdd'),
);
const Contents = lazy(() => import('@/pages/contents/Contents'));

// These are the children routes of the main layout
const contentRoutes = [
  {
    path: 'contents',
    element: (
      <RouteAuthorization
        element={Contents}
        permission={permissions.VIEW_CONTENT}
      />
    ),
  },
  {
    path: 'contents/add',
    element: (
      <RouteAuthorization
        element={ContentAdd}
        permission={permissions.EDIT_CONTENT}
      />
    ),
  },
];

export default contentRoutes;
