import { FC } from 'react'
import { Grid, Button, Box } from '@material-ui/core'
import { Field, Form, Formik } from 'formik'
import { TextField } from 'formik-material-ui'
import { useSelector } from 'react-redux'
import { RootState } from '../store'

type Props = {}

export const FormBooking: FC<Props> = () => {
  const {
    bookings: { selectedSpace },
  } = useSelector((store: RootState) => store)
  // console.log(selectedSpace)
  return (
    <Formik
      initialValues={selectedSpace || { fullName: '', email: '' }}
      onSubmit={(values) => {
        console.log(values)
      }}
    >
      {() => (
        <Form>
          <Grid container direction="column" spacing={2}>
            <Grid item>Подача заявки на аренду помещения</Grid>
            <Grid item>
              <Field
                component={TextField}
                name="fullName"
                label="Введите ваше имя"
              />
            </Grid>
            <Grid item>
              <Field
                component={TextField}
                name="email"
                label="Введите вашу почту"
              />
            </Grid>
            <Grid item>
              <Box>
                <Button variant="contained" color="secondary" type="submit">
                  Сохранить
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Form>
      )}
    </Formik>
  )
}
