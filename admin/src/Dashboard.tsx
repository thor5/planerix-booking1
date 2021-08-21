import * as React from "react";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Title } from 'react-admin';

const Dashboard = () => (
    <Card>
        <Title title="Основные показатели БЦ" />
        <CardContent>Статистика по кластеру на текущий момент</CardContent>
        <iframe
            src="https://app.powerbi.com/view?r=eyJrIjoiNjE3ODcwMjctODQ5MS00MjRhLWFlOWQtYjI1ZDkyNDdhMTliIiwidCI6IjJlOGEyY2FkLWM2ODgtNDkzMS1hZWI4LTk3MGJiNWYyMDgwMCIsImMiOjl9&pageName=ReportSection28b0a1fd8cdc3112c8e8"
            width="100%" height="760" align="left">
            Ваш браузер не поддерживает плавающие фреймы!
        </iframe>
    </Card>
);

export default { Dashboard }
