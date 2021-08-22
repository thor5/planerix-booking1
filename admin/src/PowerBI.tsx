import * as React from "react";
import Card from '@material-ui/core/Card';
import { Title } from 'react-admin';

const DashboardComponent = () => (
    <Card>
        <Title title="Основные показатели Креативного кластера" />
        <iframe
            src="https://app.powerbi.com/view?r=eyJrIjoiNjE3ODcwMjctODQ5MS00MjRhLWFlOWQtYjI1ZDkyNDdhMTliIiwidCI6IjJlOGEyY2FkLWM2ODgtNDkzMS1hZWI4LTk3MGJiNWYyMDgwMCIsImMiOjl9&pageName=ReportSection28b0a1fd8cdc3112c8e8"
            width="100%" height="760" align="left">
            Ваш браузер не поддерживает плавающие фреймы!
        </iframe>
    </Card>
);

export default DashboardComponent;
