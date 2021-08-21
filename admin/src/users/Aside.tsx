import * as React from 'react';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
        [theme.breakpoints.up('sm')]: {
            width: 200,
            margin: '1em',
        },
        [theme.breakpoints.down('sm')]: {
            width: 0,
            overflowX: 'hidden',
            margin: 0,
        },
    },
}));

const Aside = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Typography variant="h6">Арендаторы</Typography>
            <Typography variant="body2">
                Перечень резидентов креативного кластера «Контактор»
            </Typography><br/><br/>
            <Typography variant="body2">
                <a href="/#/helper">Демонстрация ассистента для резидентов</a>
            </Typography>
        </div>
    );
};

export default Aside;
