/* eslint react/jsx-key: off */
import * as React from 'react';
import { Admin, Resource, RouteWithoutLayout } from 'react-admin'; // eslint-disable-line import/no-unresolved
import { render } from 'react-dom';
import { Route } from 'react-router-dom';

import authProvider from './authProvider';
import comments from './comments';
import CustomRouteLayout from './customRouteLayout';
import CustomRouteNoLayout from './customRouteNoLayout';
import dataProvider from './dataProvider';
import i18nProvider from './i18nProvider';
import Layout from './Layout';
import posts from './posts';
import users from './users';
import PowerBi from './PowerBI';
import tags from './tags';
import Dashboard from './Dashboard';
import Helper from './helper'

render(
    <React.StrictMode>
        <Admin
            dashboard={PowerBi}
            authProvider={authProvider}
            dataProvider={dataProvider}
            i18nProvider={i18nProvider}
            title="Личный кабинет"
            layout={Layout}
            customRoutes={[
                <RouteWithoutLayout
                    exact
                    path="/custom"
                    component={props => <CustomRouteNoLayout {...props} />}
                />,
                <Route exact
                       path="/custom2"
                       component={props => <CustomRouteLayout {...props} />}
                />,
                <Route exact
                       path="/helper"
                       component={props => <Helper {...props}/>} />,
            ]}
        >
            {permissions => [
                <Resource name="dashboard" {...Dashboard} />,
                <Resource name="posts" options={{ label: 'Новости' }} {...posts} />,
                <Resource name="comments" options={{ label: 'Заявки арендаторов' }} {...comments} />,
                permissions ? <Resource name="users" options={{ label: 'Арендаторы' }} {...users} /> : null,
                <Resource name="tags" {...tags} options={{ label: 'Категории новостей' }}/>,
            ]}
        </Admin>
    </React.StrictMode>,
    document.getElementById('root')
);
