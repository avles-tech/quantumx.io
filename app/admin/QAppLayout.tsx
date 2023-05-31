import { Layout } from 'react-admin';
import { QAppBar } from './QAppBar';
import { QMenu } from './QMenu';

export const QAppLayout = (props : any) => <Layout {...props} appBar={QAppBar} menu={QMenu} />;