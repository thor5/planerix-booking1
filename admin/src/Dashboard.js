import * as React from "react";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Title } from 'react-admin';
export default () => (
    <Card>
        <Title title="Основные показатели БЦ" />
        <CardContent>Статистика по кластеру на текущий момент</CardContent>
        <iframe
            src="https://app.powerbi.com/view?r=eyJrIjoiNmI0MDg2NzQtNDYyYi00N2I3LThjNDMtOTBmNTBhMTFhYzgyIiwidCI6IjJlOGEyY2FkLWM2ODgtNDkzMS1hZWI4LTk3MGJiNWYyMDgwMCIsImMiOjl9"
            width="100%" height="760" align="left">
            Ваш браузер не поддерживает плавающие фреймы!
        </iframe>

    </Card>
);
