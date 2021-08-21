import * as React from "react";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Title } from 'react-admin';

const Helper = () => (
    <Card>
        <Title title="Демонстрация возможнстей ассистента" />

        <CardContent>
            <iframe src="http://vr.plannerix.com/" width="100%" height="760" align="left">
                Ваш браузер не поддерживает плавающие фреймы!
            </iframe>
            ...

        </CardContent>
    </Card>
);

export default Helper;
