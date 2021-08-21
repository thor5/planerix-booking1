import { FC } from 'react'
import { Grid, Button, Box } from '@material-ui/core'
import { Field, Form, Formik } from 'formik'
import { TextField } from 'formik-material-ui'
import { useSelector } from 'react-redux'
import { RootState } from '../store'
import { useCreateFloorSpaceMutation } from '../store/query/floor'

type Props = {
  onClose?: () => void
}

export const FormBooking: FC<Props> = ({ onClose }) => {
  const {
    bookings: { selectedSpace },
  } = useSelector((store: RootState) => store)
  console.log(selectedSpace)
  const [createSpace] = useCreateFloorSpaceMutation()
  if (!selectedSpace) {
    return null
  }
  return (
    <Formik
      initialValues={{ fullName: '', email: '', title: '' }}
      onSubmit={async (values) => {
        console.log(values)

        await createSpace({
          idExt: selectedSpace.id,
          title: values.title,
          description: 'хорошее помещение',
          usage: 'meet',
          pricePerMetr: 200,
          rent: 32,
          perHour: null,
          fullName: 'jon juyek',
          email: 'ee@mm.ru',
          booked: true,
        }).unwrap()

        //@ts-ignore
        onClose()
      }}
    >
      {() => (
        <Form>
          <Grid container direction="column" spacing={2}>
            <Grid item>
              <Field component={TextField} name="title" label="Название" />
            </Grid>
            <Grid item>
              <Field
                component={TextField}
                name="fullName"
                label="Введите имя фамилию"
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
                <Button variant="contained" color="primary" type="submit">
                  Забронировать
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Form>
      )}
    </Formik>
  )
}
